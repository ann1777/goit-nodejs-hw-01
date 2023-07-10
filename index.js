import {
  getAllContacts,
  getContactById,
  removeContact,
  addNewContact,
} from "./contacts.js";

import { program } from "commander";

const invokeAction = ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "getAll":
        return getAllContacts();

      case "getById":
        getContactById(id);
        break;

      case "addNew":
        addNewContact(name, email, phone);
        break;

      case "removeById":
        removeContact(id);
        break;
    }
  } catch (e) {
    return console.log("Unknown action type!", e);
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);
