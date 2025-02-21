const Human = require("./classInJs");

class Human extends classInJs{
 #gender;

 constructor(name,age,gender){
    super(name,age);

    this.#gender = gender
     }
 speak(){

    return `${this.name} is name`
 }
}

let personOne = new person("bimbola",12,"female");

