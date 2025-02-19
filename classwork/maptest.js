function getTestScoresGreaterThanSeventy(testScores){
    return testScores.filter((testScore)=>( testScore > 70))
}
function addToAllScores(testScores){
    return testScores.map((testScore)=> testScore + 5)
}
function getSquareOfIntegers(testScores){
    return testScores.map((score)=>(score*score))
}
function assignBooksforMembers(books,listOfMembers){
for (const[key, index] of books.entries()){
    object = {};
    object[key] = listOfMembers[index];
}
return object
}

function getAftenoonClasses(classtiming){
    return classtiming.filter((time)=> (time.includes("PM")) )

}
function getTotalAmount(categories){
    let sum = 0; 
    for(const price in categories){
        sum += categories[price]
    }
return sum
 }
function getHealthyCategory(shoppingList){
   return shoppingList.filter((category)=>(category.isHealth == true)) 
}

function getHealthydisplay(shoppingList){
    helthyItems =  shoppingList.filter((category)=>(category.isHealth == true)) 
    helthyItems.forEach(element => {
        console.log(`${element} : ${shoppingList[element]}`)
    }); 
 }
 //getHealthydisplay(shoppingList);

 function replaceEvanNumbers(){
    
 }
 



module.exports = {
    getHealthydisplay,
    getHealthyCategory,
    getTotalAmount,
    getAftenoonClasses,
    assignBooksforMembers,
    getSquareOfIntegers,
    getTestScoresGreaterThanSeventy,
    addToAllScores}