import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Link from 'next/link';
import SearchIcon from './SearchIcon';

export default function SearchBar() {
  return (
    <div className="w-full px-[10px] rounded-2xl flex justify-center items-center gap-[10px]">
      <Link href="/">
        <Image src="/images/logo.png" width={57} height={48} alt="logo" />
      </Link>
      <Input
        radius="lg"
        classNames={{
          input: ['bg-transparent', 'text-black/90 dark:text-white/90'],
          inputWrapper: [
            'h-[40px]',
            'w-full',
            'shadow-sm',
            'dark:hover:bg-default/70',
            'group-data-[focused=true]:bg-default-200/50',
            'dark:group-data-[focused=true]:bg-default/60',
            '!cursor-text',
            'pt-2.5',
          ],
        }}
        placeholder="정당, 의원명, 키워드로 검색"
        startContent={<SearchIcon />}
      />
    </div>
  );
}
