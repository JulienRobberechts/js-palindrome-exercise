const repl = require("repl");
const palindrome = require("../services/palindrome");

const help = 'Type p("aba") to test the Palindrome function';

console.log("Welcome to palindrome cli");
console.log('Enter the word or phrase you want to check like this: p("aba")');

const r = repl.start("pal console > ");
r.context.p = palindrome;
r.context.h = help;
