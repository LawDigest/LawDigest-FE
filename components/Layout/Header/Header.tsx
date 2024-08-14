'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar, NavbarContent, NavbarItem, NavbarBrand } from '@nextui-org/navbar';
import { useCallback, useState } from 'react';
import { siteConfig } from '@/config/site';
import { IconNavBorder } from '@/public/svgs';
import {
  SearchBar,
  GoBackButton,
  SettingButton,
  SearchButton,
  NotificationButton,
  ThemeSwitchButton,
} from '@/components/common';
import Logo from './Logo';

export default function Header({
  logo,
  goBack,
  title,
  setting,
  search,
  notification,
  theme,
}: {
  logo?: boolean;
  goBack?: boolean;
  title?: string;
  setting?: boolean;
  search?: boolean;
  notification?: boolean;
  theme?: boolean;
}) {
  const pathname = usePathname();
  const { navItems } = siteConfig;
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
          <ul className="flex justify-between w-full px-10 gap-2 lg:gap-20">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === '/' ? pathname?.endsWith(href) : href !== '/' && pathname?.startsWith(href);

              return (
                <NavbarItem key={label} className="flex items-center justify-center ">
                  <div className={`${isActive ? 'z-10' : '-z-10'} absolute`}>
                    <IconNavBorder />
                  </div>
                  <Link
                    className={`${isActive ? 'text-white lg:text-black lg:dark:text-white lg:font-semibold lg:bg-transparent' : 'text-gray-2'} flex flex-col items-center justify-center text-xs lg:text-base lg:font-medium font-bold lg:px-5 lg:py-3 lg:bg-white dark:lg:bg-dark-pb lg:w-[110px] lg:h-[60px] leading-[60px]`}
                    href={href}>
                    {label}
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

      <div>{toggleSearch && <SearchBar />}</div>
    </section>
  );
}
