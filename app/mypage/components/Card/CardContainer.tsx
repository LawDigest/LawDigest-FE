import { Button } from '@nextui-org/button';

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="text-white bg-gray-4 w-[394px] h-[270px] rounded-xl mx-auto p-5 mt-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">내 피드</h1>
        <Button className="w-20 h-6 text-sm text-white rounded-full bg-primary-3">로그아웃</Button>
      </div>

      {children}
    </div>
  );
}
