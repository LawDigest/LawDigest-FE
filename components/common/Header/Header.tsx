'use client';

import Link from 'next/link';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import { useCallback, useState } from 'react';
import { GoBackButton, SettingButton, SearchButton, NotificationButton, ThemeSwitchButton } from '../Button';
import Logo from './Logo';
import { SearchBar } from '../SearchBar';

interface HeaderProps {
  logo?: boolean;
  goBack?: boolean;
  title?: string;
  setting?: boolean;
  search?: boolean;
  notification?: boolean;
}

export default function Header({ logo, goBack, title, setting, search, notification }: HeaderProps) {
  const [toggleSearch, setToggleSearch] = useState(false);

  const onClickSearch = useCallback(() => {
    setToggleSearch(!toggleSearch);
  }, [toggleSearch]);

  return (
    <section className="w-full">
      <Navbar className=" dark:bg-dark-b lg:shadow-md">
        <NavbarBrand className="lg:absolute lg:left-[-100px] hidden lg:block">
          <Link href="/">
            <Logo width={106} height={18} />
          </Link>
        </NavbarBrand>

        {logo && (
          <NavbarBrand className="lg:hidden">
            <Link href="/">
              <Logo width={106} height={18} />
            </Link>
          </NavbarBrand>
        )}

        {goBack && (
          <NavbarContent justify="start" className="lg:invisible">
            <NavbarItem>
              <GoBackButton />
            </NavbarItem>
          </NavbarContent>
        )}

        {title && (
          <NavbarContent justify="center" className="lg:invisible">
            <NavbarItem className="font-medium">{title}</NavbarItem>
          </NavbarContent>
        )}

        {setting && (
          <NavbarContent justify="end" className="lg:absolute lg:right-[-100px]">
            <NavbarItem>
              <ThemeSwitchButton />
            </NavbarItem>
            <NavbarItem>
              <SettingButton />
            </NavbarItem>
          </NavbarContent>
        )}

        {search && (
          <NavbarContent justify="end" className="lg:absolute lg:right-[-100px]">
            <NavbarItem>
              <SearchButton onClick={onClickSearch} />
            </NavbarItem>
            <NavbarItem>
              <NotificationButton />
            </NavbarItem>
          </NavbarContent>
        )}

        {notification && (
          <NavbarContent justify="end" className="lg:absolute lg:right-[-100px]">
            <NavbarItem>
              <ThemeSwitchButton />
            </NavbarItem>
            <NavbarItem>
              <NotificationButton />
            </NavbarItem>
          </NavbarContent>
        )}
      </Navbar>

      <div className="mb-5">{toggleSearch && <SearchBar isElection={false} />}</div>
    </section>
  );
}
