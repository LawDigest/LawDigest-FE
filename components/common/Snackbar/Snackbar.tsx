'use client';

import { Fragment, useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Transition } from '@headlessui/react';
import { Button } from '@nextui-org/react';
import { snackbarState } from '@/store';
import { IconCancel } from '@/public/svgs';

export default function Snackbar() {
  const snackbar = useRecoilValue(snackbarState);
  const resetSnackbar = useResetRecoilState(snackbarState);

  useEffect(() => {
    if (snackbar.show) {
      const timer = setTimeout(
        () => {
          clearTimeout(timer);
          resetSnackbar();
        },
        snackbar?.duration !== null ? snackbar?.duration : 3000,
      );
    } else {
      resetSnackbar();
    }
  }, [snackbar, resetSnackbar]);

  return (
    <section
      aria-live="assertive"
      className="fixed inset-0 flex items-end justify-center w-full px-4 py-20 pointer-events-none">
      <Transition
        show={snackbar.show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div
          className={`
              pointer-events-auto w-full max-w-xl overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${snackbar.type}
            `}>
          <div className="flex items-center px-4 py-3">
            <p className="flex-1 w-0 text-sm font-medium text-white sm:text-base">{snackbar.message}</p>
            <Button
              isIconOnly
              size="sm"
              className="flex flex-shrink-0 bg-transparent focus:outline-none"
              onClick={resetSnackbar}>
              <IconCancel />
            </Button>
          </div>
        </div>
      </Transition>
    </section>
  );
}
