'use strict'

const btnNum = document.querySelectorAll('.btn-number')
let screen = document.querySelector('input')
screen.value = ''
const btnSpecial = document.querySelectorAll('.btn-special')

let pairOfNumbers = (num1, num2, operation) => {
  switch (operation) {
    case ('add'):
      return num1 + num2
    case ('sub'):
      return num1 - num2
    case ('mult'):
      return parseFloat(num1 / num2).toFixed(2)
  }
}

btnNum.forEach((button) => {
  button.addEventListener('click', () => {
    screen.value += button.textContent
  })
})