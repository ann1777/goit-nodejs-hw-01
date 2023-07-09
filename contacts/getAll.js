import fs from "fs/promises";

const getAllContacts = async () => {
  const contacts = await fs.readFile("../contacts/contacts.json");
  return contacts;
};

export default getAllContacts();
