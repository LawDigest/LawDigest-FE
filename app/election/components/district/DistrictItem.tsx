import { Button } from '@nextui-org/react';
import { CookieValueTypes } from 'cookies-next';

export default function DistrictItem({
  name,
  onClick,
}: {
  name: string | CookieValueTypes;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button className="m-1 text-lg font-medium text-center bg-transparent h-[54px]" onClick={onClick} value={name}>
      {name}
    </Button>
  );
}
