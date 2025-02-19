const {getHealthydisplay,getHealthyCategory,getTotalAmount,getAftenoonClasses,assignBooksforMembers,getSquareOfIntegers,addToAllScores,getTestScoresGreaterThanSeventy} = require("./maptest.js")
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
    const integers = [2,4,6,8,10]
    result = getSquareOfIntegers(integers)
    answer = [4,16,36,64,100]
    expect(result).toEqual(answer)
})

test("distribute diffrent book to each member from sarah's collection",()=>{
   const listOfMembers = ["Emily","jack","sophia","Daniel"]
   const books = ["nurge","power of money","phycology of money","0's and 1's"] 
    result = assignBooksforMembers(books , listOfMembers)
    answer = [{Emily:"nurge",jack:"power of money",sophia:"phycology of money",aniel:"0's and 1's"}]
})

test("distribute diffrent book to each member from sarah's collection",()=>{
    const listOfMembers = ["Emily","jack","sophia","Daniel"]
    const books = ["nurge","power of money","phycology of money","0's and 1's"] 
     result = assignBooksforMembers(books , listOfMembers)
     answer = [{Emily:"nurge",jack:"power of money",sophia:"phycology of money",aniel:"0's and 1's"}]
 })

 test("identify classes in the afternoon",()=>{
    const classtiming = ["9:00 AM"," 11:00 AM","1:00 PM","3:00 PM","5:00 PM"]
        result = getAftenoonClasses(classtiming)
        answer = ["1:00 PM","3:00 PM","5:00 PM"];
        expect(result).toEqual(answer);
 })
test("total ammount spent on all categories",()=>{
    const categories = {"groceries" : 150, "Dining Out" : 100 , "enterteimant" : 50, "transportation" : 80}
    result = getTotalAmount(categories)
    answer = 380
    expect(result).toBe(answer)
})


test("filter out the unhealthy items from the shoppingList",()=>{
    const shoppingList = [
        {name :'apples',category:'fruits', isHealthy :true},
        {name: 'potato Chips',category:'Snacks',isHealth:false},
        {name: 'carrots',category:'vagetables',isHealth:true},
        {name: 'chocolate Bars',category:'Sweets',isHealth:false},
        {name: 'greek Yogurt',category:'diary',isHealth:true},
        {name: 'carrots',category:'Beverages', isHealth:false}
    ]   
    result = getHealthyCategory(shoppingList);
    answer = [
            {name: 'carrots',category:'vagetables',isHealth:true},
            {name: 'greek Yogurt',category:'diary',isHealth:true}
        ]
        expect(result).toStrictEqual(answer);
})

test("replacing all even numbers with 0 and all odd numbers with 1",()=>{
    result = replaceEvanNumbers([1,2,4,5,6,8,8,1])
    answer = [1,0,0,1,0,0,0,1] 
    expect(result).toEqual(answer)
})