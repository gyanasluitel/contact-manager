import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, updateFavorite } from '../../actions/contactsActions';
import './ContactList.css';
import { useState } from 'react';

function ContactRow({ contact }) {
  const { _id, name, phone, address, email, isFavorite } = contact;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  const [favorite, SetFavorite] = useState(isFavorite);

  const handleFavoriteTrue = (id) => {
    SetFavorite(!favorite);
    const contact = {
      name,
      phone,
      email,
      address,
      isFavorite: false,
    };
    dispatch(updateFavorite(contact, id));
  };

  const handleFavoriteFalse = (id) => {
    SetFavorite(!favorite);
    const contact = {
      name,
      phone,
      email,
      address,
      isFavorite: true,
    };
    dispatch(updateFavorite(contact, id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email ? email : '-'}</td>
      <td>{address ? address : '-'}</td>
      <td>
        {favorite ? (
          <button
            className='btn-contact'
            onClick={() => handleFavoriteTrue(_id)}
          >
            UnFavorite
          </button>
        ) : (
          <button
            className='btn-contact'
            onClick={() => handleFavoriteFalse(_id)}
          >
            Favorite
          </button>
        )}
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
