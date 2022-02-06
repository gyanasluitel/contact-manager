import { useState } from 'react';
import { v1 as uuid } from 'uuid';
import { BsPencilFill } from 'react-icons/bs';
import { Outlet } from 'react-router-dom';

import ContactRow from './ContactRow';
import './ContactList.css';

function ContactList() {
  const [contacts, setContacts] = useState([
    { id: uuid(), name: 'Gyanas' },
    { id: uuid(), name: 'Utsav' },
    { id: uuid(), name: 'Babin' },
    { id: uuid(), name: 'Nischal' },
  ]);

  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>
        Contacts <BsPencilFill />
      </h1>

      <table className='contact-list'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className='table-data'>
          {contacts.length > 0 &&
            contacts.map((contact) => (
              <ContactRow key={contact.id} contact={contact} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
