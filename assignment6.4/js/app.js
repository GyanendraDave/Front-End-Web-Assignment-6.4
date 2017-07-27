// employees list

var employees = [
                    // employees 1
                    {
                     name: "Ashok", age: 30, salary: 20000,
                     address: { city: "Sayla", state: "Rajasthan", pincode: 343021}
                    },
    
                    // employees 2
                    {
                     name: "Ravi", age: 32, salary: 30000,
                     address: { city: "Ahmedabad", state: "Gujarat", pincode: 343022}
                    },
    
                    // employees 3
                    {
                     name: "Mukesh", age: 31, salary: 40000,
                     address: { city: "Patiyala", state: "Panjab", pincode: 343023}
                    },
    
                    // employees 4
                    {
                     name: "Rahul", age: 33, salary: 50000,
                     address: { city: "Kashi", state: "UP", pincode: 343024}
                    },
    
                    // employees 5
                    {
                     name: "John", age: 35, salary: 60000,
                     address: { city: "Bhopal", state: "MP", pincode: 343025}
                    }
];

// For loop
 for (var i = 0; 1 < employees.length;  i++)
     // cansole output
            console.log("Employee Name = " + employees[i].name + "," + " " + " Age:" + " " +employees[i].age + "," + " " + " Selery:" + " " +employees[i].salary + "," + " " + " Address:" + " " + " City - " + " "+ employees[i].address.city + "," + " " + " State -" + " " + employees[i].address.state + "," + " " + " Pincode -" + " " + employees[i].address.pincode);  // Output  



   