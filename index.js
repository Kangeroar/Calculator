const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('Type an operator:');
const operator_str = readline.prompt();

console.log('Type a first number to operate:');
const first_num_str = readline.prompt();
var first_num = parseFloat(first_num_str);

console.log('Type a second number to operate: ')
const second_num_str = readline.prompt();
var second_num = parseFloat(second_num_str)
console.log(second_num)

switch (operator_str){
    case "+":
        console.log('\n', "The result is " + (first_num + second_num))
        break;

    case "-":
        console.log('\n', "The result is " + (first_num - second_num))
        break;

    case "/":
        console.log('\n', "The result is " + (first_num / second_num))
        break;
    
    case "*":
        console.log('\n', "The result is " + (first_num * second_num))
        break;
    
    default:
        console.error('\n', "Invalid Operator")
}


/*
if (operator_str == "+"){
    console.log('The answer is ' + (first_num + second_num))
} else if (operator_str == "-"){
    console.log('The answer is ' + (first_num - second_num))
} else if (operator_str == "*"){
    console.log('The answer is ' + (first_num * second_num))
} else if (operator_str == "/"){
    console.log('The answer is ' + (first_num / second_num))
} else {
    console.error('Invalid Operator!')
}
*/



