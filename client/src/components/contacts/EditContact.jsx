import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContactForm from './ContactForm';
import Loader from '../loader/Loader';

function EditContact() {
  let params = useParams();
  const id = params.contact_id;

  const { contacts } = useSelector((state) => state.contacts);
  const { isLoading } = useSelector((state) => state.contacts);

  const selectedContact = contacts.filter((contact) => contact._id === id)[0];

  if (isLoading) return <Loader />;

  return (
    <div>
      <ContactForm edit={true} selectedContact={selectedContact} id={id} />
    </div>
  );
}

export default EditContact;
