import * as React from 'react';
import { IconSvgProps } from '@/types';

export function MoonFilledIcon({ size = 24, width, height, ...props }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}>
      <path
        d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SunFilledIcon({ size = 24, width, height, ...props }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}>
      <g fill="currentColor">
        <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
        <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
      </g>
    </svg>
  );
}

export function HeartFilledIcon({ size = 24, width, height, ...props }: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}>
      <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        fill="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function SearchIcon(props: IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}>
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
export function DetailIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.1499 6.02795L7.25329 2.99628C3.29238 0.956284 1.66669 2.62795 3.65059 6.70087L4.24989 7.93337C4.4221 8.29462 4.4221 8.71253 4.24989 9.07378L3.65059 10.2992C1.66669 14.3721 3.28549 16.0438 7.25329 14.0038L13.1499 10.9721C15.7951 9.61212 15.7951 7.38795 13.1499 6.02795ZM10.9249 9.03128H7.20507C6.92264 9.03128 6.68843 8.79045 6.68843 8.50003C6.68843 8.20962 6.92264 7.96878 7.20507 7.96878H10.9249C11.2073 7.96878 11.4415 8.20962 11.4415 8.50003C11.4415 8.79045 11.2073 9.03128 10.9249 9.03128Z"
        fill={color}
      />
    </svg>
  );
}

export function LikeIcon({ color }: { color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.9525 7.31261C22.2069 4.31619 18.377 7.3126 16.9996 8.68996C15.6223 7.3126 11.7923 4.31619 8.04682 7.31261C4.30131 10.309 3.48727 16.5266 8.7355 21.7748C13.9837 27.023 16.9996 27.9729 16.9996 27.9729C16.9996 27.9729 20.0155 27.023 25.2638 21.7748C30.512 16.5266 29.698 10.309 25.9525 7.31261Z"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
}

export function AlarmIcon({ color }: { color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.6604 23.415H12.3962V24.7924C12.3962 27.0745 14.2462 28.9245 16.5283 28.9245C18.8104 28.9245 20.6604 27.0745 20.6604 24.7924V23.415Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.88688 23.4151H26.1699C26.9306 23.4151 27.5473 22.7985 27.5473 22.0378V21.2309C27.5473 20.8656 27.4021 20.5153 27.1439 20.257L26.4402 19.5533C26.2671 19.3802 26.1699 19.1455 26.1699 18.9007V13.7736C26.1699 8.44872 21.8532 4.13207 16.5284 4.13208C11.2035 4.13209 6.88688 8.44874 6.88688 13.7736V18.9007C6.88688 19.1455 6.78963 19.3803 6.61653 19.5534L5.91294 20.257C5.65464 20.5153 5.50952 20.8656 5.50952 21.2309V22.0378C5.50952 22.7985 6.12619 23.4151 6.88688 23.4151Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareIcon({ color }: { color: string }) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="34" height="34" fill="white" />
      <path
        d="M14.1333 6H8.95758C7.32415 6 6 7.32415 6 8.95758V25.2242C6 26.8577 7.32415 28.1818 8.95758 28.1818H25.2242C26.8577 28.1818 28.1818 26.8577 28.1818 25.2242V19.3091"
        stroke={color}
        strokeWidth="1.91373"
        strokeLinecap="round"
      />
      <path
        d="M19.3091 6H28.1818V14.8727"
        stroke={color}
        strokeWidth="1.91373"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6548 21.5274L27.4427 6.7395" stroke={color} strokeWidth="1.91373" strokeLinecap="round" />
    </svg>
  );
}

export function MoreIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 8.5C11.1716 8.5 10.5 7.82843 10.5 7C10.5 6.17157 11.1716 5.5 12 5.5C12.8284 5.5 13.5 6.17157 13.5 7C13.5 7.82843 12.8284 8.5 12 8.5ZM12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5ZM10.5 17C10.5 17.8284 11.1716 18.5 12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17Z"
        fill={color}
      />
    </svg>
  );
}

export function DetailLinkIcon({ color }: { color: string }) {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" width="20" height="20" rx="8" fill={color} />
      <path
        d="M12.2287 5.25207L6.75804 7.15894C3.08065 8.44926 3.08065 10.5532 6.75804 11.8371L8.38167 12.4028L8.92086 14.1063C10.1446 17.9646 12.156 17.9646 13.3798 14.1063L15.2033 8.37298C16.0151 5.7987 14.6823 4.39397 12.2287 5.25207ZM12.4226 8.67173L10.1204 11.0998C10.0295 11.1952 9.91442 11.2397 9.79931 11.2397C9.6842 11.2397 9.56909 11.1952 9.47822 11.0998C9.30253 10.9155 9.30253 10.6104 9.47822 10.4261L11.7804 7.99797C11.9561 7.81363 12.2469 7.81363 12.4226 7.99797C12.5982 8.1823 12.5982 8.4874 12.4226 8.67173Z"
        fill="white"
      />
    </svg>
  );
}
