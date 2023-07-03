const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const contactsPath = path.join("db", "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.table(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const normalizedData = JSON.parse(data);
    const result = normalizedData.find(
      (contact) => contact.id.toString() === contactId.toString()
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => {
      const normalizedData = JSON.parse(data);
      const result = normalizedData.filter(
        (contact) => contact.id.toString() !== contactId.toString()
      );
      if (arrayEquals(normalizedData, result) === false) {
        fs.writeFile(contactsPath, JSON.stringify(result), "utf-8");
        console.log(`Contact by id:${contactId} removed succesfully`);
      } else console.log(`Cannot delete contact by id:${contactId}`);
    })
    .catch((error) => console.log(error));
}

function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
  };
  fs.readFile(contactsPath)
    .then((data) => {
      const normalizedData = JSON.parse(data);
      if (checkIfContactExists(normalizedData, newContact) === false) {
        const result = [...normalizedData, newContact];
        fs.writeFile(contactsPath, JSON.stringify(result), "utf-8");
        console.log(`Contact by name:${name} added succesfully`);
      } else console.log(`Contact by name:${name} already exists`);
    })
    .catch((error) => console.log(error));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
