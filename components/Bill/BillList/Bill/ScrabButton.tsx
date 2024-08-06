'use client';

import { useState, useCallback } from 'react';
import { usePatchBookmark } from '@/app/bill/[id]/apis';
import { useSetRecoilState } from 'recoil';
import { snackbarState } from '@/store';
import { getCookie } from 'cookies-next';
import { ACCESS_TOKEN } from '@/constants';
import { Button } from '@nextui-org/react';
import { IconScrabSmall } from '@/public/svgs';

export default function ScrabButton({ bill_id, is_book_mark }: { bill_id: string; is_book_mark: boolean }) {
  const [isLiked, setIsLiked] = useState(is_book_mark);
  const mutateBookmark = usePatchBookmark(bill_id);
  const setSnackbar = useSetRecoilState(snackbarState);

  const onClickScrab = useCallback(() => {
    const accessToken = getCookie(ACCESS_TOKEN);

    if (accessToken) {
      setIsLiked(!isLiked);
      setSnackbar({
        show: true,
        type: 'SUCCESS',
        message: isLiked ? '해당 법안의 스크랩을 취소했습니다.' : '해당 법안을 스크랩했습니다.',
        duration: 3000,
      });

      mutateBookmark.mutate(!isLiked);
    } else {
      setSnackbar({ show: true, type: 'ERROR', message: '로그인이 필요한 서비스입니다.', duration: 3000 });
    }
  }, [isLiked, is_book_mark, setSnackbar]);

  return (
    <Button isIconOnly size="sm" className="p-0 bg-transparent" onClick={onClickScrab}>
      <IconScrabSmall isActive={isLiked} />
    </Button>
  );
}
