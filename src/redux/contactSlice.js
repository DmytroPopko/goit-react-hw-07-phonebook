import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filterTerm: '',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactInitialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    
    deleteContact(state, action) {
     
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
        state.filterTerm = action.payload
    }
    
  },
});

export const { addContact, deleteContact, setFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
