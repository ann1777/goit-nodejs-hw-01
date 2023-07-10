import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("contacts", "contacts.json");

export const getAllContacts = async () => {
  const contacts = await fs
    .readFile(contactsPath)
    .then((data) => {
      const parsed = JSON.parse(data);
      console.table(parsed);
    })
    .catch((err) => console.log(err.message));
};

export const getContactById = async (Id) => {
  const data = await fs
    .readFile(contactsPath)
    .then((data) => {
      const parsed = JSON.parse(data);
      const contact = parsed.find((contact) => contact.id === Id);
      return console.log(contact) || null;
    })
    .catch((err) => console.log(err.message));
};

export const removeContact = (id) => {
  fs.readFile(contactsPath)
    .then((data) => {
      const contacts = JSON.parse(data);
      if (contacts.find((contact) => contact.id === id)) {
        const contact = contacts.find((contact) => contact.id === id);
        console.table(contact);
      }
      console.log(null);
      const result = contacts.filter((contact) => contact.id !== id);
      fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
    })
    .catch((err) => console.log(err.message));
};

export const addNewContact = async (name, email, phone) => {
  const contact = [{ id: nanoid(), name, email, phone }];
  fs.readFile(contactsPath)
    .then((data) => {
      const parsed = JSON.parse(data);
      return console.table(parsed.concat(contact));
    })
    .then((result) =>
      fs.writeFile(contactsPath, JSON.stringify(result, null, 2))
    )
    .catch((err) => console.log(err.message));
};

export default {
  getAllContacts,
  getContactById,
  removeContact,
  addNewContact,
};
