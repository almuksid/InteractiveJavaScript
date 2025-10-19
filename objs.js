// Challenge 1
// Make a Calculator
let num1 = prompt("Enter Num1");
let op = prompt("Enter Operator +, -, *, /");
let num2 = prompt("Enter Num2");

if(op == '+'){
    console.log(Number(num1) + Number(num2) )
}else if(op == '-'){
    console.log(Number(num1) - Number(num2) )
}else if(op == '*'){
    console.log(Number(num1) * Number(num2) )
}else if(op == '/'){
    console.log(Number(num1) / Number(num2) )
}

