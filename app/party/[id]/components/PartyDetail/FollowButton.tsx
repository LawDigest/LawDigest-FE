'use client';

import { useCallback, useState } from 'react';
import { Button } from '@nextui-org/react';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { useSetRecoilState } from 'recoil';
import { snackbarState } from '@/store';
import { usePatchPartyFollow } from '../../apis';

export default function FollowButton({ id, followed }: { id: number; followed: boolean }) {
  const [isFollowed, setIsFollowed] = useState(followed);
  const mutationFollow = usePatchPartyFollow(id);
  const setSnackbar = useSetRecoilState(snackbarState);

  const onClickFollow = useCallback(() => {
    const accessToken = getCookie(ACCESS_TOKEN);

    if (accessToken) {
      setIsFollowed(!isFollowed);
      setSnackbar({
        show: true,
        type: 'SUCCESS',
        message: isFollowed ? '해당 정당의 팔로우를 취소했습니다.' : '해당 정당을 팔로우했습니다.',
        duration: 3000,
      });

      mutationFollow.mutate(!isFollowed);
    } else {
      setSnackbar({ show: true, type: 'ERROR', message: '로그인이 필요한 서비스입니다.', duration: 3000 });
    }
  }, [isFollowed, followed, setSnackbar]);

  return (
    <Button
      radius="full"
      onClick={onClickFollow}
      className={`w-full h-12 text-lg font-medium bg-${isFollowed ? 'gray-1' : 'primary-3'} text-${isFollowed ? 'gray-3' : 'white'}`}>
      {isFollowed ? '팔로우 취소' : '팔로우'}
    </Button>
  );
}
