export interface DistrictListProps {
  city_name: string;
  gu_name: string;
  district_name: string;
}

export type DistrictListResponse = DistrictListProps[];

export interface DistrictIdResponse {
  district_id: number;
}
