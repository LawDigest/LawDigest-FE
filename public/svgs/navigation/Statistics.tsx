import { NavIconProps } from '@/types';

export default function IconStatistics({ isActive }: NavIconProps) {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="3.15"
        y="3.65"
        width="23.7"
        height="23.7"
        fill={isActive ? '#FFFFFF' : 'none'}
        stroke={isActive ? '#191919' : '#999999'}
        strokeWidth="1.3"
      />
      <rect
        x="14.25"
        y="8.5"
        width="1.5"
        height="15.25"
        fill={isActive ? '#191919' : '#999999'}
        stroke={isActive ? '#191919' : '#999999'}
      />
      <rect
        x="8"
        y="17.25"
        width="1.5"
        height="6.5"
        fill={isActive ? '#191919' : '#999999'}
        stroke={isActive ? '#191919' : '#999999'}
      />
      <rect
        x="20.5"
        y="12.25"
        width="1.5"
        height="11.5"
        fill={isActive ? '#191919' : '#999999'}
        stroke={isActive ? '#191919' : '#999999'}
      />
    </svg>
  );
}
