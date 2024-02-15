'use client';

import { usePathname } from 'next/navigation';
import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { IconHome, IconElection, IconStatistics, IconUserAvatar } from '@/public/svgs';

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
    label: '통계',
    path: '/statistics',
    IconComponent: IconStatistics,
  },
  {
    label: '마이페이지',
    path: '/mypage',
    IconComponent: IconUserAvatar,
  },
];

function Nav() {
  const pathname = usePathname();

  return (
    <Navbar position="sticky" className="h-16 bg-primary-3">
      <NavbarContent>
        <ul className="flex justify-between w-full px-10 gap-2 ">
          {Nav_Items.map(({ label, path, IconComponent }) => {
            const isActive = pathname?.endsWith(path);

            return (
              <NavbarItem key={label}>
                <Link
                  className={`${isActive ? 'text-white' : 'text-gray-2'} flex flex-col items-center text-xs font-bold`}
                  href={path}>
                  <IconComponent isActive={isActive} />
                  <p>{label}</p>
                </Link>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
