const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];
function isMonotonic(array = []) {
  const { length } = array;

  let isDown = false;
  let isUp = false;

  for (let index = 0; index <= length - 2; index++) {
    const number1 = array[index];
    const number2 = array[index + 1];

    console.log({ number1, number2, isDown, isUp });

    if (number1 < number2) {
      if (isDown) {
        return false;
      }
      isUp = true;
    } else if (number1 > number2) {
      if (isUp) {
        return false;
      }

      isDown = true;
    }
  }

  return true;
}

console.log(isMonotonic(array));
