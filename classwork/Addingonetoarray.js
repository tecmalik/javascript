function addArray(arry){
    newNumber = "";
    for(let count= 0 ; count < arry.length ; count++){
        newNumber += arry[count];
    }
    
    let numbersArry = Number(newNumber) + 1;
    const backToArry = numbersArry.split("")
    return backToArry
     
}
console.log(addArray([3,4,2]));
console.log(addArray([9,9,9]));

module.exports ={addArray}

