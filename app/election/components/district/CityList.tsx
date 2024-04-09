import { useRouter } from 'next/navigation';
import { CITY_NAME_SHORT, CITY_KO } from '@/constants';
import { setCookie } from 'cookies-next';
import DistrictItem from './DistrictItem';

export default function CityList() {
  const router = useRouter();

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cityNameShort = e.currentTarget.value;
    const cityNameLong = CITY_KO.filter((city) => city.short === cityNameShort)[0].long;

    setCookie('cityName', cityNameLong);
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
