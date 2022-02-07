import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/layout/AppNavbar';
import Home from './components/Home';
import SignIn from './components/user-access/SignIn';
import SignUp from './components/user-access/SignUp';
import ContactList from './components/contacts/ContactList';
import Contact from './components/contacts/Contact';
import AddContact from './components/contacts/AddContact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppNavbar />}>
          <Route index element={<Home />} />
          <Route path='contacts'>
            <Route index element={<ContactList />} />
            <Route path=':contact_id' element={<Contact />} />
          </Route>
          <Route path='addcontact' element={<AddContact />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
