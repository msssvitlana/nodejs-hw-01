import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (!Array.isArray(contacts)) {
      throw new Error('Contacts are not an array');
    }
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }
    contacts.splice(-1, 1);
    await writeContacts(contacts);
    console.log('Last contact has been removed.');
  } catch (err) {
    console.error('Error removing last contact:', err);
  }
};

removeLastContact();
