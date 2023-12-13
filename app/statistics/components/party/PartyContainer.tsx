'use client';

import Slider from 'react-slick';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import Party from './Party';

const list = [
  {
    name: '기본소득당',
    src: '/mock/기본소득당_로고.svg',
    memberLength: 1,
  },
  {
    name: '정의당',
    src: '/mock/정의당_로고.svg',
    memberLength: 6,
  },
  {
    name: '국민의힘',
    src: '/mock/국민의힘_로고.svg',
    memberLength: 102,
  },
  {
    name: '더불어민주당',
    src: '/mock/더불어민주당_로고.svg',
    memberLength: 166,
  },
];

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  variableWidth: true,
};

export default function PartyContainer() {
  return (
    <div className="relative">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="absolute -left-3 top-24">
        <MdArrowBackIos />
      </button>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="absolute -right-4 top-24">
        <MdArrowForwardIos />
      </button>
      <Slider {...settings} className="flex">
        {list.map(({ name, src, memberLength }) => (
          <Party name={name} src={src} memberLength={memberLength} key={name} />
        ))}
      </Slider>
    </div>
  );
}
