function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function findLargest(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

function isPalindrome(str) {
  let s = str.toLowerCase();
  let reversed = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return s === reversed;
}

function filterEvenNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};