function climbStairs(totalSteps) {
  if (totalSteps <= 2) {
    return totalSteps;
  }
  let previous = 1;
  let current = 2; 
  for (let step = 3; step <= totalSteps; step++) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}
console.log (climbStairs(5))
