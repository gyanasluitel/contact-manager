import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';
import Home from './components/Home';
import SignIn from './components/user-access/SignIn';
import SignUp from './components/user-access/SignUp';
import ContactList from './components/contacts/ContactList';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contacts' element={<ContactList />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
