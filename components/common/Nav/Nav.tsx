import { Navbar as NextUINavbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import { link as linkStyles } from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import { headers } from 'next/headers';
import { NAV_ICONS } from './NavIcons';

function Nav() {
  const pathname = headers().get('referer')!;

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="p-0">
      <NavbarContent className="basis-1/5 p-0">
        <ul className="w-full flex gap-4 justify-between">
          {NAV_ICONS.map(({ path, icon }) => {
            const color = pathname?.endsWith(path) ? '#11181C' : '#A1A1AA';
            return (
              <NavbarItem key={path}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: 'foreground' }),
                    'data-[active=true]:text-primary data-[active=true]:font-medium',
                  )}
                  color="foreground"
                  href={path}>
                  {icon(color)}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>
    </NextUINavbar>
  );
}

export default Nav;
