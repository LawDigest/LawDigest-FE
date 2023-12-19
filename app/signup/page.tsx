import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

export default function SignUp() {
  return (
    <section className="w-[95%] h-full flex flex-col justify-center items-center">
      {/* <Header hasDivider={false} /> */}
      <h1 className="flex justify-center w-full text-2xl">회원가입</h1>
      <form className="w-full h-[600px] mt-[30px]">
        <Input type="text" variant="underlined" label="이름" placeholder="이름 입력" />
        <Input type="email" variant="underlined" label="이메일" placeholder="이메일 입력" />
        <div className="flex justify-end w-full mt-2">
          <Button radius="full" size="sm">
            중복 확인
          </Button>
        </div>

        <Input
          className="mt-[30px]"
          type="password"
          variant="underlined"
          label="비밀번호"
          placeholder="비밀번호 입력"
        />
        <Input type="password" variant="underlined" label="비밀번호" placeholder="비밀번호 확인" />

        <Input className="mt-[30px]" type="phone" variant="underlined" label="휴대폰 번호" placeholder="휴대폰 입력" />
        <Input type="text" variant="underlined" label="인증번호 입력" placeholder="인증번호 입력" />
        <div className="flex justify-end w-full mt-2">
          <Button radius="full" size="sm">
            인증 번호
          </Button>
        </div>
        <div className="w-full flex flex-col justify-center mt-[50px] gap-2 items-center">
          <Button radius="full" className="w-full text-white bg-[#999999]">
            회원가입
          </Button>
        </div>
      </form>
    </section>
  );
}
