import { useEffect } from 'react';
import { BsPencilFill } from 'react-icons/bs';
// import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

import { getContacts } from '../../actions/contactsActions';
import ContactRow from './ContactRow';
import './ContactList.css';
import Loader from '../loader/Loader';

function ContactList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const { contacts } = useSelector((state) => state.contacts);
  const { isLoading } = useSelector((state) => state.contacts);
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleClick = () => {
    navigate('/addcontact');
  };

  if (!isAuthenticated) return <Navigate to='/signin' />;

  if (isLoading) return <Loader />;

  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>
        Contacts <BsPencilFill />
      </h1>

      <button className='btn-add-contact' onClick={() => handleClick()}>
        Add Contact
      </button>

      <table className='contact-list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className='table-data'>
          {contacts.length > 0 &&
            contacts.map((contact) => (
              <ContactRow key={contact._id} contact={contact} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
