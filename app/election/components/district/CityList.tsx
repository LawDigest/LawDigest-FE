import { useRouter } from 'next/navigation';
import { CITY_NAME_SHORT, CITY_NAME_LONG } from '@/constants';
import { setCookie } from 'cookies-next';
import DistrictItem from './DistrictItem';

export default function CityList() {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cityName = e.currentTarget.value;
    const cityNameLong = Object.entries(CITY_NAME_SHORT)
      .filter((city) => city[1] === cityName)
      .flat()[0];

    setCookie('cityName', CITY_NAME_LONG[cityNameLong]);
    router.push(`/election/district?set=gu`);
  };

  return (
    <div className="grid grid-cols-3">
      {Object.values(CITY_NAME_SHORT).map((name) => (
        <DistrictItem key={name} name={name} onClick={onClick} />
      ))}
    </div>
  );
}
