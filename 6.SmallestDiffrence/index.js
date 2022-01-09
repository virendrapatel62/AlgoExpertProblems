const input1 = [-1, 5, 10, 20, 28, 3];
const input2 = [26, 134, 135, 15, 17];

// O(n^2) Time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  let smallestDiff = Infinity;
  let numbers = [];
  for (const number1 of arrayOne) {
    for (const number2 of arrayTwo) {
      const diff = Math.abs(number1 - number2);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        numbers = [number1, number2];
      }
    }
  }

  return numbers;
}

console.log(smallestDifference(input1, input2), [28, 26]);
