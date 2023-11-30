export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '모두의 입법',
  description: '자연어 처리 기술을 이용한 법률 개정안 요약 플랫폼',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Statistics',
      href: '/statistics',
    },
    {
      label: 'Search',
      href: '/search',
    },
    {
      label: 'Notification',
      href: '/notification',
    },
    {
      label: 'MyPage',
      href: '/mypage',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/LawDigest',
  },
};
