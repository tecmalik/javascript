const company ={
    name: "TechCorp" ,
    location: "San Francisco",
    employees: [
        employee1 = { 
             id: 1001,
            name : "kelvin",
            department : "HR"
        },
        employee2 = { 
            id: 1023,
           name : "shark",
           department : "Engineering"
       },
       employee2 = { 
        id: 1025,
       name : "micheal",
       department : "Marketing"
   }
    ]
} 

function getNameOfEmployee(idNumber,company){
    const name = ""
    for(const employees in company["employees"] ){
        if (employees["id"] == idNumber){
            name = employees[name]
        }
        
    }
      return newName 
}

console.log(getNameOfEmployee(idNumber,company))