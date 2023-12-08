'use strict'

const btn = document.querySelectorAll('.btn')
const screen = document.querySelector('input')
screen.value = ''

const calculationsStorage = []
let currentInput = ''

class Calculation {
  constructor (num1, num2, operation) {
    this.num1 = num1
    this.num2 = num2
    this.operation = operation
  }

  getParam (param) {
    return param
  }

  setParam (param, newValue) {
    this.param = newValue
  }

  calc () {
    switch (this.operation) {
      case '+':
        return parseFloat(this.num1 + this.num2).toFixed(2)
      case '-':
        return parseFloat(this.num1 - this.num2).toFixed(2)
      case '*':
        return parseFloat(this.num1 * this.num2).toFixed(2)
      case '/':
        return parseFloat(this.num1 / this.num2).toFixed(2)
    }
  }

  store (container) {
    container.push([this.num1, this.num2, this.operation])
  }
}

const runApp = () => {
  btn.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-number')) {
        currentInput += button.textContent
        screen.value = currentInput
      } else if (button.classList.contains('btn-special')) {
        currentInput += ` ${button.textContent} `
        screen.value = currentInput
      }
    })
  })

  document.querySelector('#result').addEventListener('click', () => {
    if (currentInput.trim() !== '') {
      const parts = currentInput.split(' ')
      const num1 = parseFloat(parts[0])
      const num2 = parseFloat(parts[2])
      const operation = parts[1]

      if (!isNaN(num1) && !isNaN(num2) && operation) {
        const newCalculation = new Calculation(num1, num2, operation)
        const finalResult = newCalculation.calc()
        screen.value = finalResult
        currentInput = finalResult
      } else {
        alert('Invalid input')
      }
    }
  })
}

runApp()

/**
 * add a check in the forEach loop
 * if button's class has 'btn-number' - assign it to num1 or num2, if num1 exists
 * if it has 'btn-special', assign the operator
 * if its result, return the result
 */
