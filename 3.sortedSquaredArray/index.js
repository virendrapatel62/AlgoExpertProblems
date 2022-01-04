const array  = [-50 , 100 , -100 , -2, 3, 5, 6, 8, 9]

// O(nlog(n))
function solution1(array = []){
    return array.map(number=>number**2).sort((a, b )=>a-b)
}

// O(n)
function solution2(array = []){
   const sorted  = new Array(array.length).fill(0)
   let smallIndex = 0 
   let largeIndex = array.length-1 
    for (let index = array.length-1; index >= 0 ; index--) {
        const valueAtSmallIndex = array[smallIndex]
        const valueAtLargeIndex = array[largeIndex]
        if(Math.abs(valueAtSmallIndex) > Math.abs(valueAtLargeIndex)){
            sorted[index] = valueAtSmallIndex ** 2
            smallIndex ++ 
        }else{
            sorted[index] = valueAtLargeIndex ** 2
            largeIndex--
        }
    }
   return sorted   
}

console.log(solution1(array))
console.log(solution2(array))