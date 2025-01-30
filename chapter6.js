const ps = require("prompt-sync");
const prompt = ps();

//const name = prompt("Enter something :");

//6.1,

function getPentagonalNumber(number){
	const value = (number * (3*number - 1)) /2
	return value;
	}
	
console.log(getPentagonalNumber(1));
console.log(getPentagonalNumber(2));
console.log(getPentagonalNumber(3));

//6.,

function sumDigit(number){
	let total = 0
	while(number > 0){
		let temp = number % 10;
		total+= temp;
		number = Math.trunc(number/ 10);
	}
	
	return total;
}

console.log(sumDigit(234));
//6.3

function isPanlindrome(number){
	let actualNumber = number
	let reverseNumber = 0;
	while(number>0){
	let temp = number % 10;
		reverseNumber = reverseNumber*10 
		reverseNumber += temp;
	number = Math.trunc(number/ 10);
	}
	if( reverseNumber == actualNumber){
	return true;
	}
	return false;	
	}

console.log(isPanlindrome(4563));
console.log(isPanlindrome(121));

//6.4

function reverse(number){
	let reverseNumber = 0;
	while(number>0){
	let temp = number % 10;
		reverseNumber = reverseNumber*10 
		reverseNumber += temp;
	number = Math.trunc(number/ 10);
	}
	return reverseNumber;	
		}

console.log(reverse(4563));
console.log(reverse(121));


//6.5.

let number1 = prompt("Enter first number to be sorted:");
let number2 = prompt("Enter second number to be sorted:");
let number3 = prompt("Enter third number to be sorted:");

/**function sorting(numbe1, number2, number3){
	let temp = 0;
	if (number1 < number2){
		temp = number2;
		number2 = number1;
		number1 = temp;	
	}
	 else if(number2 < number3){
		temp = number3;
		number3 = number2;
		number2 = temp;
	}
return [number1, number2, number3];
}


function finalsorting(number1, number2, number3){
	if (number1 >= number2 && number2 >= number3){
		return [number1, number2, number3];
	}
	sorting(number1, number2, number3);
	finalsorting(sorting(number1, number2, number3)[0], sorting(number1, number2, number3)[1], sorting(number1, number2, number3)[2]);
	
}


function sorting(number1,number2,number3){
	if (number1>=number2 && number2>=number3){
	return [number1, number2, number3];
	}
	else if (number2>=number1 && number1>=number3){
	return (`${number2} , ${number1}, ${number3}`);
	}
	else if (number3>=number1 && number1>=number2){
	return [`${number3}, ${number1}, ${number2})`];
	}
	else if (number2>=number3 && number3>=number1){
	return [`${number2} ,${number3}, ${number1}`];
	}
	else if (number3 >=number2 && number2<=number1)
	return [`${number3}, ${number2} , ${number1}`];
	}

}

*/

sort