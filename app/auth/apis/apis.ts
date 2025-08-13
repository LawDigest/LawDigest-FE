import { apiClient } from '@/app/common/lib';

export const postWithdraw = () => apiClient.delete(`/auth/user/withdraw`);
