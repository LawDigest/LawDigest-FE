import { Header } from '../Header';
import Nav from '../Nav';

interface LayoutProps {
  logo: boolean;
  setting: boolean;
  children: React.ReactNode;
}

export default function Layout({ logo, setting, children }: LayoutProps) {
  return (
    <section className="w-full h-full flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:w-[430px]">
      <Header logo={logo} setting={setting} />
      <section className="w-full h-full gap-2 overflow-scroll">{children}</section>
      <Nav />
    </section>
  );
}
