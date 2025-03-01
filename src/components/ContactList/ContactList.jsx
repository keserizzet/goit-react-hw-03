import React from 'react';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
    if (!contacts || contacts.length === 0) {
      return <p>No contacts available</p>;
    }
  
    return (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;
  