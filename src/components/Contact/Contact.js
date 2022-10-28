import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import IconButton from '../../components/IconButton';
import { ReactComponent as DelIcon } from '../../icons/delete.svg';

export const Contact = ({ contact, onDeleteContact }) => {

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      {contact.name}: {contact.phone}
      <IconButton
        className="IconButtonDelete"
        onClick={handleDelete}
        aria-label="Delete contact"
      >
        <DelIcon width="15" height="15" fill="#fff" />
      </IconButton>
    </div>
  );
};
