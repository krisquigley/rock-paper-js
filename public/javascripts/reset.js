function reset () {
  document.querySelectorAll('input[name=playerOneTotalScore]')[0].value = 0
  document.querySelectorAll('input[name=playerTwoTotalScore]')[0].value = 0
  calculateScores()
}
