const list = [
  {
    string: '자율주행차량',
    num: 0,
  },
  {
    string: '보조금 지원',
    num: 1,
  },
  {
    string: '운수사업법',
    num: 2,
  },
  {
    string: '도로교통법 개정안',
    num: 3,
  },
];

export default function Keyword() {
  return (
    <div className="text-2xl ">
      {list.map(({ string, num }) => (
        <div key={num}># {string}</div>
      ))}
    </div>
  );
}
