
const MyArray = require("./MyArray")

beforeEach(()=>(
    myArray = MyArray()
))

test('check if array is empty',()=>{
    result = myArray.isEmpty
    answer = True
    expect(result).toBe(answer)
})

