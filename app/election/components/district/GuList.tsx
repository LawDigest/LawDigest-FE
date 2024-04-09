import { useRouter } from 'next/navigation';
import { setCookie, getCookie } from 'cookies-next';
import { CITY_NAME } from '@/constants';
import { getDistrictList } from '../../apis';
import DistrictItem from './DistrictItem';

export default async function GuList() {
  const router = useRouter();
  const cityName = getCookie(CITY_NAME);
  const { data: guList } = await getDistrictList({ cityName });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const guName = e.currentTarget.value;
    setCookie('guName', guName);
    router.push(`/election/district?set=district`);
  };

  return (
    <div className="grid grid-cols-3">
      {guList.map(({ gu_name }) => (
        <DistrictItem key={gu_name} name={gu_name} onClick={onClick} />
      ))}
    </div>
  );
}
