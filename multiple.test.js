/*const multiply = require("./multiply");


//arrangr Acty assert (AAA)
//discription and call back function
test('multiply two varables', ()=>{
	let numberOne = 2;
	let numberTwo = 6; //Arrange
	let result = multiply(numberOne,numberTwo);//Act
	let answer = 12;
expect(result).toBe(12);//assert
})

test('add two numbers',()=>{
let sum = addTwoNumbers(numbersOne, numberTwo);
let answer = 8;
expect(sum).tobe(answer);
})

// else if  i have to have two number then i have to distructure it 
*/











const {multiply, addTwoNumbers, getOddNumbers} = require("./multiply");
let numberOne = 2;
let numberTwo = 6; //Arrange

test('multiply two varables', ()=>{
	
	let result = multiply(numberOne,numberTwo);//Act
	let answer = 12;
expect(result).toBe(12);//assert
})

test('add two numbers',()=>{
	let sum = addTwoNumbers(numberOne, numberTwo);
	let answer = 8;
expect(sum).toBe(answer);
})

test('return odd numbers', ()=> {
	let arrayOfNumbers = [1,2,3,4,8,5]
	let result = getOddNumbers(arrayOfNumbers);
	let answer = [1,3,5];
expect(result).toEqual(answer);
})

