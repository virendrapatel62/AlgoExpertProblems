const input = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;

function threeNumberSum(array = [], targetSum) {
  array.sort((a, b) => a - b);
  console.log(array.toString());
  const results = [];

  for (let index = 0; index < array.length; index++) {
    let left = index + 1;
    right = array.length - 1;

    const firstNumber = array[index];
    while (left < right) {
      const secondNumber = array[left];
      const thirdNumber = array[right];
      const sum = secondNumber + thirdNumber + firstNumber;
      console.log([firstNumber, secondNumber, thirdNumber]);
      if (sum > targetSum) {
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        results.push([firstNumber, secondNumber, thirdNumber]);
        right--;
        left++;
      }
    }
  }

  return results;
}

console.log(threeNumberSum(input, targetSum));
