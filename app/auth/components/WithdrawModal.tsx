'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/app/common/components/ui/dialog';
import { Button } from '@/app/common/components/ui/button';
import { ACCESS_TOKEN } from '@/app/common/constants';
import { deleteCookie } from 'cookies-next';
import { useWithdraw } from '@/app/auth/apis';

export default function WithdrawModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: () => void }) {
  const router = useRouter();

  const { mutate: withdraw } = useWithdraw({
    onSuccess: () => {
      deleteCookie(ACCESS_TOKEN);
      router.push('/login');
    },
  });

  const onClickWithdraw = useCallback(async () => {
    withdraw();
  }, [withdraw]);

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
