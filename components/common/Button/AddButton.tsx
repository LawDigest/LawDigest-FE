import { Button } from '@nextui-org/button';
import { IconPlus } from '@/public/svgs';

export default function AddButon() {
  return (
    <Button isIconOnly className="bg-transparent">
      <IconPlus />
    </Button>
  );
}
