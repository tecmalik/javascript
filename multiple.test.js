const multiply = require("./multiply");



//arrangr Acty assert (AAA)
//discription and call back function
test('multiply two varables', ()=>{
	let numberOne = 2;
	let numberTwo = 6; //Arrange
	let result = multiply(numberOne,numberTwo);//Act
	let answer = 12;
expect(result).toBe(12);//assert
})


 