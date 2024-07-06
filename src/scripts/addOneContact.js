import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читаю існуючі конт.
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Генерую новий конт.
    const newContact = createFakeContact();
    contacts.push(newContact);

    // Записую оновлений масив конт.
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    console.log(newContact);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();

// npm run add-one
