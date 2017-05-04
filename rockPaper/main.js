myfn();

function myfn(){
    var userChoice = prompt("Do you choose rock, paper or scissors?");
        userChoice = userChoice.toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
      var computerChoice = Math.random();
    } else{
      myfn();
    }
    
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    compare(userChoice, computerChoice);
}



function compare(choice1, choice2){
    if(choice1 === choice2){
        console.log("The game was a tie");
        alert("The game was a tie");
        myfn();
    } else if(choice1 === "rock"){
        if(choice2 === "scissors"){
            console.log("You: " + "rock wins");
            document.write("You: " + "rock wins");
            return "You: " + "rock wins";
        } else{
            console.log("Comp: "+"paper wins");
            document.write("Comp: "+"paper wins"); 
            return "Comp: "+"paper wins";    
        }
    } else if(choice1 === "paper"){
        if(choice2 === "rock"){
            console.log("You: "+"paper wins");
            document.write("You: "+"paper wins");
            return "You: "+"paper wins";
        } else{
            console.log("Comp: "+"scissors wins");
            document.write("Comp: "+"scissors wins"); 
            return "Comp: "+"scissors wins";    
        }
    }  else if(choice1 === "scissors") {
        if(choice2 === "paper"){
            console.log("You: "+"scissors wins");
            document.write("You: "+"scissors wins"); 
            return "You: "+"scissors wins";   
        } else{
            console.log("Comp: "+"rock wins");
            document.write("Comp: "+"rock wins");
            return "Comp: "+"rock wins";    
        }
    }
};