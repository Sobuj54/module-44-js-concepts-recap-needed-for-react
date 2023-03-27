// JSON = stringify and parse
const student = {
  id: 12,
  name: "sobuj",
  dept: "cse",
};

// converting object to JSON
const studentString = JSON.stringify(student);
// console.log(student);
// console.log(studentString);

// converting JSON to js object
const studentObj = JSON.parse(studentString);
// console.log(studentObj);

// getting keys and values from object
const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

// for loop in array
const numbers = [11, 15, 54, 54, 25];
// forEach does not return any value
numbers.forEach((num) => console.log(num));
// map returns value in an array
const nums = numbers.map((num) => num * 3);
//console.log(nums);

// loop an array like object using for of
// loop an object using for in

const products = [
  { name: "phone", price: 15000, color: "black" },
  { name: "laptop", price: 100000, color: "silver" },
  { name: "pc", price: 200000, color: "black" },
  { name: "phone", price: 15000, color: "white" },
];
const newProduct = { name: "pad", price: 15000, color: "golden" };
// copy products array and add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);
// create a new array without any specific item
// create array without phone item
const remainingProducts = products.filter(
  (product) => product.name !== "phone"
);
console.log(remainingProducts);

// fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));
