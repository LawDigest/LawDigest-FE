'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { BG, PARTY_NAME_MAP } from '@/constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 18,
        },
      },
    },
    tooltip: {
      titleFont: {
        size: 18,
      },
      bodyFont: {
        size: 16,
      },
    },
  },
};

export default function Chart({ partyNames, datas }: { partyNames: (keyof typeof BG)[]; datas: number[] }) {
  const backgroundColor = partyNames.map((name) => BG[name]);
  const labels = partyNames.map((name) => PARTY_NAME_MAP[name]);

  const data = {
    labels,
    datasets: [
      {
        label: '의원 수',
        data: datas,
        backgroundColor,
      },
    ],
  };

  return <Pie data={data} className="!w-2/3 !h-2/3 my-[30px]" options={options} />;
}
