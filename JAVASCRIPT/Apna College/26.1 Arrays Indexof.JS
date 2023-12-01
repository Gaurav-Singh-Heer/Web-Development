const names=['Daman','Harsh','Vansh','Daman','Harsh','Gaurav']
console.log(names)

// names.indexOf('Daman')
// names.indexOf('Vansh')

console.log(names.indexOf('Daman'))
console.log(names.indexOf('Vansh'))
console.log(names.indexOf('Va'))     // Does not exist so -1

console.log(names.indexOf('Daman',2))  // 2 means start checking from index 2