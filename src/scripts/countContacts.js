import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts.length;
  } catch (err) {
    console.error('Failed to count contacts:', err);
    return 0;
  }
};
const total = await countContacts();
console.log(`Total contacts: ${total}`);
