import { NavIconProps } from '@/types';

export default function IconElection({ isActive }: NavIconProps) {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="15"
        cy="15.5"
        r="11.85"
        fill={isActive ? '#FFFFFF' : 'none'}
        stroke={isActive ? 'none' : '#999999'}
        strokeWidth="1.3"
      />
      <path d="M15 3.625V27.375" stroke={isActive ? '#191919' : '#999999'} strokeWidth="1.5" />
      <path d="M15 15.5L23.125 23.625" stroke={isActive ? '#191919' : '#999999'} strokeWidth="1.5" />
    </svg>
  );
}
