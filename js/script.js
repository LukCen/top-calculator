'use strict'

const btn = document.querySelectorAll('.btn')
const screen = document.querySelector('input')
screen.value = ''
const btnSpecial = document.querySelectorAll('.btn-special')
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
      case 'add':
        return this.num1 + this.num2
      case 'sub':
        return this.num1 - this.num2
      case 'mult':
        return this.num1 * this.num2
      case 'div':
        return parseFloat(this.num1 / this.num2).toFixed(2)
    }
  }

  store (container) {
    container.push([this.num1, this.num2, this.operation])
  }
}

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

const runApp = () => {

}

/**
 * add a check in the forEach loop
 * if button's class has 'btn-number' - assign it to num1 or num2, if num1 exists
 * if it has 'btn-special', assign the operator
 * if its result, return the result
 */
