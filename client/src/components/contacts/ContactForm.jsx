import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [image, setImage] = useState(null);

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
    setImage(
      selectedContact
        ? selectedContact.imagge
          ? selectedContact.image
          : ''
        : ''
    );
  }, []);

  // Change contact form 'Content-Type' to multipart/form-data
  const handleSubmit = (event) => {
    event.preventDefault();

    const form_data = new FormData();
    form_data.append('name', name);
    form_data.append('phone', phone);
    form_data.append('email', email);
    form_data.append('address', address);
    form_data.append('image', image);
    const newContact = form_data;
    console.log(newContact.get('image'));

    edit
      ? dispatch(updateContact(newContact, id))
      : dispatch(postContact(newContact));

    // toast.success('Contact Updated');
    SetName('');
    SetPhone('');
    SetEmail('');
    SetAddress('');
    setImage(null);
    navigate('/');
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  if (isLoading) return <Loader />;
  return (
    <div>
      <button className='btn-goback' onClick={() => navigate('/')}>
        {' '}
        Go Back
      </button>
      <form className='form' onSubmit={handleSubmit}>
        <legend className='form-heading'>
          {edit ? 'Edit Contact' : 'Add a New Contact'}
        </legend>
        <div className='form-item'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            name='name'
            className='form-input'
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
            className='form-input'
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
            className='form-input'
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
            className='form-input'
            onChange={(event) => SetAddress(event.target.value)}
          />
        </div>

        <div className='form-item'>
          <label htmlFor='image'>Image:</label>
          <input
            type='file'
            placeholder='Upload an image file'
            onChange={handleImageChange}
            name='image'
          />
        </div>

        <button className='btn-submit-form'>Submit</button>
      </form>
      <ToastContainer
        position='top-right'
        autoClose={200}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default ContactForm;
