import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import { IconNotification, IconSearch } from '@/public/svgs';

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <Image src="/images/logo.png" width={106} height={64} alt="로고이미지" />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#">
            <IconSearch />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <IconNotification />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
