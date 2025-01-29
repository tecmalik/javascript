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
for (const property in car) console.log(`${property} : ${car[property]}`); 
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

const person3 = { FirstName: "john" , LastName : "Doe" , age : 25 }
const values = Object.values(person3)
function getDetails(){
	console.log(`First Name = ${values[0]}, Last Name : ${values[1]}`)
}
getDetails();


//7.
const book = {title:"The Great Gatsby", author:"F.Scott Fitzgerald", yearPublished : 1925 }
 
function getBookInfo(book){
	const {title,author} = book;
	console.log(title + " by " + author )
}
getBookInfo(book)


//8.

samsDetails = {name:'Sam',age:40 , profession:"Engineer"};

function getNameAndAge(samsDetails){
	const {name,age} = samsDetails
	console.log(name +" "+ age )
}
getNameAndAge(samsDetails);



 




 
