import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../actions/contactsActions';

function ContactRow({ contact }) {
  const { id, name } = contact;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </td>
      <td>
        <button onClick={() => goRouteId(id)}>Edit</button>
      </td>
    </tr>
  );
}

export default ContactRow;
