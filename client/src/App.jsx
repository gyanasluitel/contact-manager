import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';

function App() {
  return (
    <Router>
      <AppNavbar />
    </Router>
  );
}

export default App;
