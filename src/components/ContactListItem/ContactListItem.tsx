import IContact from '../../interfaces/Contact.interface';

const ContactListItem = ({ name, number }: IContact) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;
