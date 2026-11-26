function reverseInteger(number){
if (number > 0){
reverseNumber = 0
	while (number > 0) {
		lastDigit = number % 10
		reverseNumber = (reverseNumber * 10) + lastDigit
		number = Math.floor(number / 10)
	}
	}
	else {
	   lastDigit = (number % 10)
	    reverse = lastDigit
	    number = Math.floor(number / -10)
	    while (number > 0) {
		lastDigit = number % 10
		reverseNumber = (reverseNumber * 10) - lastDigit
		number = Math.floor(number / 10)
	}
	}
	return reverseNumber
}

console.log (reverseInteger(1234))