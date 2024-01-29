// Create a function that takes a str as input and reverses it
function reverse(str) {
  if (!str || typeof str !== "string") return "Invalid input.";
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("Hello my name is Michael"));
console.log(reverse2("Hello my name is Michael"));
