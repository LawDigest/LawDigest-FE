export default function getDateStatus(date: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 오늘 날짜의 시간을 0으로 설정

  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0); // 입력된 날짜의 시간을 0으로 설정

  // 이번 주의 시작일과 종료일 계산 (월요일 ~ 일요일)
  const dayOfWeek = today.getDay(); // 0 (일요일) ~ 6 (토요일)
  // dayOfWeek가 0 (일요일)이면 diffToMonday는 -6 (지난 주 월요일)
  // dayOfWeek가 1 (월요일)이면 diffToMonday는 0 (오늘이 월요일)
  // dayOfWeek가 6 (토요일)이면 diffToMonday는 -5 (이번 주 월요일)
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() + diffToMonday);
  // startOfWeek는 이미 setHours(0,0,0,0)이 적용된 today를 기반으로 하므로 별도 설정 필요 없음

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  // endOfWeek는 이미 setHours(0,0,0,0)이 적용된 startOfWeek를 기반으로 하므로 별도 설정 필요 없음

  // 이번 달의 시작일과 종료일 계산
  const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  // startOfMonth는 new Date()로 생성 시 기본적으로 시간이 00:00:00으로 설정됨

  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  // endOfMonth는 new Date()로 생성 시 기본적으로 시간이 00:00:00으로 설정됨

  // 날짜 상태 확인
  if (inputDate >= startOfWeek && inputDate <= endOfWeek) {
    return '이번 주';
  }
  if (inputDate >= startOfMonth && inputDate <= endOfMonth) {
    return '이번 달';
  }
  return '이전 알림';
}
