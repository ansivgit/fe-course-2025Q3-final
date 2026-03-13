import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/button/button';
import { Layout } from '@/components/layout/layout';
import { Profile } from '@/components/profile/profile';
import { ROUTES } from '@/constants/constants';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="page-container">
        <Profile></Profile>
      </div>
      <Button onClick={() => navigate(`/${ROUTES.practice}`)}>To Practice</Button>
    </Layout>
  );
};
