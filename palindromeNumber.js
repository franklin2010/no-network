function palindromeNumber(number) {
  if (number < 0) {
    return false;
  }
 const original = number;
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return reversed === original;
}
console.log (palindromeNumber(20))
