'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

function Nav() {
  const { navItems } = siteConfig;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY < 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentTouch = event.touches[0].clientY;

      if (currentTouch > lastScrollTop) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }

      setLastScrollTop(currentTouch <= 0 ? 0 : currentTouch);
    };

    window.addEventListener('wheel', (event) => handleScroll(event), true);
    window.addEventListener('touchmove', (event) => handleTouchMove(event), true);

    return () => {
      window.removeEventListener('wheel', (event) => handleScroll(event), true);
      window.addEventListener('touchmove', (event) => handleTouchMove(event), true);
    };
  }, [lastScrollTop]);

  return (
    <section
      className={`fixed bottom-0 left-0 w-full h-16 bg-primary-3 md:hidden transition-transform duration-300 z-10 ${isScrolled ? 'transform translate-y-full' : ''}`}>
      <div className="mx-auto w-fit">
        <ul className="flex justify-between gap-12 px-10 py-2">
          {navItems.map(({ label, href, IconComponent }) => {
            const isActive = pathname === '/' ? pathname?.endsWith(href) : href !== '/' && pathname?.startsWith(href);

            return (
              <li key={label}>
                <Link
                  className={`${isActive ? 'text-white' : 'text-gray-2'} flex flex-col items-center text-xs font-bold w-[52px]`}
                  href={href}>
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
