import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { setCookie, getCookie } from 'cookies-next';
import { CITY_NAME } from '@/constants';
import { useGetDistrictList } from '../../apis';
import DistrictItem from './DistrictItem';

export default async function GuList() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const cityName = getCookie(CITY_NAME);
  const { data: guList } = await useGetDistrictList({ queryClient, cityName });

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
