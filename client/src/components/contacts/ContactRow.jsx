import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../actions/contactsActions';
import './ContactList.css';
import { useState } from 'react';

function ContactRow({ contact }) {
  const { _id, name, phone, address, email } = contact;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  const handleFavorite = (id) => {};

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email ? email : '-'}</td>
      <td>{address ? address : '-'}</td>
      <td>
        <button className='btn-contact' onClick={handleFavorite(_id)}>
          Favorite
        </button>
      </td>
      <td>
        <button className='btn-contact' onClick={() => goRouteId(_id)}>
          Edit
        </button>
      </td>
      <td>
        <button
          className='btn-contact btn-delete'
          onClick={() => dispatch(deleteContact(_id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ContactRow;
