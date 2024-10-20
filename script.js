let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let msgContainer = document.getElementById("msg");



const genCompChoice = () =>{
    const options = ['paper','rock' ,'scissors'];
    const choiceIdx = Math.floor(Math.random() * 3); // Multiplying three to get a rand numb between 0 to 2
    return (options[choiceIdx]);
}


const drawGame = () =>{
    console.log("Draw Game !");
    msgContainer.innerText = "Draw Hui Gawa!!!";
}


const showWinner = (userWin) =>{
    if(userWin === true){
        console.log("wahh re sherr!!!");
        msgContainer.innerText = "Wahhh re Sherrr!!!";
        

    } else{
        console.log("hagg diss!")
        msgContainer.innerText = "Hagg Disss!!!"
    }

}

const playGame = (userChoice) =>{
    console.log("user choice is ", userChoice);
    const compChoice = genCompChoice();   
    console.log("comp choice is " , compChoice);

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
           userChoice = compChoice === "scissors" ? true : false;


        } else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;

        } else{
            // user ke pass sirf scissors baccha hai 
            // toh comp prr ho skta rock or paper
            userWin=compChoice === "rock" ? false : true;
        }

    showWinner(userWin);
    }

}; 




choices.forEach((choice) =>{
    choice.addEventListener('click' , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

        
    })
});



