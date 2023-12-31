import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@nextui-org/card';

interface PartyProps {
  name: string;
  src: string;
  memberLength: number;
}

export default function Party({ name, src, memberLength }: PartyProps) {
  return (
    <div className="overflow-hidden border rounded-2xl min-w-[140px] mr-4">
      <Card shadow="sm" key={name}>
        <CardBody className="p-0 overflow-visible ">
          <Image src={src} alt={name} width={140} height={140} />
        </CardBody>
        <CardFooter className="flex flex-col items-center justify-center text-sm">
          <b>{name}</b>
          <p className="text-default-500">의원수 {memberLength}명</p>
        </CardFooter>
      </Card>
    </div>
  );
}
