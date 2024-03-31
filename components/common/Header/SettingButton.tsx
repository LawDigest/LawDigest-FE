import Link from 'next/link';
import { IconSetting } from '@/public/svgs';

export default function SettingButton() {
  return (
    <Link href="/setting">
      <IconSetting />
    </Link>
  );
}
