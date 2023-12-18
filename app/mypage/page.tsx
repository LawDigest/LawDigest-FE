import { RxAvatar } from 'react-icons/rx';
import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import FollowItem from './components/Card';

const followList = [
  {
    title: '팔로우한 의원',
    followCount: 12,
  },
  {
    title: '팔로우한 정당',
    followCount: 3,
  },
  {
    title: '팔로우한 의안',
    followCount: 16,
  },
];

export default function MyPage() {
  return (
    <div>
      <Card className="text-white bg-gray-4 w-[394px] h-[270px] rounded-xl mx-auto p-5 mt-5">
        <CardHeader className="flex justify-between p-0">
          <h1 className="text-2xl font-bold">내 피드</h1>
          <Button className="w-20 h-6 text-sm text-white rounded-full bg-primary-3">로그아웃</Button>
        </CardHeader>

        <CardBody className="p-0">
          <RxAvatar className="mx-auto text-black rounded-full bg-gray-1 h-28 w-28" />
        </CardBody>

        <CardFooter className="flex justify-center gap-4">
          {followList.map(({ title, followCount }) => (
            <FollowItem key={title} title={title} followCount={followCount} />
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}
