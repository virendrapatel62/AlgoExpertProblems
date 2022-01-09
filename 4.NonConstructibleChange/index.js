input = [1, 1, 1, 1, 1];
const result = 20;

// O(nlogn) time  |  O(1) space
function nonConstructibleChange(coins = []) {
  coins.sort((a, b) => a - b);
  let changeCreated = 0;
  for (const coin of coins) {
    if (coin > changeCreated + 1) {
      return changeCreated + 1;
    }
    changeCreated = changeCreated + coin;
  }

  return changeCreated + 1;
}

console.log(nonConstructibleChange(input));
