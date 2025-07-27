function playGame(){
    let humanscore = 0
    let computerscore =0 

    function getComputerChoice(){
        const randomNum = Math.floor(Math.random()*3)
        if(randomNum === 0) return "rock"
        else if (randomNum === 1) return "paper"
        else
            return "scissors"

    }

    function getHumanChoice(){
        const choice = prompt("Enter rock, paper, scissors:")
        return choice.toLowerCase()

    }

    function playRound(humanChoice, computerChoice){
        const  human =  humanChoice.toLowerCase()
        const computer = computerChoice   
        
        if(human === computer)
            console.log("it's s tie!");

        else if (
            (human === "rock" && computer === "scissors") ||
            (human === "paper" && computer === "rock")||
            (human === "scissors" && computer === "paper")
        ){
        console.log(`You Win! ${human} beats ${computer}`);
        humanscore++
        
        }
        else{
            console.log(`You lose! ${computer} beats  ${human}`);
            computerscore++
            
        }

        console.log(`Score => You: ${humanscore}, Computer: ${computerscore}`);
        
            

    }

    for(i = 1 ; i <= 5 ; i++){
        console.log(`--- Round ${i}---`);
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    console.log("---Final Result---");

    if(humanscore > computerscore)
        console.log("you won the game");
    else if(humanscore < computerscore)
        console.log("computer won the game");
    else{
        console.log("its a draw");
        
    }
        
        
    

}

playGame()