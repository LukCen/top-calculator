'use strict'

const btnNum = document.querySelectorAll('.btn-number')
let screen = document.querySelector('input')
screen.value = ''
const btnSpecial = document.querySelectorAll('.btn-special')

// let pairOfNumbers = (num1, num2, operation) => {
//   switch (operation) {
//     case ('add'):
//       return num1 + num2
//     case ('sub'):
//       return num1 - num2
//     case ('mult'):
//       return parseFloat(num1 / num2).toFixed(2)
//   }
// }

class Calculation {
  constructor() {
    this.num1 = num1;
    this.num2 = num2;
    this.operation = operation
  }

  calc(){
    switch(operation) {
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
}

btnNum.forEach((button) => {
  button.addEventListener('click', () => {
    screen.value += button.textContent
  })
})

const runApp = () => {
  const run = new Calculation()

}

/**
 * add a check in the forEach loop
 * if button's class has 'btn-number' - assign it to num1 or num2, if num1 exists
 * if it has 'btn-special', assign the operator
 * if its result, return the result
 */