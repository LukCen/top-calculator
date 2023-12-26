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
  let result = null
  btn.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-number')) {
        if (screen.value === '' || operator === null) {
          screen.value += button.innerText
          firstNum += button.innerText
        } else {
          
          screen.value += button.innerText
          secondNum += button.innerText
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
            result = add(parseInt(firstNum), parseInt(secondNum))
            break
          case '-':
            result = subtract(parseInt(firstNum), parseInt(secondNum))
            break
          case '*':
            result = multiply(parseInt(firstNum), parseInt(secondNum))
            break
          case '/':
            result = divide(parseFloat(firstNum), parseFloat(secondNum))
            break
        }
        firstNum = result
        screen.value = result
        secondNum = 0

      }
    })
  })
}

runApp()
