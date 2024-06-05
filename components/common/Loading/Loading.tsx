import { Logo } from '../Header';

export default function Loading() {
  return (
    <section className="w-[90%] mx-auto h-full flex flex-col justify-center items-center gap-20">
      <Logo width={222} height={37} />

      <p>로딩 중입니다.</p>
    </section>
  );
}
