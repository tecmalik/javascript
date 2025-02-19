// three ways to create an object
//1. prototype base 
let animal = {
    name: "",
    color : "",
    sound :(mehh)=>{
         
        return  `${this.name} makes a sound maleeki ${mehh}` 
    }
}


let goat = Object.create(animal);
console.log(goat)
goat.name = "beebee"
goat.color = "black"
goat.sound = "maleeki"


console.log(goat)

let cat = {}
Object.setPrototypeOf(cat , animal)
console.log(cat);
cat.name = "west";
cat.color = "Brown";
cat.sound = "meowww"

// 2. constructioin function 

function  Human(name,age,complexion){
    this.name = name
    this.age = age
    this.complexion = complexion

    this.describe = function(){
        return `my name${this.name}, i am ${this.age} years.`
    }
};
let personOne = new Human("esther",14,"oyinbo")
console.log(personOne.describe());
