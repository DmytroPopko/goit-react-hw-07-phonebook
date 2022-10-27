import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/contactSlice';
import Container from './components/Container';
import { SectionTitle } from 'components/SectionTitle';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import Filter from './components/Filter';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
import Modal from './components/Modal';
import { nanoid } from '@reduxjs/toolkit';
import { getContact } from './redux/selectors';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { filterTerm, contacts } = useSelector(getContact);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onAddContact = opt => {
    const newContact = {
      id: nanoid(),
      name: opt.name,
      number: opt.number,
    };

    const hasContact = contacts.find(option => option.name === newContact.name);
    if (hasContact === undefined) {
      dispatch(addContact(newContact));
    } else {
      alert(`${newContact.name} is already in contacts?`);
    }

    toggleModal();
  };

  const onDeleteContact = contactId => {
     dispatch(deleteContact(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getVisibleConcats = () => {
    const normalizedFilter = filterTerm.toLowerCase();

    return normalizedFilter
      ? contacts.filter(contact => {
          return contact.name.toLowerCase().includes(normalizedFilter);
        })
      : contacts;
  };

  const visibleContacts = getVisibleConcats();

  return (
    <Container>
      <SectionTitle title={'Phonebook'}></SectionTitle>
      <IconButton onClick={toggleModal} aria-label="Add contact">
        <AddIcon width="40" height="40" fill="#fff" />
      </IconButton>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onSubmit={onAddContact}></ContactForm>
        </Modal>
      )}
      <SectionTitle title={'Contacts'}></SectionTitle>
      <Filter value={filterTerm} onChange={changeFilter} />
      {contacts !== undefined ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      ) : (
        ''
      )}
    </Container>
  );
};

export default App;
