import { Layout } from '@/components/layout/layout';
import { Profile } from '@/components/profile/profile';

export const Dashboard = () => {
  return (
    <Layout>
      <div className="page-container">
        <Profile></Profile>
      </div>
    </Layout>
  );
};
