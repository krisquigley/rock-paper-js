let countdown = document.querySelectorAll('h2[data-behavior=countdown]')[0]
let movePicker = document.querySelectorAll('form[data-behavior=movePicker]')[0]
let start = document.querySelectorAll('button[data-behavior=start]')[0]
let results = document.querySelectorAll('div[data-behavior=results]')[0]

function startGame () {
  countdown.style.display = 'initial'
  results.style.display = 'none'
  start.style.display = 'none'
  setTimeout(() => { countdown.innerHTML = '2' }, 1000)
  setTimeout(() => { countdown.innerHTML = '1' }, 2000)
  setTimeout(() => { countdown.style.display = 'none' }, 3000)
  setTimeout(() => { movePicker.style.display = 'initial' }, 3000)
}
