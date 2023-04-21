// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const list1 = data.lists[0][1];
const list2 = data.lists[1][1];
const list3 = data.lists[2][1];

let result = []

const extractBiggest = () => {
	if (list1[list1.length - 1] >= list2[list2.length - 1] && list1[list1.length - 1] >= list3[list3.length - 1]) {
		return list1.pop()
	}

	else if(list2[list2.length - 1] >= list3[list3.length - 1]) {
		return list2.pop()
	}else{
	
		return list3.pop()
}
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)