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
  stageTabs: [
    { label: '접수', value: 'reception' },
    { label: '위원회 심사', value: 'committeeJudge' },
    { label: '본회의 심의', value: 'review' },
    { label: '공포', value: 'promulgation' },
  ],
  billTabs: [
    { label: '대표발의한 법안', value: 'representProposer' },
    { label: '공동발의한 법안', value: 'publicProposer' },
  ],
  searchTabs: [
    { label: '법안', value: 'bill' },
    { label: '의원/정당', value: 'congressmanParty' },
  ],
  links: {
    github: 'https://github.com/LawDigest',
  },
};
