(function() {

    document.getElementById("rps-game");

    const pcResult = Math.floor(Math.random() * 3);
    const pcPlay = ["rock", "paper", "scissors"];
    const playerChoice = document.getElementById("playerChoice");



   
        
   console.log(playerChoice);

    
})();




// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------

   // option for computer
   function getOptionComputer (){
    const comp = Math.random();

    if( comp < 0.34 )return'rock'; //if we used return they will stop and comeback to next value
    if( comp >= 0.34 && comp < 0.67 ) return 'scissors';
    return 'hand';
    

   }
//adding rules in games  for getting the result (i choose return insted of else  )
function  getResult(comp, player){
     //i dont need var result cause i need return  
    if( player == comp )return 'draw!';
    if( player == 'rock' ) return ( comp == 'scissors' ) ? ' YOU WIN !' 
    : ' YOU LOSE'; //i used this (:) IS mean apart from that
    
    if( player == 'scissors' ) return( comp == 'rock' ) ? ' YOU LOSE ' 
    : 'YOU WIN!';
    
    if( player == 'hand' ) return ( comp == 'scissors' ) ? 'YOU LOSE! ' 
    : 'YOU WIN!';
    
   
}
 
// so i make  this rock button works by clicking and i used document.querySelector to call my class
    const pRock = document.querySelector (".rock");
    pRock.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pRock.className //is calling class name from html
    const result = getResult(optionComputer , optionPlayer);
   
    //console.log('comp :' + optionComputer);
   //console.log('player :' + optionPlayer);
   //console.log('anwser' : + result);

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png'); //i used this set attribute for change a picture for computer 
   //bycalling class numbur and (img/  )is because i put my image in folder img

   const info = document.querySelector('.info');
   info.innerHTML = result;

   

});

// so i make  this 2nd button for scissors
    const pscissors = document.querySelector (".scissors");
    pscissors.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = pscissors.className
    const result = getResult(optionComputer , optionPlayer)

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;

})
    // and the last i make  this  button for hands

    const phand = document.querySelector (".hand");
    phand.addEventListener('click', function(){
    const optionComputer = getOptionComputer();
    const optionPlayer = phand.className
    const result = getResult(optionComputer , optionPlayer)

   const imgComputer = document.querySelector(".img-komputer");
   imgComputer.setAttribute('src' ,'img/' + optionComputer + '.png');

   const info = document.querySelector('.info');
   info.innerHTML = result;


}) 
   
// for 3 button i choose to make it one by one 