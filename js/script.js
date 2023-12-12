'use strict'

const btn = document.querySelectorAll('.btn')
const screen = document.querySelector('input')
screen.value = ''
const add = (a, b) => {
  return a + b
}

const subtract = (a, b) => {
  return a - b
}

const multiply = (a, b) => {
  return a * b
}

const divide = (a, b) => {
  return parseFloat(a / b).toFixed(2)
}
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      add(a, b)
      break
    case '-':
      subtract(a, b)
  }
}

const runApp = () => {
  let firstNum = 0
  let secondNum = 0
  // let operator = null
  btn.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-number')) {
        if (screen.value === '') {
          firstNum = parseInt(button.innerText)
          screen.value += button.innerText
        } else {
          secondNum = parseInt(button.innerText)
          screen.value += button.innerText
        }
      }
      console.log(`FIRST : ${firstNum} | SECOND: ${secondNum}`)
    })
  })
}

runApp()
