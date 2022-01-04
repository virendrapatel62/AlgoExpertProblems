const array =[-21, 301, 12, 4, 65, 56, 210, 356, 9, -47]
const targetSum = 163

function twoNumberSum0(array, targetSum) {
	for(let outer = 0 ; outer < array.length ; outer ++){
		const first = array[outer]
		for(let inner = outer + 1 ; inner < array.length ; inner ++){
			const second = array[inner]
			const sum = first + second
			if(sum === targetSum){
				return [second , first]
			}
		}
	}
	return []
}

function twoNumberSum1(array, targetSum) {
	const nums = {}
	for(let number of array){
		const toBeTarget =  targetSum - number
		if(toBeTarget in nums){
			return [number , toBeTarget]
		}
		nums[number] = true
	}
	return []
}

function twoNumberSum2(array = [] , targetSum){
	const sorted  = array.sort((a, b)=>a-b) // [1,2,3,4,6]  // 6
	let left = 0  // 0 
	let right = sorted.length-1 // 4, 3
	while(left < right){ // true
		const sum = sorted[left] + sorted[right] // 7
		if(sum === targetSum){
			return [sorted[left] ,  sorted[right]]
		}else if(sum < targetSum ){
			left = left  + 1
		}else{
			right = right -1
		}
	}
}




console.log(twoNumberSum0(array , targetSum)  , [-47, 210])
console.log(twoNumberSum1(array , targetSum)  , [-47, 210])
console.log(twoNumberSum2(array , targetSum)  , [-47, 210])

