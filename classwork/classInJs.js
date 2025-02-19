// class syntax in es script 
class Human{
    #name;
    #nage;
    constructor(name,age){
        this.#name= name;
        this.#age= age;
    }



    setfunction(name){
        this.#name=name;
    }
    getfirstName(name){
        return this.name
    }

}
let personOne = new Human("chinedu",12)
console.log(personOne)