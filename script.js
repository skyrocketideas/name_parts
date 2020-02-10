"use strict";

const fullName = "Dave Bloody Brubeck";

const firstSpace = fullName.indexOf(" ");
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, secondSpace);
const lastName = fullName.substring(secondSpace + 1);
const newFullName = `${firstName} ${middleName} ${lastName}`;

// document.querySelector("h2").textContent =

console.log(firstSpace);
console.log(secondSpace);
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(newFullName);
