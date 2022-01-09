const input = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

// O(n^3) time | O(1) space
function threeNumberSum(array = [], targetSum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const number1 = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (i == j) continue;
      const number2 = array[j];

      for (let k = j + 1; k < array.length; k++) {
        if (j == k || k === i) continue;
        const number3 = array[k];

        if (number1 + number2 + number3 === targetSum) {
          const values = [number1, number2, number3];
          result.push(values);
        }
      }
    }
  }
  return result;
}

console.log(threeNumberSum(input, targetSum));
