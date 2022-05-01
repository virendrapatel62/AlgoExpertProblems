const array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraverse(array = []) {
  for (let index = 0; index < array.length; index++)
    for (let innerIndex = 0; innerIndex < array[index].length; innerIndex++) {
      console.log(`${index}${innerIndex}`, array[index][innerIndex]);
    }
  return [];
}

console.log(
  spiralTraverse(array)?.toString() ==
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].toString()
);
