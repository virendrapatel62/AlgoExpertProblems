const array = [5, 1, 22, 25, 6, -1, 8, 10];
const subSequence = [5 , 25, -1];


function isValidSubsequence1(array = [], sequence = []) {
  let nextStart = 0;
  for (let number of sequence) {
    let found = false;
    for (let index = nextStart; index < array.length; index++) {
      const element = array[index];
      if (element === number) {
        nextStart = index + 1;
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

function isValidSubsequence2(array = [], sequence = []) {
    let sequenceIndex = 0 
    for(let number of array){
        if(sequence[sequenceIndex] === number){
            sequenceIndex++
        }
        if(sequenceIndex === sequence.length) break
    }
    return sequenceIndex === sequence.length
}

function isValidSubsequence3(array = [] , subSequence = []){
  let arrayIndex = 0  , sequenceIndex = 0 
  while(arrayIndex < array.length && sequenceIndex < subSequence.length){
    if(subSequence[sequenceIndex] === array[arrayIndex]){
      sequenceIndex ++ 
    }
    arrayIndex ++
  }
  return sequenceIndex === subSequence.length 
}


console.log(isValidSubsequence1(array, subSequence));
console.log(isValidSubsequence2(array, subSequence));
console.log(isValidSubsequence3(array, subSequence));

