import IContact from '../../interfaces/Contact.interface';

import ContactListItem from '../ContactListItem/ContactListItem';

interface IContacts {
  contacts: IContact[];
  deleteContact(id: string): void;
}

const ContactList = ({ contacts, deleteContact }: IContacts) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />;
      })}
    </ul>
  );
};

export default ContactList;
