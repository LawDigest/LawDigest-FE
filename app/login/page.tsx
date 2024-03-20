import { Logo } from '@/components/common/Header';
import { IconEmail, IconPassword } from '@/public/svgs';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Divider } from '@nextui-org/react';
import Link from 'next/link';

export default function Login() {
  return (
    <section className="w-[90%] mx-auto h-full flex flex-col justify-center items-center">
      <Logo width={222} height={37} />
      <form className="w-full h-[300px] mt-[120px]">
        <div className="flex flex-col gap-4">
          <Input type="email" variant="underlined" placeholder="이메일 입력" startContent={<IconEmail />} />
          <Input type="password" variant="underlined" placeholder="비밀번호 입력" startContent={<IconPassword />} />
        </div>

        <div className="w-full flex flex-col justify-center mt-[100px] gap-3 items-center">
          <div className="flex items-center gap-3 text-sm">
            <p>아이디 찾기</p>
            <Divider orientation="vertical" className="h-4 bg-black" />
            <p>비밀번호 찾기</p>
          </div>
          <Button radius="full" className="w-full h-[58px] text-lg font-medium text-white bg-primary-3">
            <Link href="/">로그인</Link>
          </Button>
          <Button radius="full" className="w-full h-[58px] text-lg font-medium text-white bg-gray-2">
            <Link href="/signup">회원가입</Link>
          </Button>
        </div>
      </form>
    </section>
  );
}
