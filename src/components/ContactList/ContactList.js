import { Contact } from 'components/Contact/Contact';
import './ContactcList.scss';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts &&
        contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
