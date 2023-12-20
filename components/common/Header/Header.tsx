import Link from 'next/link';
import { Do_Hyeon } from 'next/font/google';

const DO_HYUN = Do_Hyeon({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Header({ hasDivider = true }: { hasDivider?: boolean }) {
  return (
    <header className="w-full text-center text-2xl pt-[20px] font-bold">
      <Link href="/" className={DO_HYUN.className}>
        모두의입법
        {hasDivider && <hr />}
      </Link>
    </header>
  );
}
