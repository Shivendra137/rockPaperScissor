
let userScore = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg  = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) =>{

     

     choice.addEventListener("click" , ()=> {
           
        const userChoice= choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);

        playGame(userChoice);

     });

});


const playGame  = (userChoice) => {

  console.log("user choice is = " , userChoice);

  //Generate comp choice 
  const compChoice =genCompChoice();
  console.log("comp choice is = " , compChoice);

   if (userChoice===compChoice) {

     //Draw Game
     drawGame();
   }

   else {

    let userWin = true;
    
    if(userChoice === "rock" ){
        
        userWin = compChoice ==="paper" ? false : true;
    }

    else if(userChoice ==="scissor"){

        userWin= compChoice==="rock" ? false : true;
    }

    else {

        userWin= compChoice==="scissor" ? false : true;
    }

    showWinner(userWin , userChoice, compChoice);
   }

};userScorePara


  const showWinner=(userWin, userChoice, compChoice) => {

      if(userWin) {

        userScore++;
        userScorePara.innerText = userScore;

        console.log( 
              "you win"
        );
        msg.innerText =`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
      }

      else{
        compScore++;
        compScorePara.innerText = compScore;
 
        console.log("you lose");
        msg.innerText =`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
      }
  };

  const drawGame=() =>{

      console.log("game was draw.");
      msg.innerText ="draw! Play again";
      msg.style.backgroundColor="grey";

  };
   


 const genCompChoice = () => {

     const options = ["rock" , "paper"  , "scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];

 };
