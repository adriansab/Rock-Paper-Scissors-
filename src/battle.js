function compareChoices(player1Choice, player2Choice, player1Name) {
  if (player1Choice === player2Choice) {
    return "tie";
  } else if (player1Choice === "rock" && player2Choice === "scissors") {
    return player1Name;
  } else if (player1Choice === "paper" && player2Choice === "rock") {
    return player1Name;
  } else if (player1Choice === "scissors" && player2Choice === "paper") {
    return player1Name;
  } else {
    return player1Name;
  }
}

export default compareChoices;