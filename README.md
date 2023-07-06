# goit-nodejs-hw-01

## Вимоги до проекту

1. Встановлено пакет nodemon як залежність розробки (devDependencies)
   В файлі package.json додані скрипти для запуску index.js: start і dev

2. У корені проекту створено папку db для зберігання контактів contacns.json. У корені проекту створено файл contacts.js в який заімпортовано модулі fs/promises і path для роботи з файловою системою. Створено змнну contactsPath із шлфхом до файлу contacts.json. Додано функції для роботи з колекцією контактів, за допомогою модуля fs і методів readFile() і writeFile(). Створені функції експортовані через module.export.

// contacts.js

/\*

- Розкоментуй і запиши значення
- const contactsPath = ;
  \*/

// TODO: задокументувати кожну функцію
function listContacts() {
// ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
// ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
// ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
// ...твій код. Повертає об'єкт доданого контакту.
}

3. Виконано імпорт модуля contacts.js в файлі index.js. Створені функції для роботи з контактами працюють коректно
4. У файлі index.js заімпортовано пакет yargs для парсу аргументів комадного рядка. Використана функція snvokeAction(), яка отримує тип виконуваної функції і необхідні аргументи і викликає відповідний метод з файлу contacts.js передаючи йому необхідні аргументи.
   // index.js
   const argv = require('yargs').argv;

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case 'list':
// ...
break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');

}
}

invokeAction(argv);

Використай модуль commander для парсингу аргументів командного рядка, як альтернативу модуля yargs

const { Command } = require('commander');
const program = new Command();
program
.option('-a, --action <type>', 'choose action')
.option('-i, --id <type>', 'user id')
.option('-n, --name <type>', 'user name')
.option('-e, --email <type>', 'user email')
.option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
switch (action) {
case 'list':
// ...
break;

    case 'get':
      // ... id
      break;

    case 'add':
      // ... name email phone
      break;

    case 'remove':
      // ... id
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');

}
}

invokeAction(argv);

5. Запусти команди в терміналі і зроби окремі скриншоти результату виконання кожної команди

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

6. Посилання на скриншоти викоання команд додано в файл README.md
