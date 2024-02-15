import Link from 'next/link';
import { IconSearch } from '@/public/svgs';

export default function SearchButton() {
  return (
    <Link href="/search">
      <IconSearch />
    </Link>
  );
}
