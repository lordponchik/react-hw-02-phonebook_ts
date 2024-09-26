import IContact from '../../interfaces/Contact.interface';

import ContactListItem from '../ContactListItem/ContactListItem';

interface IContacts {
  contacts: IContact[];
}

const ContactList = ({ contacts }: IContacts) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactListItem key={contact.id} {...contact} />;
      })}
    </ul>
  );
};

export default ContactList;
