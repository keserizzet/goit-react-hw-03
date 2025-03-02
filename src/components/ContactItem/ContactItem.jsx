import styles from "./ContactItem.module.css";

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default ContactItem;
