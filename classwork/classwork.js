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
    //1.
    function displayName(person){
    return person.name
    }
    console.log(displayName(student));

    function displaySecondName(person){
         return person.courses[1]
    }
    console.log(displaySecondName(student));

   function displayZipCode(person){
    return `Zip code: ${person.address["zip"]}`
   }
    console.log(displayZipCode(student))
    //2.
    function updateAge(newAge){
        student.age = newAge;
        return student.age;  
    }
    console.log(updateAge(23));

    module.exports = {displayName,displaySecondName,displayZipCode,updateAge,addNewGPA_value,getDetails}
   // Add a new property GPA with a value of 3.8. 
    function addNewGPA_value(student , value){
        student["GPA"] = value ; 
        return student["GPA"]
     }
        console.log(addNewGPA_value(student , 3.8));

// Add a method getDetails() that returns "John Doe is 23 years
// old and has a GPA of 3.8".
     function getDetails(student){
            return `${displayName(student)} is ${student["age"]} years old and has a GPA of ${student.GPA}`
     }
     console.log(getDetails(student))
    