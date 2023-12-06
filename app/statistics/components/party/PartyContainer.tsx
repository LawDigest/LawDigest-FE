import Party from './Party';

const list = [
  {
    name: '기본소득당',
    src: '/mock/기본소득당_로고.svg',
    members: 1,
  },
  {
    name: '정의당',
    src: '/mock/정의당_로고.svg',
    members: 6,
  },
  {
    name: '국민의힘',
    src: '/mock/국민의힘_로고.svg',
    members: 102,
  },
  {
    name: '더불어민주당',
    src: '/mock/더불어민주당_로고.svg',
    members: 166,
  },
];

export default function PartyContainer() {
  return (
    <div className="flex gap-4">
      {list.map(({ name, src, members }) => (
        <Party name={name} src={src} members={members} key={name} />
      ))}
    </div>
  );
}
