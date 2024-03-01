import { IconUnchecked } from '@/public/svgs';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

export default function SignUp() {
  return (
    <section className="w-[90%] mx-auto h-full flex flex-col  ">
      <form className="flex flex-col w-full gap-10">
        <div>
          <h2 className="pl-1 text-lg font-medium">이름</h2>
          <Input type="text" variant="underlined" placeholder="이름" size="sm" />
        </div>

        <div>
          <h2 className="pl-1 text-lg font-medium">이메일</h2>
          <div className="flex items-end gap-4">
            <Input type="email" variant="underlined" placeholder="example@gmail.com" size="sm" />
            <Button size="sm" radius="full" className="w-[73px] h-[32px] bg-primary-3 text-white">
              중복확인
            </Button>
          </div>
        </div>

        <div>
          <h2 className="pl-1 text-lg font-medium">비밀번호</h2>
          <Input
            type="password"
            variant="underlined"
            placeholder="비밀번호 입력 (영어+숫자 8자 이상)"
            size="sm"
            endContent={<IconUnchecked />}
          />
          <Input
            type="password"
            variant="underlined"
            placeholder="비밀번호 확인"
            size="sm"
            endContent={<IconUnchecked />}
          />
        </div>

        <div>
          <h2 className="pl-1 text-lg font-medium">휴대폰 인증</h2>
          <div className="flex items-end gap-4">
            <Input type="phone" variant="underlined" placeholder="휴대폰 번호" size="sm" />
            <Button radius="full" size="sm" className="w-[73px] h-[32px] bg-primary-3 text-white">
              인증번호
            </Button>
          </div>
          <Input
            type="text"
            variant="underlined"
            placeholder="인증번호 입력"
            size="sm"
            endContent={<IconUnchecked />}
          />
        </div>

        <Button radius="full" className="w-full h-[58px] text-lg font-medium text-white bg-gray-2 mb-10">
          회원가입
        </Button>
      </form>
    </section>
  );
}
