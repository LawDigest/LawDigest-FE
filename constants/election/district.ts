export const CITY_NAME = 'cityName';
export const GU_NAME = 'guName';
export const DISTRICT_NAME = 'districtName';

export const ELECTION_TAB = {
  district: 'district',
  propotional: 'propotional',
} as const;

export const ELECTION_TAB_KO = {
  district: '지역구',
  propotional: '비례대표',
} as const;

export const CITY_NAME_LONG = {
  seoul: '서울특별시',
  gyeonggi: '경기도',
  incheon: '인천광역시',
  busan: '부산광역시',
  daegu: '대구광역시',
  gwangju: '광주광역시',
  daejeon: '대전광역시',
  ulsan: '울산광역시',
  sejong: '세종특별자치시',
  gangwon: '강원특별자치도',
  chungbuk: '충청북도',
  chungnam: '충청남도',
  jeonbuk: '전북특별자치도',
  jeonnam: '전라남도',
  gyeongbuk: '경상북도',
  gyeongnam: '경상남도',
  jeju: '제주특별자치도',
} as const;

export const CITY_NAME_SHORT = {
  seoul: '서울',
  gyeonggi: '경기',
  incheon: '인천',
  busan: '부산',
  daegu: '대구',
  gwangju: '광주',
  daejeon: '대전',
  ulsan: '울산',
  sejong: '세종',
  gangwon: '강원',
  chungbuk: '충북',
  chungnam: '충남',
  jeonbuk: '전북',
  jeonnam: '전남',
  gyeongbuk: '경북',
  gyeongnam: '경남',
  jeju: '제주',
} as const;

export const CITY_KO = [
  { short: '서울', long: '서울특별시' },
  { short: '경기', long: '경기도' },
  { short: '인천', long: '인천광역시' },
  { short: '부산', long: '부산광역시' },
  { short: '대구', long: '대구광역시' },
  { short: '광주', long: '광주광역시' },
  { short: '대전', long: '대전광역시' },
  { short: '울산', long: '울산광역시' },
  { short: '세종', long: '세종특별자치시' },
  { short: '강원', long: '강원특별자치도' },
  { short: '충북', long: '충청북도' },
  { short: '충남', long: '충청남도' },
  { short: '전북', long: '전북특별자치도' },
  { short: '전남', long: '전라남도' },
  { short: '경북', long: '경상북도' },
  { short: '경남', long: '경상남도' },
  { short: '제주', long: '제주특별자치도' },
  { short: '서울', long: '서울광역시' },
] as const;
