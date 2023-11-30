import Link from 'next/link';

function Header() {
  return (
    <header className="w-full text-center text-2xl pt-[20px] font-bold">
      <Link href="/">
        모두의 입법
        <hr />
      </Link>
    </header>
  );
}

export default Header;
