// We use strict mode
"use strict";

// Creating an array of contacts in a variable called contacts
const contacts = [
  {
    firstName: "Vivi",
    lastName: "Childerhouse",
    dateOfBirth: new Date("11.04.91"),
    children: 3,
    country: "Ukraine",
    knowsHowToProgram: true,
  },
  {
    firstName: "Letty Le",
    lastName: "Leu",
    dateOfBirth: new Date("05.05.77"),
    children: 1,
    country: "China",
    knowsHowToProgram: true,
  },
  {
    firstName: "Bret",
    lastName: "Valleryarna",
    dateOfBirth: new Date("24.08.90"),
    children: 3,
    country: "Poland",
    knowsHowToProgram: false,
  },
  {
    firstName: "Emma",
    lastName: "Shelly",
    dateOfBirth: new Date("05.10.84"),
    children: 2,
    country: "Madagascar",
    knowsHowToProgram: false,
  },
  {
    firstName: "Suzie",
    lastName: "Crummey",
    dateOfBirth: new Date("05.07.87"),
    children: 3,
    country: "China",
    knowsHowToProgram: true,
  },
];

// Is the first person older than the last person?
if (contacts[0].dateOfBirth < contacts[4].dateOfBirth) {
  console.log("first person is older than the last");
} else {
  console.log("last person is older than the first");
}

//Does the 2nd person have the same amount of kids as the 3rd?
if (contacts[1].children === contacts[2].children) {
  console.log(
    "Yes " +
      contacts[1].firstName +
      " and " +
      contacts[2].firstName +
      " have the same amount of kids"
  );
} else {
  console.log(
    "No " +
      contacts[1].firstName +
      " and " +
      contacts[2].firstName +
      " dont have the same amount of kids"
  );
}

// checks if the 1st person and the 4th person in the array both know how to program
if (contacts[0].knowsHowToProgram && contacts[3].knowsHowToProgram) {
  console.log("Yay!");
} else {
  console.log("LMGTFY");
}

//Create a statement that checks the 2nd person in the array for their nationality
switch (contacts[1].country) {
  case "Iceland":
    console.log("Hæ");
    break;
  case "Spain":
    console.log("Hola");
    break;
  case "Korea":
    console.log("여보세요");
    break;
  default:
    console.log("Hello");
}

//Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
console.log(
  contacts[1].firstName.length > 5
    ? "Name is longer than 5 characters"
    : "Name is not longer than 5 characters"
);
