module.exports = (playerOne, playerTwo) => {
  const rock = '🗿'
  const paper = '📄'
  const scissors = '✂'
  if (playerOne.move === playerTwo.move) {
    return null
  } else if (playerOne.move === rock && playerTwo.move === paper) {
    return playerTwo
  } else if (playerOne.move === rock && playerTwo.move === scissors) {
    return playerOne
  } else if (playerOne.move === paper && playerTwo.move === scissors) {
    return playerTwo
  } else if (playerOne.move === paper && playerTwo.move === rock) {
    return playerOne
  } else if (playerOne.move === scissors && playerTwo.move === rock) {
    return playerTwo
  } else if (playerOne.move === scissors && playerTwo.move === paper) {
    return playerOne
  } else {
    return undefined
  }
}
