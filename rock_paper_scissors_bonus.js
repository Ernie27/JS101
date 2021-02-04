const readline = require('readline-sync');
const VALID_CHOICES = [['rock', 'paper', 'scissors', 'spock', 'lizard'],['r', 'p', 's', 'sp', 'l']];
const MESSAGE_EXAMPLES = "Enter word or leter: (r)rock (p)paper (s)scissors (l)lizard (sp)spock.";
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function determineWinner(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (determineWinner(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {

  prompt("Welcome! Let's play, first to 5 wins.");

  let playerScore = 0;
  let computerScore = 0;

  while (true) {
    prompt(`${MESSAGE_EXAMPLES}`);
    let choice = readline.question().toLowerCase();

    while (!(VALID_CHOICES[0].includes(choice) ||
          VALID_CHOICES[1].includes(choice))) {
      prompt(`That's not a valid choice.\n${MESSAGE_EXAMPLES}.`);
      choice = readline.question().toLowerCase();
    }

    switch (choice) {
      case 'r': choice = 'rock';
        break;
      case 'p': choice = 'paper';
        break;
      case 's': choice = 'scissors';
        break;
      case 'sp': choice = 'spock';
        break;
      case 'l': choice = 'lizard';
        break;
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES[0].length);
    let computerChoice = VALID_CHOICES[0][randomIndex];

    displayWinner(choice, computerChoice);

    if (determineWinner(choice, computerChoice)) {
      playerScore += 1;
    } else if (determineWinner(computerChoice, choice)) {
      computerScore += 1;
    }

    prompt(`First to 5 wins: Player Score: ${playerScore} Computer Score: ${computerScore}.`);

    if (playerScore === 5) {
      prompt('You are the grand winner, thanks for playing!');
      break;
    } else if (computerScore === 5) {
      prompt('You are the grand looser, thanks for playing!');
      break;
    }
  }

  prompt('Do you want to play again (y/n?)');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  console.clear();
  if (answer[0] !== 'y') break;
}