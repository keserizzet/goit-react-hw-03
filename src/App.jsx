import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "John Doe", number: "123-456-7890" },
    { id: "id-2", name: "Jane Smith", number: "987-654-3210" },
  ]);
  
  const [filter, setFilter] = useState("");

  // Kişi ekleme fonksiyonu
  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  // Arama fonksiyonu
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search contacts"
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
