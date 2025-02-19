function getLowestNumber(numbers){
    let lowestNumber = numbers[1];
    for(let count = 0 ; count < numbers.length ;count += 1 ){
        if(lowestNumber > numbers[count] ){
            lowestNumber = numbers[count] 
        }

    }
    return lowestNumber
}
digits = [10,3,6,8,6,8]
console.log(getLowestNumber(digits))

function getHighestCommonFactors(numbers){
    let lowest = getLowestNumber(numbers); 
    let divissor = 2
   let highestcommonfactors = []
  let eachNumbers = 0
    while (1 in numbers == false && divissor < lowest){
    eachNumbers = 0
    for(let index = 0; index < numbers.length; index+=1 ){
            if(numbers[index] % divissor && divissor != lowest){
            eachNumbers+=1
        }
    }
    if (eachNumbers == numbers.length-1){
        highestcommonfactor.push(divissor)
        let newNumber = []
        for(let index = 0; index < numbers.lenght; index+=1 ){
            newNumber = numbers[index]/divissor
        }
       numbers = newNumber 
    }
    else if (eachNumbers != numbers.length-1 && divissor != lowest) {
        divissor += 1
    }
    } 
return highestcommonfactors
}

let value =[4,8,12]
console.log(getHighestCommonFactors(value));