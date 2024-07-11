'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconHome, IconElection, IconUserAvatar } from '@/public/svgs';

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

function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('wheel', (event) => handleScroll(event), true);

    return () => {
      window.removeEventListener('wheel', (event) => handleScroll(event), true);
    };
  }, []);

  return (
    <section
      className={` w-full h-16 bg-primary-3 lg:hidden transition-transform duration-300 ${isScrolled ? 'transform translate-y-full fixed bottom-0 left-0' : ''}`}>
      <div>
        <ul className="flex justify-between w-full gap-2 px-10 py-2">
          {Nav_Items.map(({ label, path, IconComponent }) => {
            const isActive = pathname === '/' ? pathname?.endsWith(path) : path !== '/' && pathname?.startsWith(path);

            return (
              <li key={label}>
                <Link
                  className={`${isActive ? 'text-white' : 'text-gray-2'} flex flex-col items-center text-xs font-bold`}
                  href={path}>
                  <IconComponent isActive={isActive} />
                  <p>{label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Nav;
