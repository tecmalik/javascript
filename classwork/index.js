
function getDoubledNumbers(arrayOfNumbers){
    let doubledNumbers = [];
    arrayOfNumbers.forEach((element)=>{
        let result = element *2;
        doubledNumbers.push(result);
    })
    return doubledNumbers
}

function getEvenNumbers(numbers){
    let evenNumbers = [];
    numbers.forEach((element)=>{
        if(element % 2 == 0){
            evenNumbers.push(element)
        }
    }) 
    return evenNumbers; 
}

function addThreeToEachElement(arr){
    let result  =  arr.map((number)=>(number+3))
    return result;
}
function addindexToEachElement(arr){
    let result  =  arr.map((number, index)=>(number+index ))
    return result;
};
function getOddNumber(array){
    return array.filter((number)=>number % 2 != 0)
};
function getWordsGreaterThanFourLetters(arrayOfWords) {
    return arrayOfWords.filter((word)=> word.length > 4);
}
function getStudents(students){
    return students.filter((student)=> student.age>20)
}
module.exports = {
    getStudents,
    getWordsGreaterThanFourLetters,
    getOddNumber,
    getDoubledNumbers,
    getEvenNumbers,
    addThreeToEachElement,
    addindexToEachElement}

