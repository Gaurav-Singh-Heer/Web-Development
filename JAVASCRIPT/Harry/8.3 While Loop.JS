let input;

do{
    input=prompt("Enter a number");
    input=Number(input);
}
while (isNaN(input));

let i=0
do{
    console.log(i);
    i++;
}while(i<input);