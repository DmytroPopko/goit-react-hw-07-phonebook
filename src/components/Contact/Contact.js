import IconButton from '../../components/IconButton';
import { ReactComponent as DelIcon } from '../../icons/delete.svg';

export const Contact = ({ contact, onDeleteContact }) => {

  return (
    <div>
      {contact.name}: {contact.number}
      <IconButton
        className="IconButtonDelete"
        onClick={() => onDeleteContact(contact.id)}
        aria-label="Delete contact"
      >
        <DelIcon width="15" height="15" fill="#fff" />
      </IconButton>
    </div>
  );
};
