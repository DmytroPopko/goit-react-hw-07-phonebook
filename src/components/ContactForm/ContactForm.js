import { useState } from 'react';
import { AddContact } from 'components/AddContact';
import './ContactForm.scss';
import { toast } from 'react-toastify';

export default function ContactForm({ onSubmit }) {
  const [options, setOptions] = useState({ name: '', phone: '' });

  const handleChange = event => {
    const { name, value } = event.target;
  
    setOptions(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(options);
    reset();

    toast.success('Contact added!');
  };

  const reset = () => {
    setOptions( {name: '', phone: ''} );
  };

  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className="ContactForm__textarea"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={options.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          className="ContactForm__textarea"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={options.phone}
          onChange={handleChange}
        />
        <AddContact />
      </label>
    </form>
  );
}
