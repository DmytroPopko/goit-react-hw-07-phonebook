// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts;
// export const selectFilter = state => state.contacts.filterTerm;

// export const selectVisibleConcats = createSelector(
//     [selectContacts, selectFilter],
//     (contacts, filterTerm) => {
//     const normalizedFilter = filterTerm.toLowerCase();
//     // console.log(typeof(contacts.contacts));
//     console.log(normalizedFilter);

//     return normalizedFilter
//       ? contacts.contacts.filter(contact => { return true
//         // console.log(contact.name.toLowerCase().includes(normalizedFilter));
//         //   return contact.name.toLowerCase().includes(normalizedFilter);
//         })
//       : contacts;
//   }
// );