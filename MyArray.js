//const array =[1, "egg", {firstname , lastname},null,[] ]; //litral method 

const arrayOfNumbers = new Array(2);//array constroctor
arrayOfNumbers[0] = 20;
arrayOfNumbers[1] = 2;
arrayOfNumbers.push(1);
arrayOfNumbers.push(3);
arrayOfNumbers.push(4);

console.log(arrayOfNumbers);

let firstName = "chinedu";

console.log(Array.of(firstName));

console.log(Array.from(firstName));
let pop = arrayOfNumbers.pop();
console.log(pop); 

let animals = ["dog" , "chicks", "goat","fish","rat","sheep","hegoat","goat"];
console.log(animals.splice(2,3));


    