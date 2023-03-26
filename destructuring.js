// destructuring array

const numbers = [44, 54];
// method 1
const x = numbers[0];
const y = numbers[1];
// console.log(x, y);

// method 2
//const [first, second] = [44, 54];
// console.log(first, second);

// method 3
const [first, second] = numbers;
console.log(first, second);

// object destructuring
const { name, age } = { name: "sobuj", age: 22 };
console.log(name, age);
// another method
const employee = {
  ide: "vs code",
  designation: "developer",
  machine: "dell",
  specification: {
    height: 6,
    weight: 64,
    address: {
      home: "tangail",
      division: "dhaka",
    },
  },
};
const { ide, machine } = employee;
// console.log(ide, machine);
const { height, weight } = employee.specification;
// console.log(height, weight);
// this is know as optional chaining
const { home } = employee?.specification?.address;
console.log(home, division);
