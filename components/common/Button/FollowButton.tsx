'use client';

import { UseMutationResult } from '@tanstack/react-query';
import { BaseResponse, CongressmanFollowResponse } from '@/types';
import { useCallback, useState } from 'react';
import { Button } from '@nextui-org/react';

export default function FollowButton({
  congressmanId,
  likeChecked,
  apiHook,
}: {
  congressmanId: string;
  likeChecked: boolean;
  apiHook: (
    congressmanId: string,
  ) => UseMutationResult<BaseResponse<CongressmanFollowResponse>, Error, boolean, unknown>;
}) {
  const [isFollowed, setIsFollowed] = useState(likeChecked);
  const mutationFollow = apiHook(congressmanId);

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
