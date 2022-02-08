// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import ContactForm from './ContactForm';
// import { getContacts } from '../../actions/contactsActions';
import Loader from '../loader/Loader';

function EditContact() {
  let params = useParams();
  const id = params.contact_id;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  const { contacts } = useSelector((state) => state.contacts);
  const { isLoading } = useSelector((state) => state.contacts);

  const selectedContact = contacts.filter((contact) => contact._id === id)[0];

  const noContact = (
    <div>
      <p>No such contact</p>
      <p>You will be redirected to the Home Page</p>
    </div>
  );

  if (isLoading) return <Loader />;

  return (
    <div>
      {selectedContact ? (
        <ContactForm edit={true} selectedContact={selectedContact} id={id} />
      ) : (
        (noContact, (<Navigate to='/' />))
      )}
    </div>
  );
}

export default EditContact;
