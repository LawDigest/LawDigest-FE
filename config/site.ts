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
    { label: '전체 보기', href: '#' },
    { label: '발의된 의안 보기', href: '#' },
    { label: '가결된 의안 보기', href: '#' },
    { label: '공포된 의안 보기', href: '#' },
  ],
  billTabs: [
    { label: '대표발의한 법안', value: 'representProposer' },
    { label: '공동발의한 법안', value: 'publicProposer' },
  ],
  links: {
    github: 'https://github.com/LawDigest',
  },
};
