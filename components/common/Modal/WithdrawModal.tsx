'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ACCESS_TOKEN } from '@/constants';
import { deleteCookie } from 'cookies-next';
import { postWithdraw } from './apis';

export default function WithdrawModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
  const router = useRouter();
  const onClickWithdraw = useCallback(() => {
    postWithdraw().then((res) => {
      if (Number(res.code) === 200) {
        deleteCookie(ACCESS_TOKEN);
        router.push('/login');
      }
    });
  }, [router]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>주의</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <p>회원탈퇴를 진행하시겠습니까 ?</p>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onOpenChange}>
            취소
          </Button>
          <Button variant="destructive" onClick={onClickWithdraw}>
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
