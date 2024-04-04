'use client';

import { useCallback, useState } from 'react';
import { Button } from '@nextui-org/react';
import { usePatchPartyFollow } from '../../apis';

export default function FollowButton({ id, followed }: { id: number; followed: boolean }) {
  const [isFollowed, setIsFollowed] = useState(followed);
  const mutationFollow = usePatchPartyFollow(id);

  const onClickFollow = useCallback(() => {
    setIsFollowed(!isFollowed);

    mutationFollow.mutate(!isFollowed);
  }, [isFollowed, followed]);

  return (
    <Button
      radius="full"
      onClick={onClickFollow}
      className={`w-full h-12 text-lg font-medium bg-${isFollowed ? 'gray-1' : 'primary-3'} text-${isFollowed ? 'gray-3' : 'white'}`}>
      {isFollowed ? '팔로우 취소' : '팔로우'}
    </Button>
  );
}
