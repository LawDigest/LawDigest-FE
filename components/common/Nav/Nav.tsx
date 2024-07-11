'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IconHome, IconElection, IconUserAvatar } from '@/public/svgs';
// import { Navbar, NavbarItem, NavbarContent } from '@nextui-org/navbar';

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

  return (
    <section className="w-full h-16 bg-primary-3 lg:hidden">
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

  // return (
  //   <Navbar className="h-16 bg-primary-3 lg:hidden">
  //     <NavbarContent>
  //       <ul className="flex justify-between w-full gap-2 px-10 ">
  //         {Nav_Items.map(({ label, path, IconComponent }) => {
  //           const isActive = pathname === '/' ? pathname?.endsWith(path) : path !== '/' && pathname?.startsWith(path);

  //           return (
  //             <NavbarItem key={label}>
  //               <Link
  //                 className={`${isActive ? 'text-white' : 'text-gray-2'} flex flex-col items-center text-xs font-bold`}
  //                 href={path}>
  //                 <IconComponent isActive={isActive} />
  //                 <p>{label}</p>
  //               </Link>
  //             </NavbarItem>
  //           );
  //         })}
  //       </ul>
  //     </NavbarContent>
  //   </Navbar>
  // );
}

export default Nav;
