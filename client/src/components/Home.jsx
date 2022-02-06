import { Navigate } from 'react-router-dom';
import Welcome from './Welcome';

function Home() {
  const authenticated = true;

  return authenticated ? <Navigate to='contacts' /> : <Welcome />;
}

export default Home;
