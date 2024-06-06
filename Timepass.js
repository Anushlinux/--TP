function getComputerchoice()
{
    let randomNum = Math.floor(Math.random() * 3);
    return selectionArray[randomNum];
}

const selectionArray = ["Paper", "Rock", "Scissors"];

function getHumanchoice()
{
    let userChoice = prompt("Enter choice \nType: 'Paper', 'Rock', 'Scissors'\n Hit 'Cancel' to exit");
    let arraytoLowercase = selectionArray.map(item => item.toLowerCase());   
    if (userChoice != undefined)
    {
        if (arraytoLowercase.includes(userChoice.toLowerCase()))
        {
            return userChoice;
        }
    }
    else if (userChoice == " ")
    {
        alert("Enter something stupid")
        return humanChoice;
    }
    else
    {
        alert("Given shit is undefined")
        return humanChoice;
    }

}

function playRound(humanChoice, computerChoice)
{
    let winMsg = "You win nigga: ";
    let loseMsg = "You lost nigga: ";

    switch (humanChoice)
    {
        case 'Rock':
            if (computerChoice == 'Paper')
            {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                return false;
            }
            else if (computerChoice == "Scissors")
            {
                alert(winMsg + `${humanChoice} beats ${humanChoice}`);
                return true;
            }
            else
            {
                alert(`Its a tie as both ${computerChoice} and ${humanChoice} chose the same`);
                return undefined;
            }

        case 'Scissors':
            if (computerChoice == 'Rock') {
                alert(loseMsg + `${computerChoice} beats ${humanChoice}`);
                return false;
            } else if (computerChoice == 'Paper') {
                alert(winMsg + `${humanChoice} beats ${computerChoice}`);
                return true;
            } else {
                alert(`It's a tie! You selected ${humanChoice} and the computer selected ${computerChoice}`);
                return undefined;
            }
        
        case 'Paper':
            if (computerChoice == 'Rock')
            {
                alert(loseMsg + `${humanChoice} bears ${computerChoice}`);
                return false;
            }
            else if (computerChoice == 'Scissors')
            {
                alert(winMsg + `${computerChoice} beats ${humanChoice}`);
                return true;
            }
            else
            {
                alert(`Its a fkin tie between ${computerChoice} and ${humanChoice}`);
                return undefined;
            }

    }
}

function playGame() 
{
    let humanScore = 0;
    let computerScore = 0;
    let isTies = 0;

    for (let i = 1; i < 6; i++)
    {
        let humanScore = getHumanchoice();
        let computerScore = getComputerchoice();
        
        let gameWinner = playRound(humanScore, computerScore);
        if (gameWinner != undefined)
        {
            gameWinner ? humanScore++ : computerScore++;
        }
        else
        {
            isTies++;
        }
        
    }
    console.log(`Final Score: ${humanScore}, ${computerScore} | Ties: ${isTies} `);

}

playGame();


// function getComputerChoice() {
//   let randomNumber = Math.floor(Math.random() * 3);
//   return selectionArray[randomNumber];
// }

// function getHumanChoice() {
//   let userChoice = prompt(
//     "Enter Choice \nType: 'Paper', 'Rock', or 'Scissors' \nOr hit 'Cancel' to exit. "
//   );
//   let arrayToLowerCase = selectionArray.map((item) => item.toLowerCase());
//   if (userChoice != undefined) {
//     if (arrayToLowerCase.includes(userChoice.toLowerCase())) {
//       return userChoice;
//     } else if (userChoice == "") {
//       alert("Field left blank.");
//       return humanChoice;
//     } else {
//       alert("Word not recognized. Check spelling and try again.");
//       return humanChoice;
//     }
//   }
// }
