import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../Form.css';
import { postContact, updateContact } from '../../actions/contactsActions';
import Loader from '../loader/Loader';

function ContactForm({ edit, selectedContact, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.contacts);

  const [name, SetName] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [address, SetAddress] = useState('');

  useEffect(() => {
    SetName(
      selectedContact ? (selectedContact.name ? selectedContact.name : '') : ''
    );
    SetPhone(
      selectedContact
        ? selectedContact.phone
          ? selectedContact.phone
          : ''
        : ''
    );
    SetEmail(
      selectedContact
        ? selectedContact.email
          ? selectedContact.email
          : ''
        : ''
    );
    SetAddress(
      selectedContact
        ? selectedContact.address
          ? selectedContact.address
          : ''
        : ''
    );
  }, []);

  // Change contact form 'Content-Type' to multipart/form-data
  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name,
      phone,
      email,
      address,
    };

    edit
      ? dispatch(updateContact(newContact, id))
      : dispatch(postContact(newContact));

    SetName('');
    SetPhone('');
    SetEmail('');
    SetAddress('');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <h3>{edit ? 'Edit Contact' : 'Add a New Contact'}</h3>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            name='name'
            onChange={(event) => SetName(event.target.value)}
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor='phone'>Phone: </label>
          <input
            type='number'
            placeholder='Enter Phone Number'
            value={phone}
            name='phone'
            onChange={(event) => SetPhone(event.target.value)}
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Enter E-mail'
            value={email}
            name='email'
            onChange={(event) => SetEmail(event.target.value)}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            placeholder='Enter Address'
            value={address}
            name='address'
            onChange={(event) => SetAddress(event.target.value)}
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
