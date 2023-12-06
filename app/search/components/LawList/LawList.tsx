import { Card, CardBody } from '@nextui-org/card';

const list = [
  {
    string: '',
    num: 0,
  },
  {
    string: '',
    num: 1,
  },
  {
    string: '',
    num: 2,
  },
];

export default function LawList() {
  return (
    <div className="grid gap-4">
      {list.map(({ string, num }) => (
        <Card shadow="none" className="bg-[#F1F3F5] h-[110px] border border-[#808080]" key={num}>
          <CardBody>
            <p>{string}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
