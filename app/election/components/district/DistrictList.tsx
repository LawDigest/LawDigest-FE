import { useRouter } from 'next/navigation';
import { setCookie, getCookie } from 'cookies-next';
import { CITY_NAME, GU_NAME } from '@/constants';
import { getDistrictList } from '../../apis';
import DistrictItem from './DistrictItem';

export default async function DistrictList() {
  const router = useRouter();
  const cityName = getCookie(CITY_NAME);
  const guName = getCookie(GU_NAME);
  const { data: districtList } = await getDistrictList({ cityName, guName });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const districtName = e.currentTarget.value;
    setCookie('districtName', districtName);
    router.push(`/election/district`);
  };

  return (
    <div className="grid grid-cols-3">
      {districtList.map(({ district_name }, index) => {
        const key = district_name + index.toString();

        return <DistrictItem key={key} name={district_name} onClick={onClick} />;
      })}
    </div>
  );
}
