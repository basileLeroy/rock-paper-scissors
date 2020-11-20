(function() {
   // Those const/let variables have to be outside of the function.
     
   const options = ['rock', 'paper', 'scissors'];
   
   // querySelector() enables you to select all types of documents (classes, id's, etx ...) / works like css syntax
   const pRock = document.querySelector('.rock');              
   const pPaper = document.querySelector('.paper');
   const pScissors = document.querySelector('.scissors');

   const play = document.querySelector('.play');

   // Adding minimum score (=1)
   let pcNum = 1;
   let playerNum = 1;

   // empty, to be able to fill in later with the player's choice
   let playerPick = "";                                        
   let result = "";

   // The score that is displayed for both parties
   let pcScoreboard = "";
   let playerScoreboard = "";

   
   
   
   // Adding a button listener for each option (rock paper scissors) setting a variable for playerPick according to the choice
   // Adding the computerPick as const in each button
   pRock.addEventListener("click", function() {                
      playerPick = 'rock';
   })

   pPaper.addEventListener("click", function() {
      playerPick = 'paper';
   })

   pScissors.addEventListener("click", function() {
      playerPick = 'scissors';
   })


   play.addEventListener("click", function() {
      let randomSelector = Math.floor(Math.random() * 3);  
      const computerPick = options[randomSelector];
      
      // === because the variable is exactly the same
      if (playerPick === 'rock') {
         // == because the value is the same but not the the exact same variable
         if (computerPick == 'paper') {
            result = "You Lost!";
         }
         if (computerPick == 'rock') {
            result = "DRAW!";
         }
         if (computerPick == 'scissors') {
            result = "You Won!";
         }
         //console.log(playerPick);
         //console.log(computerPick);
         //console.log(result); 
      };
   
      if (playerPick === 'paper') {
         if (computerPick == 'paper') {
            result = "DRAW!";
         }
         if (computerPick == 'rock') {
            result = "You Won!";
         }
         if (computerPick == 'scissors') {
            result = "You Lost!";
         }
         //console.log(playerPick);
         //console.log(computerPick);
         //console.log(result); 
      };
   
      if (playerPick === 'scissors') {
         if (computerPick == 'paper') {
            result = "You Won!";
         }
         if (computerPick == 'rock') {
            result = "You Lost!";
         }
         if (computerPick == 'scissors') {
            result = "DRAW!";
         }
         //console.log(playerPick);
         //console.log(computerPick);
         //console.log(result);
         
      };


      
      document.querySelector('.answer').innerHTML = computerPick;
      document.querySelector('.result').innerHTML = result;


      // if statement that tells the score when you win or when you lose -- losing will result in the computer score adding up
      if (result == "You Won!") {
         playerScoreboard = playerNum++
      };

      if (result == "You Lost!") {
         pcScoreboard = pcNum++
      }
      document.querySelector('.playerScore').innerHTML = playerScoreboard;
      document.querySelector('.computerScore').innerHTML = pcScoreboard;
      
   })
   
   

   
})();