function calculateScores () {
  let playerTwoTotalScore = parseInt(document.querySelectorAll('input[name=playerTwoTotalScore]')[0].value)
  let playerOneTotalScore = parseInt(document.querySelectorAll('input[name=playerOneTotalScore]')[0].value)
  let playerOnePercentage = `${(((playerOneTotalScore / (playerOneTotalScore + playerTwoTotalScore)) || 0) * 100).toFixed(0)} %`
  let playerTwoPercentage = `${(((playerTwoTotalScore / (playerOneTotalScore + playerTwoTotalScore)) || 0) * 100).toFixed(0)} %`

  document.querySelectorAll('span[data-behavior=playerOnePercentage]')[0].innerHTML = playerOnePercentage
  document.querySelectorAll('span[data-behavior=playerOneTotalScore]')[0].innerHTML = playerOneTotalScore
  document.querySelectorAll('span[data-behavior=playerTwoPercentage]')[0].innerHTML = playerTwoPercentage
  document.querySelectorAll('span[data-behavior=playerTwoTotalScore]')[0].innerHTML = playerTwoTotalScore
}
calculateScores()

