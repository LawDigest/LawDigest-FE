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
  billNavs: [
    { title: '전체 보기', href: '#' },
    { title: '발의된 의안 보기', href: '#' },
    { title: '가결된 의안 보기', href: '#' },
    { title: '공포된 의안 보기', href: '#' },
  ],
  links: {
    github: 'https://github.com/LawDigest',
  },
};
