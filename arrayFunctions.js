let string = 'Hello';
let array = Array.from(string);
console.log(array);
//['H', 'e', 'l', 'l','o']
let array2 = Array.of(string);
console.log(array2);
//['Hello']

let array4 = [13,45,89,4];
let bool = Array.isArray(array4);
console.log(bool);
//true

let array5 = ['a', 'b', 'c'];
let array6 = [1,3,5];
let concatenatedArray = array5.concat(array6);
console.log(concatenatedArray);
//['a', 'b', 'c', 1, 3, 5]

let array7 = [3,6,9,1,5];
let entries = array7.entries();
let firstEntry = entries.next().value;
console.log(firstEntry);
//[0,3]
let keys = array7.keys();
let firstKey = keys.next().value;
console.log(firstKey);
//0

const isEven = (element) => {
	return element%2 == 0;
}
let array8 = [12, 45, 67, 88];
let everyPass = array8.every(isEven);
console.log(everyPass);
//false
let somePass = array8.some(isEven);
console.log(somePass);
//true

const isString = (value) => {
	return typeof(value) == 'string';
}
let array9 = [1, 33, 'a', 45, 88, 'd'];
let arrayOfStrings = array9.filter(isString);
console.log(arrayOfStrings);
//['a', 'd']

class Person {
	constructor(name, job, age){
		this.name = name;
		this.job = job;
		this.age = age;
	}
}
let Lucas = new Person('Lucas', 'Software Engineer', 23);
let Alex = new Person('Alex', 'Student', 17);
const isStudent = (person) => {
	return person.job == 'Student';
}
let arrayOfPeople = [Lucas, Alex];
let student = arrayOfPeople.find(isStudent);
console.log(student);
//{name: 'Alex', job: 'Student', age: 17}
let studentIndex = arrayOfPeople.findIndex(isStudent);
console.log(studentIndex);
//1

let array10 = [1, 5, 8, 10, 4, 15];
let bool2 = array10.includes(9);
console.log(bool2);
//false

let array11 = [15, 3, 0, 10, 44, 87, 0];
let index = array11.indexOf(0);
console.log(index);
//2
let lastIndex = array11.lastIndexOf(0);
console.log(lastIndex);
//6

let array12 = ['Why', 'How', 'Where'];
let string2 = array12.join('? ');
console.log(string2);
//Why? How? Where?

const convertToInteger = (float) => {
	return Math.floor(float);
}
let arrayOfFloats = [1.4, 5.66, 8.93, 0.8, 15.3];
let arrayOfIntegers = arrayOfFloats.map((float) => convertToInteger(float));
console.log(arrayOfIntegers);
//[1, 5, 8, 0, 15]

let array13 = [54, 66, 3, 7, 82];
let length = array13.push(18);
console.log(array13);
//[54, 66, 3, 7, 82, 18];
console.log(length);
//6
let newLength = array13.unshift(1);
console.log(array13);
//[1, 54, 66, 3, 7, 82, 18];
console.log(newLength);
//7
let lastElement = array13.pop();
console.log(array13);
//[1, 54, 66, 3, 7, 82];
console.log(lastElement);
//18
let firstElement = array13.shift();
console.log(array13);
//[54, 66, 3, 7, 82];
console.log(firstElement);
//1
let reversedArray = array13.reverse();
console.log(array13);
//[82, 7, 3, 66, 54];

let array14 = [1,2,3,4,5,6];
let slicedPortion = array14.slice(2, 4);
console.log(slicedPortion);
//[3,4]
let totalSlice = array14.slice(2);
//[3,4,5,6]
let splicedElements = array14.splice(1, 2, 'a', 'b');
//[2,3]
console.log(array14);
//[1 ,'a', 'b', 4, 5, 6];

