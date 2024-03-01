import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import GoBackButton from './GoBackButton';
import SettingButton from './SettingButton';
import SearchButton from './SearchButton';
import NotificationButton from './NotifcationButton';
import Logo from './Logo';

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
            <Logo width={106} height={18} />
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
