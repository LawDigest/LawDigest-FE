import Link from 'next/link';
import { Card, CardHeader, CardBody } from '@nextui-org/card';
import { ProportionalPromiseProps } from '@/types';

export default function PromiseItem({ party_promise_id, title, content }: ProportionalPromiseProps) {
  return (
    <Link href={`/election/party/promise/${party_promise_id}`}>
      <Card className="py-7 px-[18px]">
        <CardHeader className="p-0 pb-5">
          <h2 className="text-lg font-semibold">{title}</h2>
        </CardHeader>

        <CardBody className="p-0">
          <p className="text-sm line-clamp-4">{content}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
