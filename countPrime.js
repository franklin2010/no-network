function countPrime(upperLimit){
	let counter = 0;
	for (let number = 1; number <= upperLimit; number++){
		for(let number1 = 1; number1 <= number; number1++){
			if(number % number1 !== 0){
			counter += 1
			}
		}
	}
	return count;
}
console.log(countPrime(15));