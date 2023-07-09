import {
  getAllContacts,
  getContactById,
  removeContact,
  addNewContact,
} from "./contacts.js";
import yargs from "yargs";
import { program } from "commander";
// const argv = yargs.argv;

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
  } catch (error) {
    console.log("Unknown action type!");
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

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex != -1) {
//   const action = process.argv[actionIndex + 1];
//   invokeAction(action);
// }

// const { argv } = yargs(process.argv.slice(2));
// // console.log(argv);

// invokeAction(argv);

// node index -a "getAll"
// node index.js --action getById --id AeHIrLTr6JkxGE6SN-0Rw
//
