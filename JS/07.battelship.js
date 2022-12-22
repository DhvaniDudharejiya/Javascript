function startGame() {
    console.log("Game started...")

    const locations = [0, 1, 1, 0, 1]
    let guessCount = 0
    let hitCount = 0

    while (hitCount != 3) {

        // Accept a choice from user
        const choice = Number(prompt("Enter a number (1-5)"))

        guessCount++; // Increment the guess count when user enters a valid choice

        // Alert for invalid numbers
        if (choice < 0 || choice > 5){
            alert('Enter a valid choice!')
            continue
        }

        // Check if the value in array matches the choice from user
        switch(locations[choice - 1]){
            case 1:
                    alert('You have hit a battleship !!')
                    hitCount++
                    locations[choice - 1] = 2
                    break
            case 2:
                    alert('You have already hit this battleship')
                    break
            default:
                    alert('You missed the battleship')

        }

    }

    alert('Total Guesses: ' + guessCount)
}