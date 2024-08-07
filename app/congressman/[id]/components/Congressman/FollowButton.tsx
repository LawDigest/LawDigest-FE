'use client';

import { useCallback, useState } from 'react';
import { Button } from '@nextui-org/react';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { useSetRecoilState } from 'recoil';
import { snackbarState } from '@/store';
import { usePatchCongressmanFollow } from '../../apis';

export default function FollowButton({ id, likeChecked }: { id: string; likeChecked: boolean }) {
  const [isFollowed, setIsFollowed] = useState(likeChecked);
  const mutationFollow = usePatchCongressmanFollow(id);
  const setSnackbar = useSetRecoilState(snackbarState);

  const onClickFollow = useCallback(() => {
    const accessToken = getCookie(ACCESS_TOKEN);

    if (accessToken) {
      setIsFollowed(!isFollowed);
      setSnackbar({
        show: true,
        type: isFollowed ? 'CANCEL' : 'SUCCESS',
        message: isFollowed ? '해당 의원의 팔로우를 취소했습니다.' : '해당 의원을 팔로우했습니다.',
        duration: 3000,
      });

      mutationFollow.mutate(!isFollowed);
    } else {
      setSnackbar({ show: true, type: 'ERROR', message: '로그인이 필요한 서비스입니다.', duration: 3000 });
    }
  }, [isFollowed, likeChecked, setSnackbar]);

  return (
    <Button
      radius="full"
      onClick={onClickFollow}
      className={`w-full h-12 text-lg font-medium ${isFollowed ? 'bg-gray-1 text-gray-3' : 'bg-primary-3 text-white dark:bg-gray-4 dark:text-gray-2'} `}>
      {isFollowed ? '팔로우 취소' : '팔로우'}
    </Button>
  );
}
