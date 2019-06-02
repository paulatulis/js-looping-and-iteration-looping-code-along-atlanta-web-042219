// Code your solutions in this file
const recipients = ["Ada", "Brendan", "Ali"];
const occasion = ["birthday"];

function writeCards(recipients, occasion) {
  let cards = []
  for (let i = 0; i < recipients.length; i++) {
    cards.push (`Thank you, ${recipients[i]}, for the wonderful ${occasion} gift!`);
  }

return cards
}

const number = 10
function countdown(number){
  while (number > 0) {
    console.log(number);
    number-= 1;
}
return console.log(number)
}
