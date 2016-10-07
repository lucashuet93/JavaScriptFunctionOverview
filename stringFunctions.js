const string = 'amygdala';
let character = string.charAt(3);
console.log(character);
//g

const string2 = 'hippopotamus';
let another = string2.concat(' is my favorite animal');
console.log(another);
//hippopotamus is my favorite animal

const string3 = 'lion';
let bool = string3.endsWith('li', 2);
console.log(bool);
//true

const string4 = 'the big brown bear jumped over the fence.';
let includes = string4.includes('Brown');
console.log(includes);
//false (Remember, includes is case sensitive)

const string5 = 'Who is there?';
let index = string5.indexOf('e');
let lastIndex = string5.lastIndexOf('e');
console.log(index);
console.log(lastIndex);
//9
//11

const string6 = 'Hello World!';
const string7 = 'Another string!';
let number = string6.localeCompare(string7);
console.log(number);
//1 

const string8 = 'Blue';
let repeatedString = string8.repeat(5);
console.log(repeatedString);
//BlueBlueBlueBlueBlue

const string9 = 'How are you doing?';
let slicedString = string9.slice(4, -1);
console.log(slicedString);
//are you doing

const string10 = 'one more time';
let array = string10.split(' ');
console.log(array);
//['one', 'more', 'time']

const string11 = 'This string will be cut';
let substring = string11.substr(5, 11);
console.log(substring);
//string will

const string12 = 'The Panthers will win the Super Bowl';
let bool2 = string12.startsWith('The ');
console.log(bool2);
//true

const string13 = '    foo bar  ';
let trimmed  = string13.trim();
console.log(trimmed);
//foo bar

const string14 = 'Too many strings!';
let upperCase = string14.toUpperCase();
console.log(upperCase);
//TOO MANY STRINGS!

const string15 = 'BOLD TEXT';
let lowerCase = string15.toLowerCase();
console.log(lowerCase);
//bold text

const integer = 555;
let string16 = integer.toString();
let type = typeof(string16);
console.log(type);
//string
