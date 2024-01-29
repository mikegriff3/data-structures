//Given an array, return the first recurring character
function firstRecurring(array) {
  if (array.constructor !== Array) return "Invalid input.";
  const chars = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in chars) {
      return array[i];
    } else {
      chars[array[i]] = true;
    }
  }
  return "No recurring characters.";
}

console.log(firstRecurring([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurring([9, 31, 44, 66, 69, 70, 70]));
console.log(firstRecurring([]));
console.log(firstRecurring([1, 2, 3, 4]));
console.log(firstRecurring(2));
