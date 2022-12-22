// Example 1: Create a simple object (with properties/methods)

let employee = {
    // Properties
    name: "Tushar",
    dept: "Computer Science",
    salary: 50000,

    // Methods
    getDetails: function (){
        return this.name + " | " + this.dept + " | " + this.salary
    },
    getSalary: function(){
        return this.salary
    }
}

// console.log(employee)
// console.log('Name: ' + employee.name)
// console.log('Dept: ' + employee.dept)
// console.log('Salary: ' + employee.salary)

// console.log(employee.getDetails())
// console.log(employee.getSalary())


// Example 2: Add/Remove => Properties/Methods
let book = {
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 599,
    getDetails: function() {
        return "Title: " + this.title 
        + " Author: " + this.author
        + " Price: " + this.price
    }
}

//console.log(book.getDetails())
//console.log(book.price)

// Add a new property
//console.log(book.publication) // undefined
book.publication = "Penguin Random House"
book.year = 2018

//console.log(book)

// Add a new method
book.printToConsole = function() {
    console.log( this.title + " by " + this.author + " is published by " + this.publication)
}

//book.printToConsole()

book.printHello = function() {
    console.log("Hello")
}
//book.printHello()

// Remove a property
delete book.year

// Remove a method
delete book.printHello

// Remove few more things
delete book.title
delete book.printToConsole
delete book.getDetails
delete book.publication

// Example 3: Nested objects
let student = {
    roll: 101,
    name: "Raj",
    email: "raj101@gmail.com",
    address : {
        street : "FC Road",
        city: "Pune",
        pincode: 411005,
        state: "Maharashtra",
        printCode: function(){
            console.log('Pin code ' + this.pincode)
        }
    },
    printAddress: function() {
        
    }
}

// console.log(student.roll)
// console.log(student.name)
// console.log(student.email)
// console.log(student.address)
// console.log(student.address.street)
// console.log(student.address.city)
// console.log(student.address.pincode)
// console.log(student.address.state)
console.log(student.address.printCode())
