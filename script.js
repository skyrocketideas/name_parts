"use strict";

const fullName = "Graeme Cassidy Clark";

const firstSpace = fullName.indexOf(" ");
const secondSpace = fullName.indexOf(" ", firstSpace + 1);

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, secondSpace);
const lastName = fullName.substring(secondSpace + 1);
const newFullName = `${firstName} ${middleName} ${lastName}`;

document.querySelector("h2").textContent = newFullName;

console.log(newFullName);
