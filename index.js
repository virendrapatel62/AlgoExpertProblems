const array = [-30, -3, 1, 9, 22, 30];

const task = (array = []) => {
  let leftIndex = 0,
    rightIndex = array.length - 1;
  currentIndex = array.length - 1;
  const result = [];

  while (leftIndex <= rightIndex) {
    const leftNumber = Math.abs(array[leftIndex]);
    const rightNumber = Math.abs(array[rightIndex]);

    if (leftNumber < rightNumber) {
      result[currentIndex] = rightNumber ** 2;
      rightIndex--;
    } else {
      result[currentIndex] = leftNumber ** 2;
      leftIndex++;
    }
    currentIndex--;
  }
  return result;
};

console.log(task(array));
