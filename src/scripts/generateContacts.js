import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читаю існуючі конт.
    const readContacts = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(readContacts);

    // Генерую новий конт.
    for (let index = 0; index < number; index++) {
      contacts.push(createFakeContact());
    }

    // Записую оновлений масив конт.
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    console.log(`${number}`);
  } catch (error) {
    console.error(error);
  }
};

// К-сть повернутих конт.
generateContacts(5);

// npm run generate