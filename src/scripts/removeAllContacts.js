import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been removed');
  } catch (err) {
    console.error('Failed to removed contacts:', err);
  }
};

removeAllContacts();
