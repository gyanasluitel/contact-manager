import { Link, useNavigate } from 'react-router-dom';

function ContactRow({ contact }) {
  const { id, name } = contact;
  const navigate = useNavigate();
  const goRouteId = (id) => {
    navigate(`${id}`);
  };

  return (
    <tr onClick={() => goRouteId(id)}>
      <td>{name}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
  );
}

export default ContactRow;
