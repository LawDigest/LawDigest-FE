export default function hideUrlBar() {
  if (typeof window !== 'undefined') {
    window.addEventListener(
      'load',
      // eslint-disable-next-line func-names
      function () {
        // eslint-disable-next-line no-restricted-globals
        setTimeout(scrollTo, 0, 0, 1);
      },
      false,
    );
  }
}
