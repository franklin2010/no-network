function hammingWeight(number) {
  let count = 0;
  while (number > 0) {
    count += number % 2;               
    number = Math.floor(number / 2);  
  return count;
}
}
console.log (hammingWeight(24))
