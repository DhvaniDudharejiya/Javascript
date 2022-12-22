
// Example 1: while loop
function whileDemo() {
    let count = 1
    while (count <= 5) {
        console.log("Number (using while) " + count)
        count = count + 1
    }
}


// Example 2: do while loop
// This loop will allow the first entry free (without condition checking)
function doWhileDemo() {
    let c = 1
    do {
        console.log("Number (using do while) " + c)
        c++;
    } while (c <= 5)
}

// Example 3: for loop
function forDemo() {
    for (let cnt = 1; cnt <= 5; cnt++) {
        console.log("Number (using for) " + cnt)
    }

    // There are other variations of for loop
    // for in
    // for of
    // .forEach()
    // Refer to 06-Arrays.js file for demos
}

// Example 4: Loop using user input
function userInputDemo() {
    let no = prompt("Enter a number", 0)
    console.log(typeof no)
    no = Number(no)
    console.log(typeof no)
    for (let cnt = 1; cnt <= no; cnt++) {
        console.log("Number (using for) " + cnt)
    }
}

// Example 5: break statement
function breakDemo() {
    let arr = [10, 50, 70, -5, 99, 100]

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < 0) {
            break
        }
        console.log(arr[x])
    }
    console.log('Processing complete.')
}

// Example 6: continue statement
function continueDemo() {
    let arr = [10, 50, 70, -5, 99, 100]

    for (let x = 0; x < arr.length; x++) {
        if (arr[x] < 0 ) {
            continue
        }
        console.log(arr[x])
    }
    console.log('Processing complete.')
}


whileDemo()
doWhileDemo()
forDemo()
userInputDemo()
breakDemo()
continueDemo()