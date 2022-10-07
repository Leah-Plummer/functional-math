const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const multiplyByTwo = (multiplier) => {
    const quotient = multiplier * 2
    return quotient
}

const returnedSum = add(2,7)
const returnedQuotient = multiplyByTwo(returnedSum)
console.log(returnedQuotient)
