import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import GoBackButton from './GoBackButton';
import SettingButton from './SettingButton';
import SearchButton from './SearchButton';
import NotificationButton from './NotifcationButton';
import Logo from './Logo';

interface HeaderProps {
  logo?: boolean;
  goBack?: boolean;
  title?: string;
  setting?: boolean;
  search?: boolean;
  notification?: boolean;
}

export default function Header({ logo, goBack, title, setting, search, notification }: HeaderProps) {
  return (
    <Navbar>
      {logo && (
        <NavbarBrand>
          <Link href="/">
            <Logo width={106} height={18} />
          </Link>
        </NavbarBrand>
      )}

      {goBack && (
        <NavbarContent justify="start">
          <NavbarItem>
            <GoBackButton />
          </NavbarItem>
        </NavbarContent>
      )}

      {title && (
        <NavbarContent justify="center">
          <NavbarItem className="font-medium">{title}</NavbarItem>
        </NavbarContent>
      )}

      {setting && (
        <NavbarContent justify="end">
          <NavbarItem>
            <SettingButton />
          </NavbarItem>
        </NavbarContent>
      )}

      {search && (
        <NavbarContent justify="end">
          <NavbarItem>
            <SearchButton />
          </NavbarItem>
          <NavbarItem>
            <NotificationButton />
          </NavbarItem>
        </NavbarContent>
      )}

      {notification && (
        <NavbarContent justify="end">
          <NavbarItem>
            <NotificationButton />
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
