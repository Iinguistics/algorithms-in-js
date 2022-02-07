// happy number if it breaks down to 1 true  else false
// access ea digit & sq it, then add all the sq digits to find sum
// then repeat until you get to 1, the sum becomes the new number
function happy(number, counter = 0) {
	result = false;

	if (counter < 20) {
		let sum = number
			.toString()
			.split('')
			.map((n) => n * n)
			.reduce((a, b) => a + b);

		if (sum === 1) {
			return (result = true);
		} else {
			counter++;
			happy(sum, counter);
		}
	}
	return result;
}
//console.log(happy(19));

function isomorphic(s, t) {
	const tLen = t.length;
	if (s.length !== tLen) {
		return false;
	}
	const letters = {};
	for (let i = 0; i <= s.length; i++) {
		if (!letters[s[i]]) {
			letters[s[i]] = t[i];
		} else if (letters[s[i]] !== t[i]) {
			console.log(letters);
			return false;
		}
	}
	return true;
}
//console.log(isomorphic("egg", "add"));

function wordPattern(pattern, str) {
	const patternData = {};
	const strData = {};
	const myArr = str.split(' ');
	if (pattern.length !== myArr.length) {
		return false;
	}
	for (let i = 0; i < pattern.length; i++) {
		if (!patternData[pattern[i]] && !strData[myArr[i]]) {
			patternData[pattern[i]] = myArr[i];
			strData[myArr[i]] = pattern[i];
		}

		if (
			patternData[pattern[i]] !== myArr[i] &&
			strData[myArr[i]] !== pattern[i]
		) {
			return false;
		}
	}
	console.log(strData);
	return true;
}

//console.log(wordPattern("abc", "cat dog dog"));

//"hello world here", return "here world hello"
// split string into words
// two pointers start & end swap then i++ j--  while i<=j
function reverseWordsString(str) {
	//const newStr = [...str]; turns str to arr but ea letter not word
	const newStr = str.split(' ');
	let j = newStr.length - 1;
	let i = 0;
	let temp;
	while (i <= j) {
		temp = newStr[j];
		newStr[j] = newStr[i];
		newStr[i] = temp;
		i++;
		j--;
	}
	newStr.join('');
	return newStr;
}
//console.log(reverseWordsString("hello world here"))

function moveElementToEnd(array, toMove) {
	let i = 0;
	let temp;
	for (let j = 0; j < array.length; j++) {
		if (array[j] !== toMove) {
			temp = array[j];
			array[j] = array[i];
			array[i] = temp;
			i++;
		}
	}
	return array;
}

const moveArr = [2, 1, 2, 2, 2, 3, 4, 2];
//console.log(moveElementToEnd(moveArr, 2));

function twoNumberSum(array, target) {
	const nums = {};
	for (num of array) {
		const potential = target - num;
		if (potential in nums) {
			return [potential, num];
		} else {
			nums[num] = true;
		}
	}
	return [];
}
//console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));

function threeNumberSum(array, target) {
	array.sort((a, b) => {
		return a - b;
	});
	const matched = [];
	for (let i = 0; i < array.length - 2; i++) {
		let l = i + 1;
		let r = array.length - 1;
		while (l < r) {
			const cs = array[i] + array[l] + array[r];
			if (cs === target) {
				matched.push([array[i], array[l], array[r]]);
				l++;
				r--;
			} else if (cs < target) {
				l++;
			} else if (cs > target) {
				r--;
			}
		}
	}
	return matched;
}
//console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 16));

function isMonotonic(arr) {
	if (arr.length <= 2) {
		return true;
	}
	let decreasing = true;
	let increasing = true;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			increasing = false;
		}
		if (arr[i] > arr[i - 1]) {
			decreasing = false;
		}
	}
	return decreasing || increasing;
}

//console.log(isMonotonic([22,56,100,250]));

function arrangeWords(str) {
	const strToArr = str.split(' ');
	const newStr = strToArr.sort();
	const answer = newStr.join(' ');
	return answer;
}
//console.log(arrangeWords("this is a test"));

//loop & push first arr normally
// push end value of all other arrays

function smallDiff(arr1, arr2) {}
//console.log(smallDiff([5,8,9,21,-55], [56,99,45,22,1]));

function reverseOnlyLetters(newS) {
	const alpha = {
		a: true,
		e: true,
		i: true,
		m: true,
		q: true,
		u: true,
		y: true,
		b: true,
		f: true,
		j: true,
		n: true,
		r: true,
		v: true,
		z: true,
		c: true,
		g: true,
		k: true,
		o: true,
		s: true,
		w: true,
		d: true,
		h: true,
		l: true,
		p: true,
		t: true,
		x: true,
	};
	const lower = newS.toLowerCase();
	const s = lower.split('');
	let l = 0;
	let r = s.length - 1;
	while (l < r) {
		if (s[l] && s[r] in alpha) {
			let temp = s[r];
			s[r] = s[l];
			s[l] = temp;
			l++;
			r--;
		} else if (s[l] in alpha === false) {
			l++;
		} else if (s[r] in alpha === false) {
			r--;
		}
	}
	return s.join('');
}
//console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));not working

//min max stack construction   classes are just blueprints, you can set a var to a new class which creates that var into an object with access to all the blueprints methods
class MinMaxStack {
	constructor() {
		this.minMaxStack = [];
		this.stack = [];
	}
	peek() {
		return this.stack[this.stack.length - 1];
	}

	pop() {
		this.minMaxStack.pop();
		return this.stack.pop();
	}

	push(number) {
		const newMinMax = { min: number, max: number };
		if (this.minMaxStack.length) {
			const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
			newMinMax.min = Math.min(lastMinMax.min, number);
			newMinMax.max = Math.max(lastMinMax.max, number);
		}
		this.minMaxStack.push(newMinMax);
		this.stack.push(number);
	}

	getMin() {
		return this.minMaxStack[this.minMaxStack.length - 1].min;
	}

	getMax() {
		return this.minMaxStack[this.minMaxStack.length - 1].max;
	}
}

// const test = new MinMaxStack();
// test.push(5);
// test.push(12);
// test.push(2);
// console.log(test.getMin());
// console.log(test);

function nthTest(n) {
	let counter = 3;
	const lastTwo = [0, 1];
	while (counter <= n) {
		let nFib = lastTwo[0] + lastTwo[1];
		lastTwo[0] = lastTwo[1];
		lastTwo[1] = nFib;
		counter++;
	}

	return n > 1 ? lastTwo[1] : lastTwo[0];
}

// better solution ?
// function nthTest(n){
//     let a = 0, b = 1

//     while(n--) {
//         [a,b] = [b, a + b]
//     }
//     return a

//   }

//console.log(nthTest(10));

// this solution works as well
// function getNthFib(n) {
//     var lastTwo = [0,1];
//     var counter = 3;

//   while(counter <=n){
// 	  let nextFib = lastTwo[0] + lastTwo[1];
// 	  lastTwo[0] = lastTwo[1];
// 	  lastTwo[1] = nextFib;
// 	  counter ++
//   }
//     if(n > 1){
// 		return lastTwo[1]
// 	}else{
// 		return lastTwo[0]
// 	}
// }

function maxProduct(nums) {
	nums.sort((a, b) => {
		return a - b;
	});
	const i = nums.length - 2;
	const j = nums.length - 1;
	const ianswer = nums[i] - 1;
	const janswer = nums[j] - 1;

	return ianswer * janswer;
}
//console.log(maxProduct([3,4,5,2]));

function balancedBrackets(str) {
	const openingBrackets = '([{';
	const closingBrackets = ')]}';
	const matchingBrackets = { ')': '(', ']': '[', '}': '{' };
	const stack = [];
	for (const char of str) {
		if (openingBrackets.includes(char)) {
			stack.push(char);
		} else if (closingBrackets.includes(char)) {
			if (stack.length == 0) {
				return false;
			}
			if (stack[stack.length - 1] === matchingBrackets[char]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length === 0;
}
//console.log(balancedBrackets("([])"));

class Emac {
	constructor(type, model, year, price) {
		this.type = type;
		this.carmodel = model;
		this.year = year;
		this.carprice = price;
	}
	addCar() {
		if (this.type === 'ford') {
			return `you have a ${this.carmodel}, found on road dead, get a better car.`;
		} else {
			return `you have a ${this.carmodel}`;
		}
	}
}
let myFord = new Emac('ford', 'fusion', '2008', '$5,000');
let myHonda = new Emac('honda', 'civic', '2015', '$22,000');

// console.log(myFord.addCar());
// console.log(myHonda.addCar());

function moveTest(arr, target) {
	let i = 0;
	let temp;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== target) {
			temp = arr[j];
			arr[j] = arr[i];
			arr[i] = temp;
			i++;
			console.log('waht');
		}
	}
	return arr;
}
//console.log(moveTest([2,1,2,2,2,2,3,4,2],2 ));

//sort the array
//majority = arr.length / 2
//two pointers i & j  j will be the fast runner
//if arr[i] === arr[j] counter ++
//if counter > majorty return arr[i]
const majorityElement = (arr) => {
	if (arr.length === 1) {
		return arr[0];
	}
	arr.sort((a, b) => {
		return a - b;
	});
	const marjority = arr.length / 2;
	let counter = 1;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
		} else if (arr[i] === arr[j]) {
			counter++;
		}
		if (counter > marjority) {
			return arr[i];
		}
	}
};
//console.log(majorityElement([2,2,1,1,1,1,2]));

//A fixed point in an array is an element whose value is equal to its index. This question was asked by Apple.
function fixedPoint(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === i) {
			return i;
		}
	}
	return false;
}
//console.log(fixedPoint([5,99,8,4,6,88,6]));

function pivotIndex(nums) {
	if (nums.length === 0) return -1;
	if (nums.length === 1) return 0;

	let leftSum = 0;
	let rightSum = 0;
	for (let i = 1; i < nums.length; i++) {
		rightSum += nums[i];
	}

	for (let i = 0; i < nums.length; i++) {
		if (leftSum === rightSum) {
			return i;
		} else if (i < nums.length - 1) {
			leftSum += nums[i];
			rightSum -= nums[i + 1];
		}
	}
	return -1;
}
//console.log(pivotIndex([1,2,3,5,1,5]));
// left sum = 1, 3, 6, 11
//rightsum = 16, 14, 11

// Peak is defined when the value to its left & right are smaller than it. the min would consist of 3   0,10,6  10 would be the peak
function longestPeak(arr) {
	let longestPeakLength = 0;
	let i = 1;
	while (i < arr.length - 1) {
		//if the value's to the left & right are both smaller than the current value, the current value is a peak
		const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
		if (!isPeak) {
			i++;
			continue;
		}
		let leftIdx = i - 2;
		while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) {
			leftIdx--;
		}
		let rightIdx = i + 2;
		while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {
			rightIdx++;
		}
		const currentPeakLength = rightIdx - leftIdx - 1;
		longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
		i = rightIdx;
	}
	return longestPeakLength;
}
//console.log(longestPeak([1,2,3,3,4,0,10,6,5,-1,-3,2,3]));

function arrayOfProducts(arr) {
	const answerArr = [];
}
//console.log(arrayOfProducts([5,1,4,2]))

function relativeSortArray(arr1, arr2) {
	const exist = [];
	const nonExist = [];
	for (num of arr1) {
		if (arr2.includes(num)) {
			exist.push(num);
		} else {
			nonExist.push(num);
		}
	}
	exist
		.sort((x, y) => arr2.indexOf(x) - arr2.indexOf(y))
		.concat(nonExist.sort((x, y) => x - y));
}
//console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));

function slowestKeyy(releaseTimes, keysPressed) {
	var potentialHighest;
	var potentialHighestKey = 97;
	const highestReleaseTime = [0];
	for (let i = 1; i < releaseTimes.length; i++) {
		let currentKey = keysPressed[i].charCodeAt(0);
		if (i === 1) {
			potentialHighest = releaseTimes[0];
			highestReleaseTime[0] = potentialHighest;
			highestReleaseTime[1] = keysPressed[0];
		} else {
			potentialHighest = releaseTimes[i] - releaseTimes[i - 1];
		}

		if (
			potentialHighest === highestReleaseTime[0] &&
			currentKey > potentialHighestKey
		) {
			highestReleaseTime[1] = keysPressed[i];
		}

		if (potentialHighest > highestReleaseTime[0]) {
			highestReleaseTime[0] = potentialHighest;
			highestReleaseTime[1] = keysPressed[i];
		}
	}
	return highestReleaseTime[1];
}

//console.log(slowestKeyy([12,23,36,46,62], "spuda"));

function slowestKey(releaseTimes, keysPressed) {
	let max = -Infinity;
	let result;
	keysPressed.split('');

	releaseTimes.reduce((acc, curr, idx) => {
		if (curr - acc > max || (curr - acc === max && keysPressed[idx] > result)) {
			max = curr - acc;
			result = keysPressed[idx];
		}
		return (acc = curr);
	}, 0);

	return result;
}
//console.log(slowestKey([12,23,36,46,62], "spuda"));

function heightChecker(heights) {
	const sortedHeights = [...heights].sort((a, b) => a - b);
	let count = 0;

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sortedHeights[i]) {
			count++;
		}
	}

	return count;
}
//console.log(heightChecker([5,1,2,3,4]));

// two number sum..but instead of returning the values it returns the index's
function twoSum(arr, target) {
	const nums = {};
	for (let i = 0; i < arr.length; i++) {
		const potentialMatch = target - arr[i];
		if (potentialMatch in nums) {
			return [nums[potentialMatch], i];
		} else {
			nums[arr[i]] = i;
		}
	}
	return [];
}
//console.log(twoSum([2,7,11,15], 9));

function sortedSquares(nums) {
	sqArr = [];
	for (let i = 0; i < nums.length; i++) {
		sqArr.push(nums[i] * nums[i]);
	}
	//sort
	sqArr.sort((a, b) => {
		return a - b;
	});
	return sqArr;
}
//console.log(sortedSquares([-7,-3,2,3,11]));

// using memoization  space O(n)  time O(n)
function firstDuplicateValue(array) {
	const nums = {};
	for (let i = 0; i < array.length; i++) {
		if (array[i] in nums) {
			return array[i];
		} else {
			nums[array[i]] = true;
		}
	}
	return -1;
}

//console.log(firstDuplicateValue([2,1,5,2,3,3,4]));

//declare words array to store the words
//declare start of word var starts at idx of 0
//check if string[i] is ' ' whitespace if so push the letters up until the whitespace to words, then update startOfWord to i
//check if start of word is a whitespace, if so push ' ' a whitespace to words, then update startOfWord to i
//push the very last char to words
//reverse all the values in words
//then join
function reverseWordsInString(string) {
	const words = [];
	let startOfWord = 0;
	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (character === ' ') {
			words.push(string.slice(startOfWord, i));
			startOfWord = i;
		} else if (string[startOfWord] === ' ') {
			words.push(' ');
			startOfWord = i;
		}
	}
	words.push(string.slice(startOfWord));

	reverseList(words);
	return words.join('');

	function reverseList(arr) {
		let temp;
		let left = 0;
		let right = arr.length - 1;
		while (left < right) {
			temp = arr[right];
			arr[right] = arr[left];
			arr[left] = temp;
			left++;
			right--;
		}
	}
}
//console.log(reverseWordsInString('testing abc 123'));

function plusOne(digits) {
	for (let i = digits.length - 1; i >= 0; i--) {
		if (digits[i] !== 9) {
			digits[i] += 1;
			return digits;
		} else {
			digits[i] = 0;
		}
	}
	// if arr length = 0 for loop does not run, add 1 to the arr & return
	digits.unshift(1);
	return digits;
}
//console.log(plusOne([6,9,2,9]));

function tournamentWinner(competitions, results) {
	const team = {};

	for (let i = 0; i < results.length; i++) {
		if (team.hasOwnProperty(competitions[i][1]) && results[i] === 0) {
			team[competitions[i][1]] += 3;
		} else if (results[i] === 0) {
			team[competitions[i][1]] = 3;
		}

		if (team.hasOwnProperty(competitions[i][0]) && results[i] === 1) {
			team[competitions[i][0]] += 3;
		} else if (results[i] === 1) {
			team[competitions[i][0]] = 3;
		}
	}
	return Object.keys(team).reduce((a, b) => (team[a] > team[b] ? a : b));
}
//console.log(tournamentWinner(testcompetitions, testResults));

function greatestNumberofCandies(candies, extraCandies) {
	const results = [];
	for (let i = 0; i < candies.length; i++) {
		let left = 0;
		let notGreatest = false;
		while (left < candies.length) {
			if (candies[i] + extraCandies >= candies[left]) {
				left++;
			} else {
				notGreatest = true;
				left++;
			}
		}
		if (notGreatest === false) {
			results.push(true);
		} else {
			results.push(false);
		}
	}
	return results;
}
//console.log(greatestNumberofCandies([1,3,9], 4));

// another way of solving it
function greatestNumberofCandiess(candies, extraCandies) {
	const results = [];
	const max = Math.max(...candies);
	for (const candie of candies) {
		results.push(candie + extraCandies >= max);
	}
	return results;
}
//console.log(greatestNumberofCandiess([2,3,5,1,3], 3));

//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].
function shuffle(nums, n) {
	const output = [];
	for (let x = 0; x < nums.length / 2; x++) {
		let y = n + x;
		output.push(nums[x], nums[y]);
	}
	return output;
}
//console.log(shuffle([1,2,3,4,4,3,2,1], 4));

function maxWealth(accounts) {
	const output = [];
	for (let i = 0; i < accounts.length; i++) {
		output.push(
			accounts[i].reduce((a, b) => {
				return a + b;
			}),
		);
	}
	return Math.max(...output);
}
//console.log(maxWealth([[1,2,3],[3,2,1]]));

function numIdenticalPairs(nums) {
	let output = 0;
	for (let i = 0; i < nums.length; i++) {
		let fastRunner = i + 1;
		while (fastRunner < nums.length) {
			if (nums[i] === nums[fastRunner]) {
				output++;
				fastRunner++;
			} else {
				fastRunner++;
			}
		}
	}
	return output;
}
//console.log(numIdenticalPairs([1,2,3,1,1,3]));

// running sum of 1d array
function runningSum(nums) {
	const output = [];
	let running = nums[0] + nums[1];
	output.push(nums[0], running);
	for (let i = 2; i < nums.length; i++) {
		output.push(running + nums[i]);
		running += nums[i];
	}
	return output;
}
//console.log(runningSum([3,1,2,10,1]));

function smallerNumbersThanCurrent(nums) {
	const output = [];
	for (let i = 0; i < nums.length; i++) {
		let counter = 0;
		let runner = 0;
		while (runner < nums.length) {
			if (nums[runner] < nums[i]) {
				counter++;
				runner++;
			} else {
				runner++;
			}
		}
		output.push(counter);
	}
	return output;
}
//console.log(smallerNumbersThanCurrent([8,1,2,2,3]));

//ea adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]]
function decompressRLElist(nums) {
	const output = [];
	for (let left = 0; left < nums.length; left += 2) {
		let right = left + 1;
		let counter = 0;
		while (counter < nums[left]) {
			output.push(nums[right]);
			counter++;
		}
	}
	return output;
}
//console.log(decompressRLElist([1,1,2,3]));

// in progress...would need to a while loop & swap / temp var if output[ind] already exists
// function createTargetArray(nums, index){
//     const output = [];
//     for(let i = 0; i<index.length; i++){
//        if(output[index[i]]){
//            output[index[i] + 1] = nums[i];
//        }else{
//            output[index[i]] = nums[i];
//        }
//    }
//     return output;
// }

function createTargetArray(nums, index) {
	let target = [];

	index.forEach((v, i) => {
		target.splice(v, 0, nums[i]);
	});
	return target;
}

//console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));

function largestAltitude(gain) {
	const altitides = [0, gain[0]];
	let runningAlt;
	for (let i = 1; i < gain.length; i++) {
		const end = altitides.length - 1;
		runningAlt = altitides[end] + gain[i];
		altitides.push(runningAlt);
	}
	altitides.sort((a, b) => {
		return a - b;
	});
	return altitides[altitides.length - 1];
}
//console.log(largestAltitude([-5,1,5,0,-7]));

//A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
function countGoodTriplets(arr, a, b, c) {
	let output = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (
					Math.abs(arr[i] - arr[j]) <= a &&
					Math.abs(arr[j] - arr[k]) <= b &&
					Math.abs(arr[k] - arr[i]) <= c
				) {
					output++;
				}
			}
		}
	}
	return output;
}
//console.log(countGoodTriplets([3,0,1,1,9,7], 7, 2, 3));

function countMatches(items, ruleKey, ruleValue) {
	let output = 0;
	for (let i = 0; i < items.length; i++) {
		if (ruleKey === 'type' && items[i][0] === ruleValue) {
			output += 1;
		} else if (ruleKey === 'color' && items[i][1] === ruleValue) {
			output += 1;
		} else if (ruleKey === 'name' && items[i][2] === ruleValue) {
			output += 1;
		}
	}
	return output;
}
//console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],
//"type", "phone"));

function defangIPaddr(address) {
	let output = [...address];
	for (let i = 0; i < address.length; i++) {
		if (address[i] === '.') {
			output[i] = '[.]';
		}
	}
	return output.join('');
}
//console.log(defangIPaddr("255.100.50.0"));

// another way of doing it
// function defangIPaddr(address){
//     let defangAdd = address.split("");
//     for(let i=0; i<defangAdd.length; i++){
//         if(defangAdd[i] === "."){
//             defangAdd[i] = "[.]"
//         }
//     }
//      return defangAdd.join("");
// }

function minTimeToVisitAllPoints(points) {
	let result = 0;
	for (let i = 1; i < points.length; i++) {
		result += Math.max(
			Math.abs(points[i][0] - points[i - 1][0]),
			Math.abs(points[i][1] - points[i - 1][1]),
		);
	}
	return result;
}
//console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));

function findNumbers(nums) {
	let even = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= 10 && nums[i] < 100) {
			even++;
		} else if (nums[i] > 999 && nums[i] < 10000) {
			even++;
		} else if (nums[i] >= 100000 && nums[i] < 1000000) {
			even++;
		}
	}
	return even;
}
//console.log(findNumbers([12,345,2,6,7896]));

function maxStockProfit(prices) {
	let maxProfit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		let right = i + 1;
		while (right < prices.length) {
			let currentProfit = prices[right] - prices[i];
			if (currentProfit > maxProfit) {
				maxProfit = currentProfit;
				right++;
			} else {
				right++;
			}
		}
	}
	return maxProfit;
}
//console.log(maxStockProfit([5,11,8,5,7,10]));

function sumOfUnique(nums) {
	let sum = 0,
		filtered = nums.filter((val, index) => nums.indexOf(val) !== index);
	for (let i = 0; i < nums.length; i++) {
		if (!filtered.includes(nums[i])) {
			sum += parseInt(nums[i]);
		}
	}
	return sum;
}
//console.log(sumOfUnique([2,3,2,5]));

// Problem asked by apple
// A fixed point in an array is an element whose value is equal to its index.
function fixedPoint(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === i) {
			return i;
		}
	}
	return false;
}
//console.log(fixedPoint([-6,0,2,40]));

function finalPrices(prices) {
	const output = [];
	for (let i = 0; i < prices.length; i++) {
		let j = i + 1;
		while (j < prices.length) {
			if (prices[j] <= prices[i]) {
				output.push(prices[i] - prices[j]);
				break;
			} else {
				j++;
			}
		}
		if (j === prices.length) {
			output.push(prices[i]);
		}
	}
	return output;
}
//console.log(finalPrices([8,4,6,2,3]));

function sortArrayByParity(A) {
	const even = [];
	const odd = [];
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 === 0) {
			even.push(A[i]);
		} else {
			odd.push(A[i]);
		}
	}
	const output = [...even, ...odd];
	return output;
}
//console.log(sortArrayByParity([3,1,2,4]));

function busyStudent(startTime, endTime, queryTime) {
	let output = 0;
	for (let i = 0; i < startTime.length; i++) {
		if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
			output++;
		}
	}
	return output;
}
//console.log(busyStudent([9,8,7,6,5,4,3,2,1], [10,10,10,10,10,10,10,10,10], 5));

function numJewelsInStones(jewels, stones) {
	let output = 0;
	for (let i = 0; i < jewels.length; i++) {
		let j = 0;
		while (j < stones.length) {
			if (jewels[i] === stones[j]) {
				output++;
				j++;
			} else {
				j++;
			}
		}
	}
	return output;
}
//console.log(numJewelsInStones("aA", "aAAbbb"));
// another way of doing it...faster runtime
function numJewelsInStones(jewels, stones) {
	let output = 0;
	for (let i = 0; i < stones.length; i++) {
		let n = jewels.includes(stones[i]);
		if (n) {
			output++;
		}
	}
	return output;
}
//console.log(numJewelsInStones("aA", "aAAbbb"));

// very slow way O(n)cubed
// function numTeams(rating){
//     let output = 0;
//     for(let i = 0; i < rating.length; i++){
//         for(let j = i + 1; j < rating.length; j++){
//           for(let k = j + 1; k < rating.length; k++){
//               if(rating[i] < rating[j] && rating[j] < rating[k]){
//                   output ++;
//               }else if(rating[i] > rating[j] && rating[j] > rating[k]){
//                 output ++;
//            }
//         }
//     }
//   }
//   return output;
// }
// better way..O(n)sqared quadratic, still slow but unavoidable with this problem
function numTeams(rating) {
	var len = rating.length;
	var sum = 0;
	for (let i = 1; i < len - 1; i++) {
		var l = [0, 0];
		var r = [0, 0];
		for (let j = 0; j < len; j++) {
			if (rating[j] < rating[i]) {
				j < i ? l[0]++ : r[0]++;
			}

			if (rating[j] > rating[i]) {
				j < i ? l[1]++ : r[1]++;
			}
		}

		sum += l[0] * r[1] + l[1] * r[0];
	}
	return sum;
}
//console.log(numTeams([2,5,3,4,1]));

function replaceElements(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = Math.max(...arr.slice(i + 1));
	}

	arr[arr.length - 1] = -1;
	return arr;
}
//console.log(replaceElements([17,18,5,4,6,1]));

// return the min of change you Cannot create
// O(nlogn) Time  O(1) space
function nonConstructibleChange(coins) {
	coins.sort((a, b) => {
		return a - b;
	});

	let change = 0;

	for (let i = 0; i < coins.length; i++) {
		if (coins[i] > change + 1) {
			return change + 1;
		} else {
			change += coins[i];
		}
	}
	return change + 1;
}

//console.log(nonConstructibleChange([5,7,1,1,2,3,22]));
// [1,1,2,3,5,7,22] returns 20
// [1,1,1,1,1] returns 6

function mergeOverlappingIntervals(intervals) {
	const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
	const mergedIntervals = [];
	let currentInterval = sortedIntervals[0];
	mergedIntervals.push(currentInterval);

	for (const nextInterval of sortedIntervals) {
		const [_, currentIntervalEnd] = currentInterval;
		const [nextIntervalStart, nextIntervalEnd] = nextInterval;

		if (currentIntervalEnd >= nextIntervalStart)
			currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
		else {
			currentInterval = nextInterval;
			mergedIntervals.push(currentInterval);
		}
	}
	return mergedIntervals;
}

//console.log(mergeOverlappingIntervals([[1,2], [3,5], [4,7], [6,8], [9,10]]));
// [[1,2], [3,8], [9,10]]

function sockMerchant(n, ar) {
	ar.sort((a, b) => a - b);
	let pairs = 0;
	for (let i = 0; i < n - 1; i++) {
		if (ar[i] === ar[i + 1]) {
			pairs++;
			i += 1;
		}
	}
	return pairs;
}
//console.log(sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]));

function countingValleys(steps, path) {
	let valleys = 0;
	let level = 0;
	for (let i = 0; i < steps; i++) {
		if (path[i] === 'D') {
			level -= 1;
		} else {
			level += 1;
		}
		if (level === 0 && path[i] === 'U') {
			valleys++;
		}
	}
	return valleys;
}
//console.log(countingValleys(10, "UDUUUDUDDD"));

// Space O(1)  Time O(n)
function jumpingOnClouds(c) {
	let numberOfJumps = 0;
	let i = 0;

	while (i < c.length - 1) {
		if (c[i + 2] === 0) {
			i += 2;
			numberOfJumps++;
		} else {
			i += 1;
			numberOfJumps++;
		}
	}
	return numberOfJumps;
}
//console.log(jumpingOnClouds([0,0,1,0,0,1,0]));

// function repeatedString(s, n) {
//     let totalA = 0;
//     const aIdx = {};
//     const whole = Math.floor(n / s.length);
//     const remainder = n % s.length;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "a"){
//             totalA ++;
//             aIdx[i] = true;
//         }
//     }
//     totalA = totalA * whole;
//     let i = 0;
//     while(i < remainder){
//         if(i in aIdx){
//             totalA ++;
//             i ++;
//         }else{
//             i ++;
//         }
//     }
//     return totalA;
// }

// another approach
function repeatedString(s, n) {
	let totalA = 0;

	if (n >= s.length) {
		let occurencesOfA = [...s].filter((e) => e === 'a').length;
		totalA = Math.floor(n / s.length) * occurencesOfA;
	}

	let tailStringLength = n % s.length;

	for (let i = 0; i < tailStringLength; i++) {
		if (s[i] === 'a') {
			totalA++;
		}
	}
	return totalA;
}
//console.log(repeatedString("aba", 10));

// 2 d array
// constraints -9 < arr[i][j] <9   all the numbers will be greater than -9 & less than 9
// so we make the max sum = -63..-9 * 7(the number of values being summed at a time..top 3 mid 1 bottom 3)
function hourglassSum(arr) {
	let max = -63;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			let sum = 0;
			sum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			max = max < sum ? sum : max;
		}
	}
	return max;
}
//console.log(hourglassSum([[1,1,1,0,0,0], [0,1,0,0,0,0], [1,1,1,0,0,0], [0,0,2,4,4,0], [0,0,0,2,0,0], [0,0,1,2,4,0]]));

// from index 0 in array jump d amount & start push values to new arr until you reach the end
// once you reach the end of the array start pushing from idx 0 from the array to the new arr until you reach
// the point you started pushing from intially..the d jump amount
function rotLeft(a, d) {
	const output = [];
	for (let i = d; i < a.length; i++) {
		output.push(a[i]);
	}
	let i = 0;
	while (i < d) {
		output.push(a[i]);
		i++;
	}
	return output;
}
//console.log(rotLeft([1,2,3,4,5], 2));

// function minimumSwaps(arr){
//     let min;
//     let minIdx;
//     let swaps = 0;
//     for(let i = 0; i < arr.length - 1; i++){
//         min = arr[i]
//         let j = i + 1;
//         while(j < arr.length ){
//             if(arr[j] < min){
//                 min = arr[j];
//                 minIdx = j;
//                 j ++;
//             }else{
//                 console.log("min: " + min, arr[j])
//                 j ++;
//             }
//         }
//         if(arr[i] > min){
//             helpSwap(i, minIdx, arr)
//         }
//     }

//     function helpSwap(i, j, arr){
//         const temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//         swaps ++;
//     }
//     return swaps;
// }

function minimumSwaps(arr) {
	let swapCount = 0;
	for (let index = 0; index < arr.length; index++) {
		const currentInt = arr[index];
		const position = index + 1;
		if (currentInt !== position) {
			let indexToSwap;
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] === position) {
					indexToSwap = i;
					break;
				}
			}
			arr[indexToSwap] = currentInt;
			arr[index] = position;
			swapCount = swapCount + 1;
		}
	}
	return swapCount;
}
//console.log(minimumSwaps([4,3,1,2]))

function checkMagazine(magazine, note) {
	let magDict = {};
	let works = '';

	//Populate magDict with words from the magWordArr
	for (let i = 0; i < magazine.length; i++) {
		let word = magazine[i];
		magDict[word] = magDict[word] ? magDict[word] + 1 : 1;
	}

	//Loop through the note and compare with magazine object
	for (let i = 0; i < note.length; i++) {
		//magDict has the word needed for the note
		if (!(note[i] in magDict)) {
			works = 'No';
			break;
		} else {
			//In the magDict
			if (magDict[note[i]] < 1) {
				works = 'No';
				break;
			}
			//Subtract one from the number of words in dict
			magDict[note[i]] = magDict[note[i]] - 1;
		}
	}
	if (works === '') works = 'Yes';
	console.log(works);
}
//console.log(checkMagazine("give me one grand today night", "give one grand today"));

function twoStrings(s1, s2) {
	const stringDict = {};
	let result = '';
	for (let letter of s1) {
		if (letter !== ' ') stringDict[letter] = true;
	}
	for (let letter of s2) {
		if (letter in stringDict) {
			result = 'YES';
			break;
		}
	}
	if (result === '') result = 'NO';
	return result;
}
//console.log(twoStrings("hi", "world"));

function makeAnagram(a, b) {
	const lettersDict = {};
	const larger = a.length >= b.length ? a : b;
	const smaller = a.length < b.length ? a : b;

	// store letters counts for larger string
	for (const letter of larger) {
		lettersDict[letter] = (lettersDict[letter] || 0) + 1;
	}

	// count same letters
	let counter = 0;

	// loop through second/smaller array string to find count of same letters
	for (const letter of smaller) {
		if (lettersDict[letter] && lettersDict[letter] > 0) {
			lettersDict[letter]--;
			counter++;
		}
	}

	const diffOfSmaller = smaller.length - counter;
	const diffOfLarger = larger.length - smaller.length;

	return 2 * diffOfSmaller + diffOfLarger;
}
//console.log(makeAnagram("cde", "cdf"));

function alternatingCharacters(s) {
	let deletions = 0;
	for (let i = 0; i < s.length - 2; i++) {
		if (s[i] === s[i + 1]) {
			deletions++;
		}
	}
	if (s[s.length - 2] === s[s.length - 1]) deletions++;
	return deletions;
}
//console.log(alternatingCharacters("aabaab"));

// .sort() under the hood uses Insertion sort for arrays with less than 10 values, greater than 10, the quick sort method is used
// quick sort does not sort in place time is O(n log(n)) space O(log(n)) ...insertion sort uses nested for loop time O(n^2) space o(1) it sorts the array in place
// sort & three pointer approach...could also do a non sort nested for loop..j = i + 1 if it reaches the end & does not match i return a[i] else i ++
function lonelyinteger(a) {
	a.sort((a, b) => a - b);

	if (a.length === 1) return a[0];
	for (let i = 1; i < a.length - 1; i++) {
		if (a[i] !== a[i - 1] && a[i] !== a[i + 1]) {
			console.log('mid');
			console.log(a);
			return a[i];
		} else if (i - 1 === 0 && a[i - 1] !== a[i]) {
			console.log('start');
			return a[i - 1];
		} else if (i + 1 === a.length - 1 && a[i + 1] !== a[i]) {
			console.log('end');
			return a[i + 1];
		}
	}
}
//console.log(lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]));

// x or approach...if values appear multiple times res would be 0 if only once res will be the odd number of times which in the case would be one
// function lonelyinteger(a){
//     let res = 0;
//     for(num of a){
//         res = res ^ num;
//     }
//     return res;
// }
//console.log(lonelyinteger([34, 95, 34, 64, 45, 95, 16, 80, 80, 75, 3, 25, 75, 25, 31, 3, 64, 16, 31]));

// O(n) Time   O(n) space
function runLengthEncoding(string) {
	const output = [];
	let counter = 1;
	for (let i = 1; i < string.length; i++) {
		if (string[i] !== string[i - 1] || counter === 9) {
			output.push(counter.toString());
			output.push(string[i - 1]);
			counter = 0;
		}
		counter++;
	}

	output.push(counter.toString());
	output.push(string[string.length - 1]);

	return output.join('');
}
//console.log(runLengthEncoding("1a1a"));

function countSwaps(a) {
	let numberOfSwaps = 0;

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a.length - 1; j++) {
			if (a[j] > a[j + 1]) {
				swap(j, j + 1, a);
				numberOfSwaps++;
			}
		}
	}

	function swap(i, j, a) {
		let temp;
		temp = a[j];
		a[j] = a[i];
		a[i] = temp;
	}

	const firstElement = a[0];
	const lastElement = a[a.length - 1];

	console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
	console.log(`First Element: ${firstElement}`);
	console.log(`Last Element: ${lastElement}`);
}
//console.log(countSwaps([6,4,1]));

function minimumAbsoluteDifference(arr) {
	arr.sort((a, b) => a - b);
	function diff(a, b) {
		return Math.abs(a - b);
	}
	let minAbsDiff = Infinity;
	for (let i = 1; i < arr.length; i++) {
		const runningDiff = diff(arr[i], arr[i - 1]);
		if (minAbsDiff > runningDiff) {
			minAbsDiff = runningDiff;
		}
	}

	return minAbsDiff;
}
//console.log(minimumAbsoluteDifference([-59,-36,-13,-1,-53,-92,-2,-96,-54,75]));

function minimumBribes(q) {
	const TOO_CHAOTIC = 'Too chaotic';
	let total = 0;

	for (let current_pos = 0; current_pos < q.length; current_pos++) {
		// getting original position using 0 indexing (starts at 0)
		const origianl_pos = q[current_pos] - 1;

		// diff = how far person has moved
		const diff = origianl_pos - current_pos;

		// if person has moved more than two spot return
		if (diff > 2) {
			return console.log(TOO_CHAOTIC);
		}

		if (diff <= 0) {
			// check each person starting from one person ahead of original position up until current position
			for (let i = Math.max(0, origianl_pos - 1); i < current_pos; i++) {
				const start_pos_of_forward_person = q[i] - 1;

				// if person in front of current person started behind current person
				// then current person must have been bribed by them.
				if (start_pos_of_forward_person > origianl_pos) {
					total++;
				}
			}
		}
	}
	console.log(total);
}
//console.log(minimumBribes([2,1,5,3,4]));

function compareTriplets(a, b) {
	const output = [];
	let aResults = 0;
	let bResults = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) {
			aResults++;
		} else if (b[i] > a[i]) {
			bResults++;
		}
	}
	output.push(aResults, bResults);

	return output;
}
//console.log(compareTriplets([10,12,50], [20,20,10]));

function classPhotos(redShirtHeights, blueShirtHeights) {
	function sort(arr) {
		arr.sort((a, b) => {
			return a - b;
		});
	}

	sort(redShirtHeights);
	sort(blueShirtHeights);

	let redTallerCounter = 0;
	let blueTallerCounter = 0;
	const length = redShirtHeights.length;

	for (let i = 0; i < redShirtHeights.length; i++) {
		if (redShirtHeights[i] > blueShirtHeights[i]) {
			redTallerCounter++;
		} else if (redShirtHeights[i] < blueShirtHeights[i]) {
			blueTallerCounter++;
		}
	}

	if (redTallerCounter === length || blueTallerCounter === length) {
		return true;
	} else {
		return false;
	}
}
//console.log(classPhotos([5,8,1,3,4], [6,9,2,4,5]));

function aVeryBigSum(arr) {
	const output = arr.reduce((a, b) => {
		return a + b;
	});
	return output;
}
//console.log(aVeryBigSum([55,999,56556,23552]));

function arraySign(nums) {
	const multipliedSum = nums.reduce((a, b) => a * b);

	if (multipliedSum < 0) {
		return -1;
	}

	if (multipliedSum > 0) {
		return 1;
	}

	if (multipliedSum === 0) {
		return 0;
	}
}
//console.log(arraySign([1,5,5,4]));

function checkIfPangram(sentence) {
	const pangram = 'thequickbrownfoxjumpsoverthelazydog';
	const sentenceDict = {};

	if (sentence.length < 26) {
		return false;
	}
	for (let i = 0; i < sentence.length; i++) {
		sentenceDict[sentence[i]] = true;
	}
	for (letter of pangram) {
		if (!sentenceDict[letter]) {
			return false;
		}
	}
	return true;
}
//console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));

function whatFlavors(cost, money) {
	const prices = {};

	for (let i = 0; i < cost.length; i++) {
		const potentialMatch = money - cost[i];
		if (potentialMatch in prices) {
			console.log(prices[potentialMatch], i + 1);
		} else {
			prices[cost[i]] = i + 1;
		}
	}
}
//console.log(whatFlavors([2,1,3,5,6], 5));

// this fails algoexpert? can you not use 1,5 twice as pairs?
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	redShirtSpeeds.sort((a, b) => a - b);
	blueShirtSpeeds.sort((a, b) => a - b);

	const tandemSpeeds = [];

	for (let i = 0; i < redShirtSpeeds.length; i++) {
		let j = redShirtSpeeds.length - 1 - i;
		if (fastest) {
			tandemSpeeds.push(Math.max(redShirtSpeeds[i], blueShirtSpeeds[j]));
		} else {
			tandemSpeeds.push(Math.min(redShirtSpeeds[i], blueShirtSpeeds[j]));
		}
	}

	const reducer = (a, b) => a + b;

	const speed = tandemSpeeds.reduce(reducer);

	console.log(tandemSpeeds);

	return speed;
}
//console.log(tandemBicycle([1,2,3,4,5], [1,2,3,4,5], false));

function staircase(n) {
	for (let i = 1; i <= n; i++) {
		console.log(' '.repeat(n - i) + '#'.repeat(i));
	}
}
//console.log(staircase(4))

function miniMaxSum(arr) {
	arr.sort((a, b) => {
		return a - b;
	});
	const min = arr[0] + arr[1] + arr[2] + arr[3];
	const max = arr[1] + arr[2] + arr[3] + arr[4];
	console.log(min, max);
}

function birthdayCakeCandles(candles) {
	candles.sort((a, b) => {
		return b - a;
	});

	let tallest = candles[0];
	let counter = 1;

	for (let i = 1; i < candles.length; i++) {
		if (candles[i] === tallest) {
			counter++;
		} else {
			break;
		}
	}
	return counter;
}
//console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));

function maximumToys(prices, k) {
	prices.sort((a, b) => {
		return a - b;
	});

	let count = 0;
	let output = 0;
	for (let i = 0; i < prices.length; i++) {
		if (count <= k) {
			count += prices[i];
			output++;
		}
	}
	return output - 1;
}
//console.log(maximumToys([1,2,3,4], 7));

function arrayStringsAreEqual(word1, word2) {
	const string1 = word1.join('');
	const string2 = word2.join('');

	if (string2.length !== string1.length) {
		return false;
	}

	for (let i = 0; i < string1.length; i++) {
		if (string1[i] !== string2[i]) {
			return false;
		}
	}
	return true;
}
//console.log(arrayStringsAreEqual(['a','cb'], ['ab', 'c']));

//Given an integer n and an integer start.
//Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.
//Return the bitwise XOR of all elements of nums.

function xorOperation(n, start) {
	let numsArray = [];
	let result;

	for (let i = 0; i < n; i++) {
		numsArray.push(start + 2 * i);
	}

	for (let i = 0; i < numsArray.length; i++) {
		result ^= numsArray[i];
	}

	return result;
}
//console.log(xorOperation(10, 5));

// step one flip / reverse it
// step two invert it / each 0 is replaced by 1 & 1 is replaced by 0
function flipAndInvertImage(image) {
	for (let i = 0; i < image.length; i++) {
		let left = 0;
		let right = image[i].length - 1;
		while (left < right) {
			let temp = image[i][right];
			image[i][right] = image[i][left];
			image[i][left] = temp;
			left++;
			right--;
		}
	}

	for (let i = 0; i < image.length; i++) {
		for (let j = 0; j < image.length; j++) {
			if (image[i][j] === 1) {
				image[i][j] = 0;
			} else {
				image[i][j] = 1;
			}
		}
	}

	return image;
}
//console.log(flipAndInvertImage([ [1,1,0], [1,0,1], [0,0,0] ]));

function countStudents(students, sandwiches) {
	let tooPicky = 0;
	while (tooPicky !== students.length) {
		if (students[0] === sandwiches[0]) {
			//If student eats sandwich
			students.shift(); //first student gone
			sandwiches.shift(); //first sandwich gone
			tooPicky = 0; //reset refusals count
		} else {
			students.push(students[0]); //first student to back of line
			students.shift(); //first student gone from front of line
			tooPicky++; //increment refusals count; if all students in the lineup refuse, the while loop stops
		}
	}
	return students.length;
}
//console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));

function sumOddLengthSubarrays(arr) {
	let i = 1;
	let sum = 0;
	while (i <= arr.length) {
		for (let j = 0; j <= arr.length - i; j++) {
			for (let k = j; k < i + j; k++) {
				sum += arr[k];
			}
		}
		i += 2;
	}
	return sum;
}
//console.log(sumOddLengthSubarrays([1,4,2,5,3]));

function firstNoneRepeatingCharacter(string) {
	const letters = {};

	for (let i = 0; i < string.length; i++) {
		if (string[i] in letters) {
			letters[string[i]] += 1;
		} else {
			letters[string[i]] = 1;
		}
	}

	if (string.length === 1) {
		return 0;
	}

	for (let i = 0; i < string.length; i++) {
		if (letters[string[i]] === 1) {
			return i;
		}
	}

	return -1;
}
//console.log(firstNoneRepeatingCharacter("ab"));

function maxNumberOfBalloons(text) {
	let map = new Map();
	for (let i = 0; i < text.length; i++) {
		map.set(text[i], map.get(text[i]) + 1 || 1);
	}

	if (
		map.has('b') &&
		map.has('a') &&
		map.has('l') &&
		map.has('o') &&
		map.has('n')
	) {
		return Math.min(
			map.get('b'),
			map.get('a'),
			Math.floor(map.get('l') / 2),
			Math.floor(map.get('o') / 2),
			map.get('n'),
		);
	}
	return 0;
}
//console.log(maxNumberOfBalloons('balloon'));

function sherlockAndAnagrams(s) {
	const duplicatesCount = s
		.split('')
		.filter((v, i) => s.indexOf(v) !== i).length;

	if (!duplicatesCount) return 0;

	let anagramsCount = 0;

	const arr = getAllSubstrings(s);

	for (let i = 0; i < arr.length; i++) {
		anagramsCount += countAnagrams(i, arr);
	}

	return anagramsCount;

	// helpers
	function getAllSubstrings(str) {
		let i,
			j,
			result = [];

		for (i = 0; i < str.length; i++) {
			for (j = i + 1; j < str.length + 1; j++) {
				result.push(str.slice(i, j));
			}
		}
		return result;
	}

	function isAnagram(str1, str2) {
		const hist = {};

		for (let i = 0; i < str1.length; i++) {
			const char = str1[i];
			if (hist[char]) {
				hist[char]++;
			} else {
				hist[char] = 1;
			}
		}

		for (let j = 0; j < str2.length; j++) {
			const char = str2[j];
			if (hist[char]) {
				hist[char]--;
			} else {
				return false;
			}
		}
		return true;
	}

	function countAnagrams(currentIndex, arr) {
		const currentElement = arr[currentIndex];
		const arrRest = arr.slice(currentIndex + 1);
		let counter = 0;

		for (let i = 0; i < arrRest.length; i++) {
			if (
				currentElement.length === arrRest[i].length &&
				isAnagram(currentElement, arrRest[i])
			) {
				counter++;
			}
		}

		return counter;
	}
}
//console.log(sherlockAndAnagrams("abba"));

// assuming its already sorted, return index, if target is not in the array return -1
function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
//console.log(binarySearch([0,1,21,33,45,45,61,71,72,73], 33));

function minOperations(nums) {
	let output = 0;

	if (nums.length === 1) {
		return output;
	}

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] >= nums[i + 1]) {
			let diff = nums[i] - nums[i + 1] + 1;
			nums[i + 1] = nums[i + 1] + diff;
			output += diff;
		}
	}
	return output;
}
//console.log(minOperations([1,5,2,4,1]));

function countTriplets(arr, ratio) {
	let totalCount = 0;
	const possibilites = {};
	const combos = {};

	arr.forEach((number) => {
		totalCount += combos[number] || 0;
		const nextNumber = number * ratio;

		combos[nextNumber] =
			(combos[nextNumber] || 0) + (possibilites[number] || 0);

		possibilites[nextNumber] = (possibilites[nextNumber] || 0) + 1;
	});

	return totalCount;
}
//console.log([1,4,16,64], 4);

function maxIceCream(costs, coins) {
	costs.sort((a, b) => {
		return a - b;
	});

	let runningSum = 0;
	let output = 0;

	for (let i = 0; i < costs.length; i++) {
		if (runningSum + costs[i] > coins) {
			return output;
		} else {
			runningSum += costs[i];
			output++;
		}
	}
	return output;
}
//console.log(maxIceCream([1,6,3,1,2,5],20));

// another approach
function maxIceCream(costs, coins) {
	let numberOfIcecreams = 0;
	let sortedCosts = costs.sort((a, b) => a - b);
	let boyMoney = coins;

	while (boyMoney - sortedCosts[numberOfIcecreams] >= 0) {
		boyMoney -= sortedCosts[numberOfIcecreams];
		numberOfIcecreams++;
	}

	return numberOfIcecreams;
}

function decrypt(code, k) {}
//console.log(decrypt([5,7,1,4], 3))

function checkZeroOnes(s) {
	let zero = 0;
	let one = 0;
	let runningZero = 0;
	let runningOne = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '0') {
			runningOne = 0;
			runningZero++;
			if (runningZero > zero) {
				zero = runningZero;
			}
		} else {
			runningZero = 0;
			runningOne++;
			if (runningOne > one) {
				one = runningOne;
			}
		}
	}
	return one > zero;
}
//console.log(checkZeroOnes("11010011101"));

// n%2===0 means n is even start left = 0 and right 0  counter at 0
// first push to arr. left --  right ++ push to arr counter +=2... while counter !== n

function getConcatenation(nums) {
	const n = nums.length;
	const ans = [];

	for (let i = 0; i < nums.length; i++) {
		ans[i] = nums[i];
		ans[n + i] = nums[i];
	}
	return ans;
}

//console.log(getConcatenation([1, 2, 1]));

function findMajority(arr) {
	//let test = numbers[0].split(' ');
	const threshold = Math.floor(arr.length / 2);
	const map = {};
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		map[value] = map[value] + 1 || 1;
		if (map[value] > threshold) return value;
	}
	return -1;
}

console.log(findMajority([8, 8, 2, 4, 8, 4, 4, 4, 4]));
