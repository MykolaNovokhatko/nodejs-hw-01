import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    // Прочитав readFile дані з файлу
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Перевірив чи є хоча б 1 контакт
    if (contacts.length > 0) {
      // Метод pop видаляє ОСТАННІЙ елемент з масиву
      contacts.pop();

      // Записав writeFile оновлений масив
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
      console.log();
    } else {
      console.log();
    }
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();

// npm run remove-last