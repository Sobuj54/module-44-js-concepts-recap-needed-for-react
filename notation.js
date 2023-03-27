const person = {
  name: "alu mia",
  profession: "traffic police",
  age: 35,
  6: "seasons", //this can not be accessed by dot notation but can be accessed by bracket
  address: "dhaka",
  "his-name": "raymond", //this can not be accessed by dot notation but can be accessed by bracket notation
};

// dot notation
const address = person.address;
console.log(address);

// bracket notation
// in bracket notation key should be put inside quotation
const profession = person["profession"];
console.log(profession);
// another method
const personName = "name";
const name = person[personName];
console.log(name);

const seasons = person[6];
console.log(seasons);

const hisName = person["his-name"];
console.log(hisName);
