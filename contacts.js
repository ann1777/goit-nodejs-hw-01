import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("contacts", "contacts.json");

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
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      console.table(contact);
    } else {
      console.log(null);
    }
  } catch (err) {
    console.log("Error:", err.message);
  }
};

export const removeContact = async (id) => {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      console.table(contact);
    } else {
      console.log(null);
    }
    const result = contacts.filter((contact) => contact.id !== id);
    await fs.writeFile(contactsPath, JSON.stringify(result, null, 2));
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
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2));
  } catch (err) {
    console.log("Error:", err.message);
  }
};

export default {
  getAllContacts,
  getContactById,
  removeContact,
  addNewContact,
};
