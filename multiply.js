/*function addTwoNumbers(){
let  answer = firstNumber + secodNumber;
return answer
}

function multiply(numberOne, numberTwo){
	let result = numberOne*numberTwo  
	return result;
	}
//module.exports = multiply
constructuring module.exports = {multiply , addTwoNumbers}


//constructuring module.exports = {multiply , addTwoNumbers}
*/







function addTwoNumbers(firstNumber, secondNumber){
let  answer = firstNumber + secondNumber;
return answer
}

function multiply(numberOne, numberTwo){
	let result = numberOne*numberTwo  
	return result;
	}


/*const getOddNumbers = (arr) =>{
let newArray = [];
for(element of arr){
	if(element %2 != 0){
		newArray.push(element);
	}
 }
 return newArray;
}
*/

/*
const getOddNumbers = (arr) =>{
let newArray = [];
for(index in arr){
	console.log(index)
	if(arr[index] %2 != 0){
	newArray[index]= arr[index]
	}  
 }
 //return newArray;
}
*/

const getOddNumbers = (arr) =>{
let newArray = [];
count = 0
for(index in arr){
	if(arr[index] %2 != 0){
	newArray[count++]= arr[index]
	}  
 }
 return newArray;
}

module.exports = {multiply , addTwoNumbers ,getOddNumbers};