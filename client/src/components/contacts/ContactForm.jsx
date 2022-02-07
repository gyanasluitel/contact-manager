import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import '../Form.css';
import { postContact } from '../../actions/contactsActions';

function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, SetName] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [address, SetAddress] = useState('');

  // Change contact form 'Content-Type' to multipart/form-data
  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      name,
      phone,
      email,
      address,
    };

    dispatch(postContact(newContact));
    SetName('');
    SetPhone('');
    SetEmail('');
    SetAddress('');
    console.log('Contact Form Submitted');
    navigate('/');
  };

  return (
    <div>
      <h1>Contact Form</h1>

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

      <hr />
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default ContactForm;
