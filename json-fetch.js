// JSON = stringify and parse
const student = {
  id: 12,
  name: "sobuj",
  dept: "cse",
};

// converting object to JSON
const studentString = JSON.stringify(student);
console.log(student);
console.log(studentString);

// converting JSON to js object
const studentObj = JSON.parse(studentString);
console.log(studentObj);
