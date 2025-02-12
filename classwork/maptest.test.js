const {getSquareOfIntegers,addToAllScores,getTestScoresGreaterThanSeventy} = require("./maptest.js")
test("get the scores that are greater than or equal to 70 ",()=>{
    const testScores = [ 34,56,78,90,98,87,65,54,33,88,]
    result = getTestScoresGreaterThanSeventy(testScores);
    answer = [ 78, 90, 98, 87, 88 ]
    expect(result).toEqual(answer)
})


 test(" adding 5 to all scores",()=>{
     const testScores = [85,92,78,88,95] 
     result = addToAllScores(testScores)
    answer = [90,97,83,93,100]
    expect(result).toEqual(answer) 
})

test("get square of each numbers in a list",()=>{
    integers = [2,4,6,8,10]
    result = getSquareOfIntegers(integers)
    answer = [4,16,36,64,100]
    expect(result).toEqual(answer)
})

test("")