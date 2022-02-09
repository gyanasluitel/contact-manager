import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppNavbar from './components/layout/AppNavbar';
import Home from './components/Home';
import SignIn from './components/user-access/SignIn';
import SignUp from './components/user-access/SignUp';
import ContactList from './components/contacts/ContactList';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import store from './store';
import { getContacts } from './actions/contactsActions';
import { loadUser } from './actions/userActions';
import ErrorPage from './ErrorPage';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getContacts());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<AppNavbar />}>
            <Route index element={<Home />} />
            <Route path='contacts'>
              <Route index element={<ContactList />} />
              <Route path=':contact_id' element={<EditContact />} />
            </Route>
            <Route path='addcontact' element={<AddContact />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
