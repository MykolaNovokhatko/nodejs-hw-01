import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    // Зробив порожній масив
    const contacts = [];

    // Записав оновлений масив конт. назад до файлу
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    console.log();
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();

// npm run remove-all