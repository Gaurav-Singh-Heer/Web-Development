/**
 * Build a calcultor CLI App
Write a Node.js program that:
* Accepts two numbers and an operator as command-line arguments
* Exexute teh arithmatic opertion based on the provided operator
* Display the result
* Use these operators: +-/*
* 
 */

const args = process.argv

if (args[2] == '+') {
    const num1 = parseInt(args[3]);
    const num2 = parseInt(args[4]);
    console.log(num1 + num2);
}
else if (args[2] == '-') {
    console.log(args[3] - args[4]);
}
else if (args[2] == '*') {
    console.log(args[3] * args[4]);
}
else if (args[2] == '/') {
    console.log(args[3] / args[4]);
}
else {
    console.log("Arguments not found");
}

/*
node Lec_13_1_Process_argv_Lab * 5 6
node Lec_13_1_Process_argv_Lab + 5 6
node Lec_13_1_Process_argv_Lab - 5 6
node Lec_13_1_Process_argv_Lab / 5 6
*/