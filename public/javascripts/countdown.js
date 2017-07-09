let countdown = document.querySelectorAll('h2[data-behavior=countdown]')[0]
let movePicker = document.querySelectorAll('form[data-behavior=movePicker]')[0]
let buttons = document.querySelectorAll('div[data-behavior=buttons]')[0]
let result = document.querySelectorAll('div[data-behavior=result]')[0]

function startGame () {
  countdown.style.display = 'initial'
  buttons.style.display = 'none'
  result.style.display = 'none'
  setTimeout(() => { countdown.innerHTML = '2' }, 1000)
  setTimeout(() => { countdown.innerHTML = '1' }, 2000)
  setTimeout(() => { countdown.style.display = 'none' }, 3000)
  setTimeout(() => { movePicker.style.display = 'initial' }, 3000)
}
