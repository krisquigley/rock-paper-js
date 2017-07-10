function reset () {
  document.querySelectorAll('input[name=playerOneTotalScore]')[0].value = 0
  document.querySelectorAll('input[name=playerTwoTotalScore]')[0].value = 0
  document.querySelectorAll('div[data-behavior=result]')[0].style.display = 'none'
  document.querySelectorAll('div[data-behavior=moves]')[0].style.display = 'none'
  calculateScores()
}
