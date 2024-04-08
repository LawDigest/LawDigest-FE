import { useQueryClient } from '@tanstack/react-query';
import { useGetDistrictList } from '../apis/queries';

export default async function LocationSelect() {
  const queryClient = useQueryClient();
  const { data: districtList } = await useGetDistrictList({ queryClient });

  return (
    <div>
      <div>
        {districtList.map(({ city_name, gu_name, district_name }) => (
          <div key={city_name || gu_name || district_name}>{city_name || gu_name || district_name}</div>
        ))}
      </div>
    </div>
  );
}
