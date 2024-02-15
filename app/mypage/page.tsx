import { Button } from '@nextui-org/button';
import { Avatar } from '@nextui-org/avatar';
import AddButon from '@/components/common/Button/AddButton';

export default function MyPage() {
  return (
    <div className="flex flex-col gap-8 bg-[#F1F1F1] h-full">
      <section className="flex items-center px-[30px] justify-between h-[200px] shadow-md rounded-xl bg-white">
        <div className="flex items-center">
          <Avatar src="/images/basicAvatar.png" className="w-[100px] h-[100px] mr-4" />

          <div className="flex flex-col gap-3">
            <p className="text-3xl font-semibold">홍길동</p>
            <p className="text-[#999999] text-xs">abcd123@gmail.com</p>
          </div>
        </div>

        <Button
          radius="full"
          size="sm"
          variant="bordered"
          className="h-8 bg-transparent border-1 border-[#E0E0E0] text-[#999999] ">
          로그아웃
        </Button>
      </section>

      <section className="px-[30px]">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">
            팔로우한 정당 &middot;<span className="text-[#555555]"> 3</span>
          </p>

          <AddButon />
        </div>
      </section>

      <hr className="mx-[30px]" />

      <section className="px-[30px]">
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">
            팔로우한 의원 &middot;<span className="text-[#555555]"> 13</span>
          </p>

          <AddButon />
        </div>
      </section>
    </div>
  );
}
