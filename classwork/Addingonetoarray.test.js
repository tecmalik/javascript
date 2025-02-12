const {addArray} = require("./Addingonetoarray.js")

test("add array 3,4,2 and get 3,4,3",()=>{
    number = [3,4,3]
    result = addArray(number)
    answer = [3,4,3]
    expect(result).toBe(answer)
})

