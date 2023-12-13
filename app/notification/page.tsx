import ItemList from './components/ItemList';
import Item from './components/Item';

const weekList = [
  {
    logo: '/mock/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-12T15:00:00',
  },
  {
    logo: '/mock/국민의힘_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-12T12:00:00',
  },
  {
    logo: '/mock/정의당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-11T12:00:00',
  },
  {
    logo: '/mock/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-11T12:00:00',
  },
];

const monthList = [
  {
    logo: '/mock/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-08T12:00:00',
  },
  {
    logo: '/mock/국민의힘_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-05T12:00:00',
  },
  {
    logo: '/mock/정의당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-04T12:00:00',
  },
  {
    logo: '/mock/더불어민주당_로고_원.svg',
    name: '홍길동',
    law: '도로교통법 개정안',
    members_number: 15,
    date: '2023-12-02T12:00:00',
  },
];

export default function Notification() {
  return (
    <div>
      <h1 className="m-5 text-3xl font-bold ">Notification</h1>

      <ItemList title="이번 주">
        {weekList.map(({ logo, name, law, members_number, date }) => (
          <Item logo={logo} name={name} law={law} members_number={members_number} date={date} key={name} />
        ))}
      </ItemList>

      <hr className="bg-[##A1A1AA]" />

      <ItemList title="이번 달">
        {monthList.map(({ logo, name, law, members_number, date }) => (
          <Item logo={logo} name={name} law={law} members_number={members_number} date={date} key={name} />
        ))}
      </ItemList>
    </div>
  );
}
