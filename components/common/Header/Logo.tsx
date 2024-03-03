import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
}

export default function Logo({ width, height }: LogoProps) {
  return <Image src="/images/logo.svg" width={width} height={height} alt="로고이미지" />;
}
