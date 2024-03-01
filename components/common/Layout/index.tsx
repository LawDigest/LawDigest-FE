import { Header } from '../Header';
import Nav from '../Nav';

interface LayoutProps {
  logo?: boolean;
  goBack?: boolean;
  title?: string;
  setting?: boolean;
  search?: boolean;
  children: React.ReactNode;
}

export default function Layout({ logo, goBack, title, setting, search, children }: LayoutProps) {
  return (
    <section className="w-full h-full flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  sm:w-[430px]">
      <Header logo={logo} goBack={goBack} title={title} setting={setting} search={search} />
      <section className="w-full h-full overflow-scroll">{children}</section>
      <Nav />
    </section>
  );
}
