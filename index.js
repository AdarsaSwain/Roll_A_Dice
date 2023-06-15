const btn = document.querySelector('#roll-button');
const dice = document.querySelector('.dice');
console.log(dice, btn);
const history = document.querySelector("#roll-history")

console.log(display_history);
const previousdata = [];
//dice to roll

//logic bheind the math.random 
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). For example, it might generate 0.539789932.

// Math.random() * 6 multiplies the random decimal number by 6, giving you a random decimal number between 0 (inclusive) and 6 (exclusive). For example, it might become 3.238739592.

// Math.floor() rounds down the random decimal number to the nearest whole number. For example, if the previous value was 3.238739592, it becomes 3.

// Finally, Math.floor(Math.random() * 6) + 1 adds 1 to the rounded down number, giving you an integer between 1 and 6 (inclusive). For example, if the previous value was 3, adding 1 gives you 4.


const rollDice = () =>{
    const diceRoll  = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
    const diceface = roll(diceRoll);
   dice.innerHTML = diceface;
   roll_history(diceRoll);
}

const roll = (diceRoll) => {

      
    switch (diceRoll) {

        case 1:
            return '&#9856';
            
        case 2 :
            return '&#9857';
        case 3 :
            return '&#9858' ;
        case 4:
            return '&#9859' ;
        case 5:
            return '&#9860' ;
            default:
                return '&#9860';
    }
}
//history of the rolls


const roll_history = (diceRoll) => {
    if (diceRoll) {
      previousdata.push(diceRoll);
  
      history.innerHTML = ''; // Clear the history before updating
  
      for (let i = 0; i < previousdata.length; i++) {
        const display_history = document.createElement('li');
        display_history.innerHTML = `Roll ${i + 1}: <span>${roll(previousdata[i])}</span>`;
        history.appendChild(display_history);
      }
    }
  }
  
//btn to mange all the rolls
btn.addEventListener('click',rollDice);