const {getSum,getArrayOfContent} = require("./inventory.js")
beforeEach(()=>(
    inventory = {
        apple: 10,
        banana: 5,
        orange: 8,
        mango: 12
        }
));

test("get the sum of inventrories",()=>{
    result = getSum(inventory)
    answer = 35
    expect(result).toEqual(answer)
})

test("get the array of inventories in an array",()=>{
    result = getArrayOfContent(inventory)
    answer = [
        "apple contains 10",
        "banana contains 5",
        "orange contains 8",
        "mango contains 12"
      ]
      expect(result).toBe(answer)
})


