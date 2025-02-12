function getTestScoresGreaterThanSeventy(testScores){
    return testScores.filter((testScore)=>( testScore > 70))
}
function addToAllScores(testScores){
    return testScores.map((testScore)=> testScore + 5)
}
function getSquareOfIntegers(testScores){
    return testScores.map((score)=>(score*score))
}

module.exports = {getSquareOfIntegers,getTestScoresGreaterThanSeventy,addToAllScores}