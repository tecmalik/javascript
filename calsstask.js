//1.
const person = { name:"Tosin",
	complexion:"Black",
	stateOfOrigin:"Kaduna",
	country:"Nigeria"};
//2.	
const car = { make:"Toyota",
		model:"Camry",
		year:2021 };

function carfunction(car){
for (const property in car) console.log(property +" : "+ car[property] ); 
	}

carfunction(car);

//3.
const laptop = { brand:"Dell" , price : 1200}
laptop["color"] = "blue";
console.log(laptop);

 


//4.
const phone = {brand:"Apple", price:999};
phone["price"] = 1500
console.log(phone)

//5.
const person2 = { firstName : "john",
		lastName :"jonnah" }

const names = Object.values(person2);

function getNames(){
	return console.log(names[0]+" "+names[1]);
	}

getNames();
 
//6.

const person3 = {firstName : Az, lastName : muhammed , age : 70 }
 




 
