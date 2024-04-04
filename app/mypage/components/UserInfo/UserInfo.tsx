import { useQueryClient } from '@tanstack/react-query';
import { useGetUserInfo } from '../../apis';

export default async function UserInfo() {
  const queryClient = useQueryClient();

  const { data } = await useGetUserInfo(queryClient);

  return <div>h</div>;
}
