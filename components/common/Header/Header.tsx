import Link from 'next/link';
import Image from 'next/image';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import GoBackButton from './GoBackButton';
import SettingButton from './SettingButton';
import SearchButton from './SearchButton';
import NotificationButton from './NotifcationButton';

interface HeaderProps {
  logo: boolean;
  setting: boolean;
}

export default function Header({ logo, setting }: HeaderProps) {
  return (
    <Navbar>
      {logo ? (
        <NavbarBrand>
          <Link href="/">
            <Image src="/images/logo.png" width={106} height={64} alt="로고이미지" />
          </Link>
        </NavbarBrand>
      ) : (
        <NavbarContent justify="start">
          <NavbarItem>
            <GoBackButton />
          </NavbarItem>
        </NavbarContent>
      )}

      {setting ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <SettingButton />
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem>
            <SearchButton />
          </NavbarItem>
          <NavbarItem>
            <NotificationButton />
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
