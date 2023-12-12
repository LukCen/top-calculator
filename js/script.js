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

const runApp = () => {
  let firstNum = 0
  let secondNum = 0
  let operator = null
  let result = 0
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
      if (button.classList.contains('btn-special')) {
        screen.value += button.innerText
        switch (button.id) {
          case 'add':
            operator = '+'
            break
          case 'sub':
            operator = '-'
            break
          case 'mult':
            operator = '*'
            break
          case 'div':
            operator = '/'
            break
        }
      }
      if (button.id === 'result') {
        switch (operator) {
          case '+':
            result = add(firstNum, secondNum)
            break
          case '-':
            result = subtract(firstNum, secondNum)
            break
          case '*':
            result = multiply(firstNum, secondNum)
            break
          case '/':
            result = divide(firstNum, secondNum)
            break
        }
        console.log(result)
        screen.value = result
      }
    })
  })
}

runApp()
