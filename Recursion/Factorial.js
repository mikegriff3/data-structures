function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let counter = number;
  let answer = number;
  while (counter > 1) {
    answer = answer * (counter - 1);
    counter--;
  }
  return answer;
}

//console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
