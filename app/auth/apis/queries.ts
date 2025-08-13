import { postWithdraw } from '@/app/auth/apis';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

/**
 * 회원 탈퇴
 * @returns 회원 탈퇴 성공 여부
 */
export const useWithdraw = (options?: UseMutationOptions<AxiosResponse<any, any>, Error, void, unknown>) => {
  return useMutation({
    mutationFn: postWithdraw,
    ...options,
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      options?.onError?.(error, variables, context);
    },
  });
};
