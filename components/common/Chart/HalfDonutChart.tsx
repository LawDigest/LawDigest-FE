import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { COLOR } from '@/constants/theme';

// 툴팁 인터페이스 정의
interface TooltipData {
  visible: boolean;
  x: number;
  y: number;
  partyName: string;
  partyId: number;
  value: number;
  color: string;
  percentage: number;
}

// 정당 투표 정보 인터페이스
interface PartyVote {
  party_info: {
    party_id: number;
    party_name: string;
    party_image_url: string;
  };
  party_approval_count: number;
}

// 차트 Props 인터페이스
interface HalfDonutChartProps {
  billResult: string;
  approvalCount: number;
  totalVoteCount: number;
  partyVoteList: PartyVote[];
  width?: number;
  height?: number;
}

// 차트 컬러 매핑 함수
const getChartColor = (index: number): string => {
  const colors = [
    'var(--color-chart-1)',
    'var(--color-chart-2)',
    'var(--color-chart-3)',
    'var(--color-chart-4)',
    'var(--color-chart-5)',
  ];
  return colors[index % colors.length];
};

export default function HalfDonutChart({
  billResult,
  approvalCount,
  totalVoteCount,
  partyVoteList,
  width = 300,
  height = 140,
}: HalfDonutChartProps) {
  // 승인율 계산 (전체 투표 중 승인 비율)
  const approvalPercentage = useMemo(
    () => (totalVoteCount > 0 ? (approvalCount / totalVoteCount) * 100 : 0),
    [approvalCount, totalVoteCount],
  );

  // 애니메이션을 위한 상태
  const [animatedValue, setAnimatedValue] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const prevTotalValueRef = useRef(0);

  // 툴팁을 위한 상태
  const [tooltip, setTooltip] = useState<TooltipData>({
    visible: false,
    x: 0,
    y: 0,
    partyName: '',
    partyId: 0,
    value: 0,
    color: '',
    percentage: 0,
  });

  // SVG 컨테이너 ref
  const svgRef = useRef<SVGSVGElement>(null);

  // 애니메이션 효과
  useEffect(() => {
    // 기존 값에서 목표 값까지 애니메이션 설정
    const startValue = prevTotalValueRef.current; // 이전 값부터 시작
    const duration = 1000; // 애니메이션 지속 시간 (밀리초)
    const startTime = Date.now();

    const animateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // 이지 아웃 애니메이션 (점점 느려지는 효과)
      const easeOutProgress = 1 - (1 - progress) ** 3;

      const currentValue = startValue + (approvalPercentage - startValue) * easeOutProgress;
      setAnimatedValue(currentValue);
      setDisplayPercentage(Math.round(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      } else {
        setAnimatedValue(approvalPercentage);
        setDisplayPercentage(Math.round(approvalPercentage));
        prevTotalValueRef.current = approvalPercentage;
      }
    };

    requestAnimationFrame(animateValue);

    return () => {
      // 애니메이션 정리 작업이 필요한 경우
    };
  }, [approvalPercentage]);

  // SVG 크기와 반지름 정의
  const mainDonutThickness = 25; // 주 도넛 두께
  const subDonutThickness = 5; // 서브 도넛 두께
  const margin = 10; // 여백
  const cornerRadius = 10; // 도넛 끝의 둥근 반경

  // 반지름 계산 (메인 도넛의 바깥쪽 반지름)
  const outerRadius = Math.min(width, height * 2) / 2 - margin - 10; // 약간 더 작게 조정
  const innerRadius = outerRadius - mainDonutThickness;
  const subOuterRadius = outerRadius + margin;
  const subInnerRadius = subOuterRadius - subDonutThickness;

  // 중심점 설정
  const centerX = width / 2;
  const centerY = height;

  // 각도 계산을 위한 함수 (D3 arc 사용)
  const arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(-Math.PI / 2) // 반원의 시작점 (왼쪽)
    .endAngle(Math.PI / 2) // 반원의 끝점 (오른쪽)
    .cornerRadius(cornerRadius); // 끝을 둥글게 처리

  // 진행 상태를 보여주는 아크 생성 (애니메이션 값 사용)
  const progressArc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(-Math.PI / 2)
    .endAngle((animatedValue / 100) * Math.PI - Math.PI / 2) // 애니메이션 값에 따른 각도
    .cornerRadius(cornerRadius); // 끝을 둥글게 처리

  // 서브 아크를 위한 최소 각도 (라디안)
  const MIN_ARC_ANGLE = 0.08; // 약 4.58도

  // 정당별 누적 백분율 계산 및 서브 아크 생성
  const partyArcs = useMemo(() => {
    // 작은 정당들의 시각적 표현을 위한 크기 조정
    const MIN_VISUAL_PERCENTAGE = 5; // 최소 5% 시각적 크기

    // 먼저 모든 정당의 실제 백분율 계산
    const partiesWithPercentage = partyVoteList.map((party) => {
      const percentage = (party.party_approval_count / totalVoteCount) * 100;
      return {
        party,
        percentage,
        // 표시 백분율: 실제 백분율이 최소값보다 작으면 최소값으로, 아니면 실제 백분율 사용
        visualPercentage: Math.max(percentage, MIN_VISUAL_PERCENTAGE),
      };
    });

    // 메인 아크의 현재 진행 상태에 맞춘 최대 각도 계산
    const maxAvailableAngle = (animatedValue / 100) * Math.PI; // 메인 아크의 현재 진행 각도

    // 정당 수에 따른 동적 최소 각도 계산
    const partyCount = partiesWithPercentage.length;
    const totalGapAngle = partyCount * 0.02; // 각 정당 간 간격 (0.01 * 2)
    const availableAngleForArcs = Math.max(0, maxAvailableAngle - totalGapAngle);

    // 동적 최소 각도: 사용 가능한 각도를 정당 수로 나눈 값과 기존 MIN_ARC_ANGLE 중 작은 값
    const dynamicMinArcAngle = Math.min(MIN_ARC_ANGLE, availableAngleForArcs / partyCount);

    // 시각적 백분율의 합계 계산
    const totalVisualPercentage = partiesWithPercentage.reduce((sum, item) => sum + item.visualPercentage, 0);

    // 시각적 백분율을 메인 아크의 현재 진행률에 맞춰 스케일링
    let scaleFactor = 1;
    if (totalVisualPercentage > animatedValue) {
      scaleFactor = animatedValue / totalVisualPercentage;
    }

    // 누적 백분율 계산 및 아크 생성
    let cumulativePercentage = 0;

    return partiesWithPercentage.map((item, index) => {
      const startPercentage = cumulativePercentage;
      // 시각적 백분율에 스케일 팩터 적용
      const adjustedVisualPercentage = item.visualPercentage * scaleFactor;
      cumulativePercentage += adjustedVisualPercentage;

      // 각도로 변환 (백분율을 메인 아크 진행 범위 내 각도로)
      const startAngle = (startPercentage / 100) * Math.PI - Math.PI / 2;
      const endAngle = (cumulativePercentage / 100) * Math.PI - Math.PI / 2;

      // 간격을 위한 조정
      const adjustedStartAngle = startAngle + 0.01;
      const maxEndAngle = (animatedValue / 100) * Math.PI - Math.PI / 2 - 0.01; // 메인 아크 최대 각도
      const adjustedEndAngle = Math.min(endAngle - 0.01, maxEndAngle);

      // 최소 각도 보장하되 메인 아크 범위를 넘지 않도록 제한
      const finalEndAngle = Math.min(Math.max(adjustedEndAngle, adjustedStartAngle + dynamicMinArcAngle), maxEndAngle);

      const arcPath = d3
        .arc()
        .innerRadius(subInnerRadius)
        .outerRadius(subOuterRadius)
        .startAngle(adjustedStartAngle)
        .endAngle(finalEndAngle)
        .cornerRadius(cornerRadius / 2)();

      return {
        party: item.party,
        percentage: item.percentage, // 실제 백분율 (툴팁 등에 사용)
        startPercentage,
        endPercentage: cumulativePercentage,
        color: getChartColor(index),
        arcPath,
      };
    });
  }, [partyVoteList, totalVoteCount, animatedValue]);

  // 툴팁 표시/숨김 핸들러
  const handleMouseEnter = (
    e: React.MouseEvent<SVGPathElement>,
    party: PartyVote,
    color: string,
    percentage: number,
  ) => {
    // 마우스 위치 계산 (SVG 좌표계에서 페이지 좌표계로 변환)
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    // 페이지 내에서의 마우스 위치
    const x = e.clientX - svgRect.left;
    const y = e.clientY - svgRect.top;

    setTooltip({
      visible: true,
      x,
      y,
      partyName: party.party_info.party_name,
      partyId: party.party_info.party_id,
      value: party.party_approval_count,
      color,
      percentage,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  // 마우스 이동 시 툴팁 위치 업데이트
  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>) => {
    if (!tooltip.visible) return;

    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    // 페이지 내에서의 마우스 위치
    const x = e.clientX - svgRect.left;
    const y = e.clientY - svgRect.top;

    setTooltip((prev) => ({ ...prev, x, y }));
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* SVG 차트 */}
      <svg width={width} height={height} ref={svgRef}>
        {/* 배경 반원 */}
        <path d={arc() as string} fill="#e6e6e6" transform={`translate(${centerX}, ${centerY})`} />

        {/* 진행 상태를 표시하는 반원 */}
        <path
          d={progressArc() as string}
          fill={billResult === '부결' ? '#EB6969' : '#3CC692'}
          transform={`translate(${centerX}, ${centerY})`}
        />

        {/* 정당별 서브 아크 */}
        {partyArcs.map((partyArc) => (
          <path
            key={partyArc.party.party_info.party_id}
            d={partyArc.arcPath as string}
            fill={COLOR[partyArc.party.party_info.party_name as keyof typeof COLOR]}
            transform={`translate(${centerX}, ${centerY})`}
            onMouseEnter={(e) => handleMouseEnter(e, partyArc.party, partyArc.color, partyArc.percentage)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={{ cursor: 'pointer' }}
            aria-label={`${partyArc.party.party_info.party_name}: ${partyArc.party.party_approval_count}`}
            role="graphics-symbol"
          />
        ))}

        {/* 투표 상태 */}
        <text
          x={centerX}
          y={centerY - 55}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-semibold">
          {billResult}
        </text>

        {/* 투표 결과 비율 */}
        <text
          x={centerX}
          y={centerY - 20}
          textAnchor="middle"
          dominantBaseline="middle"
          className="flex items-end text-2xl font-medium">
          <tspan className="text-2xl font-bold">{approvalCount}</tspan>
          <tspan className="text-sm font-normal"> / {totalVoteCount}</tspan>
        </text>
      </svg>

      {/* 툴팁 - 정당별 투표 결과 */}
      {tooltip.visible && (
        <div
          className="absolute z-10 p-3 border rounded-md shadow-lg pointer-events-none bg-popover min-w-32 text-popover-foreground"
          style={{
            left: `${tooltip.x + 15}px`,
            top: `${tooltip.y + 15}px`,
            transform: 'translate(-50%, -100%)',
          }}>
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 mr-2 rounded-full" style={{ backgroundColor: tooltip.color }} />
            <span className="font-medium">{tooltip.partyName}</span>
          </div>
          <div className="flex justify-between">
            <span>득표수:</span>
            <span className="font-semibold">{tooltip.value}</span>
          </div>
          <div className="flex justify-between">
            <span>비율:</span>
            <span className="font-semibold">{tooltip.percentage.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span>총합 대비:</span>
            <span className="font-semibold">{((tooltip.value / approvalCount) * 100).toFixed(1)}%</span>
          </div>

          {/* 툴팁 삼각형 화살표 */}
          <div
            className="absolute w-0 h-0 border-t-8 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-popover"
            style={{
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      )}
    </div>
  );
}
