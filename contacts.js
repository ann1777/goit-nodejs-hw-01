// const fs = require("fs").promises;
// const path = require("path");
import fs from "fs/promises";
import path from "path";
//Extra module for ID generation
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
      const parsed = JSON.parse(data);
      console.log(parsed.find((contact) => contact.id === id));
      return parsed.filter((contact) => contact.id !== id);
    })
    .then((result) => fs.writeFile(contactsPath, JSON.stringify(result)))
    .catch((err) => console.log(err.message));
};

export const addNewContact = async (name, email, phone) => {
  const contacts = await getAllContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  fs.readFile(contactsPath)
    .then((data) => {
      const newContact = JSON.parse(data);
      return contacts.concat(newContact);
    })
    .then((contacts) => fs.writeFile(contactsPath, JSON.stringify(contacts)))
    .catch((err) => console.log(err.message));
  console.log("Contacts added successfully! New lists of contacts: ");
  console.table(contacts);

  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), (error) => {
    if (error) {
      return console.log(error);
    }
    return newContact;
  });
};

export default {
  getAllContacts,
  getContactById,
  removeContact,
  addNewContact,
};
