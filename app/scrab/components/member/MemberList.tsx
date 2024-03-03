'use client';

import { useState, useCallback } from 'react';
import MemberItem from './MemberItem';

const list = [
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/더불어민주당_로고_원.svg',
    number: 1,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/국민의힘_로고_원.svg',
    number: 2,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/정의당_로고_원.svg',
    number: 3,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/더불어민주당_로고_원.svg',
    number: 4,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/국민의힘_로고_원.svg',
    number: 5,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/정의당_로고_원.svg',
    number: 6,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/더불어민주당_로고_원.svg',
    number: 7,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/국민의힘_로고_원.svg',
    number: 8,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/정의당_로고_원.svg',
    number: 9,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/더불어민주당_로고_원.svg',
    number: 10,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/국민의힘_로고_원.svg',
    number: 11,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/정의당_로고_원.svg',
    number: 12,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/더불어민주당_로고_원.svg',
    number: 13,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/국민의힘_로고_원.svg',
    number: 14,
  },
  {
    name: '홍길동',
    profileImg: '/mock/사용자_프로필.svg',
    partyImg: '/mock/정의당_로고_원.svg',
    number: 15,
  },
];

export default function MemberList() {
  const [toggle, setToggle] = useState(false);

  const onClick = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-5 gap-2  border-b-2 pt-2 border-[#E2E8F0] pb-3">
        {!toggle
          ? list
              .map(({ name, profileImg, partyImg, number }) => (
                <MemberItem name={name} profileImg={profileImg} partyImg={partyImg} key={number} />
              ))
              .slice(0, 10)
          : list.map(({ name, profileImg, partyImg, number }) => (
              <MemberItem name={name} profileImg={profileImg} partyImg={partyImg} key={number} />
            ))}
      </div>
      <button type="button" className=" text-[#7E8A99] font-medium mt-2 mx-auto w-15" onClick={onClick}>
        {toggle ? '접기' : '더 보기'}
      </button>
    </div>
  );
}
