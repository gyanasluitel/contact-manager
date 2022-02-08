import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../actions/contactsActions';
import './ContactList.css';

function ContactRow({ contact }) {
  const { _id, name, phone, address, email } = contact;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{address ? address : '-'}</td>
      <td>{email ? email : '-'}</td>
      <td>
        <button
          className='btn-contact btn-delete'
          onClick={() => dispatch(deleteContact(_id))}
        >
          Delete
        </button>
      </td>
      <td>
        <button className='btn-contact' onClick={() => goRouteId(_id)}>
          Edit
        </button>
      </td>
    </tr>
  );
}

export default ContactRow;
