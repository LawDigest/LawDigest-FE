import { RxAvatar } from 'react-icons/rx';
import CardContainer from './components/Card/CardContainer';
import FollowItem from './components/Card/FollowItem';
import FollowList from './components/Card/FollowList';

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
      <CardContainer>
        <RxAvatar className="mx-auto mt-2 mb-4 text-black rounded-full bg-gray-1 h-28 w-28" />

        <FollowList>
          {followList.map(({ title, followCount }) => (
            <FollowItem key={title} title={title} followCount={followCount} />
          ))}
        </FollowList>
      </CardContainer>
    </div>
  );
}
