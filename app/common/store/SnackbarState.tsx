import { atom } from 'recoil';
import { SnackbarType } from '@/app/common/types';
import { SNACKBAR_TYPE } from '../constants/snackbar';

interface SnackbarStateProps {
  show: boolean;
  type: SnackbarType;
  message: string;
  duration?: number;
}

const snackbarState = atom<SnackbarStateProps>({
  key: 'snackbarState',
  default: {
    show: false,
    type: SNACKBAR_TYPE.DEFAULT,
    message: '',
    duration: 3000,
  },
});

export default snackbarState;
