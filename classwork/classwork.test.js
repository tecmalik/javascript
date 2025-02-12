const{displayName,displaySecondName,displayZipCode,updateAge,addNewGPA_value,getDetails} = require("./classwork.js");


const student = { 
    name : "john Doe",
    age : 22 ,
    courses : [ "maths",
             "physics",
             "computer sience"],
    address :{
        city : "new york",
        zip :"10001"}
    }


test('test get student name',()=> {
    let result = displayName(student);
    let answer = "john Doe"
    expect(result).toBe(answer);

} );

test('test get student Second name',()=> {
    let result = displaySecondName(student);
    let answer = "physics"
    expect(result).toBe(answer);

} );
test('test get student zip code',()=> {
    let result = displayZipCode(student);
    let answer = "Zip code: 10001"
    expect(result).toBe(answer);

} );
test('test to update Age',()=> {
    let result = updateAge(23);
    let answer = 23
    expect(result).toBe(answer);
} );

test('test add new student GPA name',()=> {
    let result = addNewGPA_value(student , 3.8);
    let answer = 3.8
    expect(result).toBe(answer);
} );

test('test that i can get student details',()=> {
    let result = getDetails(student);
    let answer = "john Doe is 22 years old and has a GPA of 3.8"
    expect(result).toBe(answer);
} );
