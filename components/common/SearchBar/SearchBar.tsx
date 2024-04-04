import { Input } from '@nextui-org/input';
import { IconSearchbar } from '@/public/svgs';

export default function SearchBar() {
  return (
    <div className="w-full px-5 rounded-2xl flex justify-center items-center gap-[10px]">
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
        placeholder="궁금한 입법현황을 검색해 보세요."
        startContent={<IconSearchbar />}
      />
    </div>
  );
}
