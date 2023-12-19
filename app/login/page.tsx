import Header from '@/components/common/Header';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import Link from 'next/link';

export default function Login() {
  return (
    <section className="w-[95%] h-full flex flex-col justify-center items-center">
      <Header hasDivider={false} />
      <form className="w-full h-[300px] mt-[50px]">
        <Input className="full" type="email" variant="underlined" label="이메일" placeholder="이메일 입력" />
        <Input className="full" type="password" variant="underlined" label="비밀번호" placeholder="비밀번호 입력" />

        <div className="w-full flex flex-col justify-center mt-[100px] gap-2 items-center">
          <div>아이디 찾기 | 비밀번호 찾기</div>
          <Button radius="full" className="w-full text-white bg-black">
            <Link href="/">로그인</Link>
          </Button>
          <Button radius="full" className="w-full text-white bg-[#999999]">
            <Link href="/signup">회원가입</Link>
          </Button>
        </div>
      </form>
    </section>
  );
}
