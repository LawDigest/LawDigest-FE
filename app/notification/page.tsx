import { Item, ItemList } from './components/Item';

const weekList = [
  {
    logo: '/mock/party/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-12T15:00:00',
  },
  {
    logo: '/mock/party/국민의힘_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-12T12:00:00',
  },
  {
    logo: '/mock/party/정의당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-11T12:00:00',
  },
  {
    logo: '/mock/party/기본소득당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-11T12:00:00',
  },
];

const monthList = [
  {
    logo: '/mock/party/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-08T12:00:00',
  },
  {
    logo: '/mock/party/국민의힘_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-05T12:00:00',
  },
  {
    logo: '/mock/party/정의당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-04T12:00:00',
  },
  {
    logo: '/mock/party/기본소득당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-02T12:00:00',
  },
];

export default function Notification() {
  return (
    <section className="flex flex-col gap-6 px-5 mb-10">
      <div className="flex flex-col gap-3 mb-8">
        <h1 className="text-2xl font-bold ">알림</h1>
        <p className="text-sm text-gray-2">
          <span className="text-black">{weekList.length + monthList.length}개</span>의 읽지 않은 알림이 있습니다.
        </p>
      </div>

      <ItemList title="이번 주">
        {weekList.map(({ logo, name, law, members_number, date }) => (
          <Item logo={logo} name={name} law={law} members_number={members_number} date={date} key={name} />
        ))}
      </ItemList>

      <hr className="bg-gray-1" />

      <ItemList title="이번 달">
        {monthList.map(({ logo, name, law, members_number, date }) => (
          <Item logo={logo} name={name} law={law} members_number={members_number} date={date} key={name} />
        ))}
      </ItemList>
    </section>
  );
}
