import { ReactNode } from 'react';
import Header from '../Header';
import Nav from '../Nav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="w-full h-full flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:w-[430px]">
      <Header />
      <section className="w-full h-full overflow-scroll gap-2 py-[10px]">{children}</section>
      <Nav />
    </section>
  );
}
