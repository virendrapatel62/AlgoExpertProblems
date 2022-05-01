const array = [2, 1, 2, 2, 2, 3, 4, 2];
const toMove = 2;

function moveElementToEnd0(array = [], toMove) {
  console.log(array.toString());
  const result = new Array(array.length).fill(0);
  let leftIndex = 0,
    rightIndex = array.length - 1;

  for (number of array) {
    if (number === toMove) {
      result[rightIndex] = number;
      rightIndex--;
    } else {
      result[leftIndex] = number;
      leftIndex++;
    }
  }
  return result;
}

function swap(array = [], from, to) {
  const temp = array[to];
  array[to] = array[from];
  array[from] = temp;
}

function moveElementToEnd(array = [], toMove) {
  console.log(array.toString());
  let leftIndex = 0,
    rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let number = array[leftIndex];
    let numberAtRight = array[rightIndex];

    if (number === toMove && number === numberAtRight) {
      rightIndex--;
    } else if (number === toMove) {
      swap(array, leftIndex, rightIndex);
      rightIndex--;
      leftIndex++;
    } else {
      leftIndex++;
    }
  }
  return array;
}
