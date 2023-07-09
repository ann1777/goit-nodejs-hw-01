import fs from "fs/promises";

export async function getContactById(Id) {
  try {
    const data = await fs.readFile("contacts.json");
    const normalizedData = JSON.parse(data);
    const result = normalizedData.find(
      (contact) => contact.id.toString() === Id.toString()
    );
    return console.log(result);
  } catch (error) {
    return console.log(error);
  }
}
export default getContactById();
