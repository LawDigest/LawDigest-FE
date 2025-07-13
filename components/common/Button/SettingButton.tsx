'use client';

import { useState } from 'react';
import { IconSetting } from '@/public/svgs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { WithdrawModal } from '../Modal';

export default function SettingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <WithdrawModal isOpen={isOpen} onOpenChange={() => setIsOpen(false)} />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <IconSetting />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
            <p className="w-full h-6 text-sm text-center">회원탈퇴</p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
