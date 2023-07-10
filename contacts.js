import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
const updateContactsStorage = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const parsed = JSON.parse(data);
    console.table(parsed);
  } catch (err) {
    console.log("Error:", err.message);
  }
};

export const getContactById = async (id) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
      return console.log(null);
    } else {
      const [result] = contacts.splice(index, 1);
      await updateContactsStorage(contacts);
      console.table(result);
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
};

export const removeContact = async (id) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const index = contacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
      return console.log(null);
    } else {
      const [result] = contacts.splice(index, 1);
      await updateContactsStorage(contacts);
      console.table(result);
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
};

export const addNewContact = async (name, email, phone) => {
  try {
    const contact = { id: nanoid(), name, email, phone };
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const updatedContacts = contacts.concat(contact);
    console.table(updatedContacts);
    await updateContactsStorage(contacts);
  } catch (err) {
    console.log("Error:", err.message);
  }
};
