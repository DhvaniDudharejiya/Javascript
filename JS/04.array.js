let numbers = [10,20,30,40,50];
console.log(numbers)
console.log(numbers.length);


let a = numbers.slice(3);
console.log(a)


let nos = [4, 9, 16, 25];
nos.map(Math.sqrt);
console.log(nos)

// shift remove first element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)

//  splice() method adds new elements to an array
fruits.splice(2,0,"Lemon"); //2 is defines the position & 0 defines how many elements should be removed.
console.log(fruits)
