import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Welcome from './Welcome';

function Home() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return isAuthenticated ? <Navigate to='contacts' /> : <Welcome />;
}

export default Home;
