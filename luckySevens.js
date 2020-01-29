function play() {
    validateItems();
    
    var bet = document.forms["betting"]["startingBet"].value;
    var startingBet = bet;
    var highestAmount = bet;
    var totalRolls = 0;
    var highestAmountRoll = 0;
    while (bet > 0){
        // console.log(bet);
        var dice1 = rollDice();
        var dice2 = rollDice();
        totalRolls++;
        if ( dice1 + dice2 == 7){
            bet = addFour(bet);
            if (bet > highestAmount){
                highestAmount = bet;
                highestAmountRoll = totalRolls;
            }
        }
        else {
            bet--;
        }
    }
    displayResultTable(startingBet, totalRolls, highestAmount, highestAmountRoll);
    return false;
    
} 
function addFour(num){
    return Number(num) + 4;
}


function validateItems() {
    var bet = document.forms["betting"]["startingBet"].value;
    if (bet == "" || bet == 0 || bet < 0 || isNaN(bet)){
        alert("Starting Bet can't be less or equal to 0.");
        document.forms["betting"]["startingBet"].parentElement.className = "form-group has-error";
        document.forms["betting"]["startingBet"].focus();
        return false;
    }
}

function rollDice() {
    return Math.ceil(Math.random() * (6));
}


function displayResultTable(startingBet, totalRolls, highestAmount, highestAmountRoll){
    document.getElementById("resultTable").style.display = "block";
    document.getElementById("resultHeading").innerText = "Results";
    document.getElementById("resultStartingBet").innerText = startingBet;
    document.getElementById("resultRollsBeforeBroke").innerText = totalRolls;
    document.getElementById("resultHighestWon").innerText = highestAmount;
    document.getElementById("resultRollsHighestAmount").innerText = highestAmountRoll;
}