'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import { useCallback, useState } from 'react';
import { IconHome, IconElection, IconUserAvatar, IconNavBorder } from '@/public/svgs';
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
  theme?: boolean;
}

const Nav_Items = [
  {
    label: '타임라인',
    path: '/',
    IconComponent: IconHome,
  },
  {
    label: '선거',
    path: '/election',
    IconComponent: IconElection,
  },
  {
    label: '마이페이지',
    path: '/mypage',
    IconComponent: IconUserAvatar,
  },
];

export default function Header({ logo, goBack, title, setting, search, notification, theme }: HeaderProps) {
  const pathname = usePathname();
  const [toggleSearch, setToggleSearch] = useState(false);

  const onClickSearch = useCallback(() => {
    setToggleSearch(!toggleSearch);
  }, [toggleSearch]);

  return (
    <section className="w-full">
      <Navbar position="static" className=" dark:bg-dark-b dark:lg:bg-dark-pb lg:shadow-md lg:h-[98px] ">
        <NavbarBrand className="lg:absolute lg:left-[-100px] hidden lg:block">
          <Link href="/">
            <Logo width={106} height={18} />
          </Link>
        </NavbarBrand>

        <NavbarContent justify="center" className="hidden mx-auto lg:flex">
          <ul className="flex justify-between w-full gap-2 px-10 lg:gap-20">
            {Nav_Items.map(({ label, path, IconComponent }) => {
              const isActive = pathname === '/' ? pathname?.endsWith(path) : path !== '/' && pathname?.startsWith(path);

              return (
                <NavbarItem key={label} className="flex items-center justify-center ">
                  <div className={`${isActive ? 'z-10' : '-z-10'} absolute`}>
                    <IconNavBorder />
                  </div>
                  <Link
                    className={`${isActive ? 'text-white lg:text-black lg:dark:text-white lg:font-semibold lg:bg-transparent' : 'text-gray-2'} flex flex-col items-center text-xs lg:text-base lg:font-medium font-bold lg:px-5 lg:py-3 lg:bg-white dark:lg:bg-dark-pb lg:w-[100px] lg:h-[50px]`}
                    href={path}>
                    <IconComponent isActive={isActive} className="lg:hidden" />
                    <p>{label}</p>
                  </Link>
                </NavbarItem>
              );
            })}
          </ul>
        </NavbarContent>

        {logo && (
          <NavbarBrand className="lg:hidden">
            <Link href="/">
              <Logo width={106} height={18} />
            </Link>
          </NavbarBrand>
        )}

        {goBack && (
          <NavbarContent justify="start" className="lg:hidden">
            <NavbarItem>
              <GoBackButton />
            </NavbarItem>
          </NavbarContent>
        )}

        {title && (
          <NavbarContent justify="center" className="lg:hidden">
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

        {theme && (
          <NavbarContent justify="end" className="lg:absolute lg:right-[-100px]">
            <NavbarItem>
              <ThemeSwitchButton />
            </NavbarItem>
          </NavbarContent>
        )}
      </Navbar>

      <div className="lg:mb-5">{toggleSearch && <SearchBar isElection={false} />}</div>
    </section>
  );
}
