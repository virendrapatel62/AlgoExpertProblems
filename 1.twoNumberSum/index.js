const array =[-21, 301, 12, 4, 65, 56, 210, 356, 9, -47]
const targetSum = 163

function twoNumberSum1(array, targetSum) {
	const nums = {}
	for(let number of array){
		const toBeTarget =  targetSum - number
		console.log(nums)
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
	console.log(sorted)
	while(left < right){ // true
		const sum = sorted[left] + sorted[right] // 7
		console.log(sum, left , right)
		if(sum === targetSum){
			return [sorted[left] ,  sorted[right]]
		}else if(sum < targetSum ){
			left = left  + 1
		}else{
			right = right -1
		}
	}
	console.log(left , right)
}




console.log(twoNumberSum1(array , targetSum)  , [-47, 210])
console.log(twoNumberSum2(array , targetSum)  , [-47, 210])

