import Layout from '@/components/common/Layout';
import { Input } from '@nextui-org/input';

export default function Login() {
  return (
    <Layout>
      <Input type="email" variant="underlined" label="Email" placeholder="Enter your email" />
    </Layout>
  );
}
