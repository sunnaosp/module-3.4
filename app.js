// We use strict mode
"use strict";

// We display the date and time
console.log(Date());

// Creating an array of contacts in a variable called contacts
const contacts = [
  {
    firstName: "Jói",
    lastName: "Jóns",
  },
  {
    firstName: "Siggi",
    lastName: "Sigurðs",
  },
  {
    firstName: "Birgir",
    lastName: "Bjarna",
    silly: "obbsasí",
  },
];

// We display the number of contacts
console.log(contacts.length);

// We output the last contact
console.log(contacts[contacts.length - 1]);

// We delete the last contacts silly property
delete contacts[contacts.length - 1].silly;
console.log(contacts[contacts.length - 1]);

// We add the isBoss property to the first contact
contacts[0].isBoss = 1;
console.log(contacts[0]);

// We display the sum of the ages of the first two contacts
contacts[0].age = 35;
contacts[1].age = 42;
contacts[2].age = 39;
console.log(contacts[0].age);
console.log(contacts[1].age);
console.log(contacts[0].age + contacts[1].age);

// We display the full name of the first contact
console.log(contacts[0].firstName + " " + contacts[0].lastName);

// If first contact is boss() we display first contacts age to the power of 2
console.log(contacts[0]);
if (contacts[0].isBoss) {
  console.log(Math.pow(contacts[0].age, 2));
}
