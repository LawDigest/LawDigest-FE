'use client';

import { useCallback, useState } from 'react';
import { Button } from '@nextui-org/react';
import { usePatchCongressmanFollow } from '../../apis';

export default function FollowButton({ congressmanId, likeChecked }: { congressmanId: string; likeChecked: boolean }) {
  const [isFollowed, setIsFollowed] = useState(likeChecked);
  const mutationFollow = usePatchCongressmanFollow(congressmanId);

  const onClickFollow = useCallback(() => {
    setIsFollowed(!isFollowed);

    mutationFollow.mutate(!isFollowed);
  }, [isFollowed, likeChecked]);

  return (
    <Button
      radius="full"
      onClick={onClickFollow}
      className={`text-lg font-medium bg-${isFollowed ? 'gray-1' : 'primary-3'} text-${isFollowed ? 'gray-3' : 'white'}`}>
      팔로우
    </Button>
  );
}
