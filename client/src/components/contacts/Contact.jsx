import { useParams } from 'react-router-dom';

function Contact() {
  let params = useParams();
  return (
    <div>
      <h1>Id: {params.contact_id}</h1>
    </div>
  );
}

export default Contact;
