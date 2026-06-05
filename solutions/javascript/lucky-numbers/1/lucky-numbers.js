// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const n1 = array1.join("")
  const n2 = array2.join("")
  const valor1 = Number(n1)
  const valor2 = Number(n2)
  return valor1 + valor2
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const texto = String(value)
  const valor = texto.split("")
  const reverter = valor.reverse()
  const juntar = reverter.join("")
  const n1 = Number(juntar)
  return value === n1
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

if(!input){
    return 'Required field'
  }
const numero = Number(input)
if(numero === 0 || Number.isNaN(numero)){
  return 'Must be a number besides 0'
}
  return ''
}