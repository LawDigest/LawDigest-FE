import { AlarmIcon, LikeIcon, ShareIcon } from '@/components/common/icons';
import { Button } from '@nextui-org/button';

export default function CardFooter({ like, view }: { like: number; view: number }) {
  return (
    <div className="w-[92%] mt-[30px] flex justify-between items-center">
      <div className="flex justify-center gap-0">
        <Button className="bg-transparent" isIconOnly aria-label="Like">
          <LikeIcon color="black" />
        </Button>
        <Button className="bg-transparent" isIconOnly aria-label="Like">
          <AlarmIcon color="black" />
        </Button>
        <Button className="bg-transparent" isIconOnly aria-label="Like">
          <ShareIcon color="black" />
        </Button>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">좋아요</p>
          <p className=" text-default-400 text-small">{like}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">조회수</p>
          <p className="text-default-400 text-small">{view}</p>
        </div>
      </div>
    </div>
  );
}
