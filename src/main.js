function sum(num1, num2) {
	return num1 + num2
}

function sub(num1, num2) {
	return num1 - num2
}

function multi(number, multiplicator) {
	return number * multiplicator
}

function div(number, divisor) {
	return (divisor === 0) ? 'Não é possível divisão por zero!' : number / divisor
}

export {
	sum,
	sub,
	multi,
	div,
}
