console.log("Start of program 1");

let name;

if (name !== undefined && name !== null) {
  console.log(name.length);
} else {
  console.log("Variable 'name' is undefined or null");
}

console.log("End of program");

console.log("Start of program 2");

let name_2;

try {
  console.log(name_2.length);
} catch (error) {
  console.log("Error caught:", error.message);
}

console.log("End of program");
