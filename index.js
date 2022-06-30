const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('Type a first number to add:');
const response1_str = readline.prompt();
var response1_num = parseInt(response1_str);

console.log('Type a second number to add:');
const response2_str = readline.prompt();
var response2_num = parseInt(response2_str);

console.log(response1_num + response2_num)
