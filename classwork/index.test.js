
const {getStudents,getWordsGreaterThanFourLetters,getOddNumber,getDoubledNumbers, getEvenNumbers, addThreeToEachElement,addindexToEachElement} = require("./index.js");

beforeEach(()=>(
    numbers = [2,3,4,5,6,7]
));

test ('multiply each element by two ',()=>{
   // let numbers = [2,3,4,5,6,7]
    let result = getDoubledNumbers(numbers);
    let answer =[4,6,8,10,12,14]
    expect(result).toEqual(answer)
});

test("check even numbers", ()=>{
    let result = getEvenNumbers(numbers)
    let answer = [2,4,6];
    expect(result).toEqual(answer);

});

test("add three to each element",()=>{
    let result = addThreeToEachElement(numbers)
    let answer = [ 5,6,7,8,9,10];
    expect(result).toEqual(answer);
})

test("add three to each element",()=>{
    let result = addindexToEachElement(numbers)
    let answer = [ 2,4,6,8,10,12];
    expect(result).toEqual(answer);
})
test("return odd numbers",()=>{
    let result = getOddNumber(numbers)
    let answer = [3,5,7]
    expect(result).toEqual(answer);
})
test("return words with length gereter then four",()=>{
    let words = ["hello","world","javascript","java","egg"];
    let result = getWordsGreaterThanFourLetters(words)
    let answer = ["hello","world","javascript"]
    expect(result).toEqual(answer)
})

test("return objects with greater then 20", ()=>{
    const students = [
        {name: "john", age:20},
        {name: "jane", age:21},
        {name: "Alice", age:19},
        {name: "Bob", age:22},];
    let result =  getStudents(students);
    let answer = [{name: "Bob", age: 22},{name: "jane", age: 21}]
    expect(result).toStrictEqual(answer);
})

