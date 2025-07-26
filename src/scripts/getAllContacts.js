import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    const totalContacts = readContacts();
    return totalContacts;
  } catch (err) {
    console.error('Fail to load contacts:', err);
    return [];
  }
};
const totalContacts = await getAllContacts();
console.log('All contacts:', totalContacts);
