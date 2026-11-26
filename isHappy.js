function isHappy(number){
	for (counter = 1; counter<=20; counter++){
	number = String(number)
	sum = 0;
	for (digit of number){
		digit = Number(digit);
		square = digit * digit;
		sum = sum + square;
	}
	if (sum === 1){
		return true;
	}
	number = sum;
	}
	return false;
	
}

result = isHappy(2);
console.log(result)
