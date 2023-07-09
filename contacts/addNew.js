import nanoid from "nanoid";
export async function addNewContact(name, email, phone) {
  fs.readFile(contactsPath, "utf-8", (error, data) => {
    if (error) {
      return console.log(error);
    }

    const contacts = JSON.parse(data);

    contacts.push({
      id: nanoid,
      // id: contacts.length + 1,
      name: name,
      email: email,
      phone: phone,
    });

    console.log("Contacts added successfully! New lists of contacts: ");
    console.table(contacts);

    fs.writeFile(contactsPath, JSON.stringify(contacts), (error) => {
      if (error) {
        return console.log(error);
      }
    });
  });
}

export default addNewContact();
