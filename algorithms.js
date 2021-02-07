let abbie = [4,4,4,4,4,2];

function calcFunc (student_grades) {

let total_grade_score = 0;
let num_of_grades = student_grades.length;

for(i=0; i < num_of_grades; i++){
	   let grade = student_grades[i];
       if(grade< 1 || grade > 4){
       	return 'cant do'
       }else{
       	   total_grade_score += student_grades[i];
       }
          

}
       let gpa = total_grade_score / num_of_grades;
       return gpa;
}

//console.log(calcFunc(abbie));




const myArray = [
{appointmentDate: 55, appointmentTime: "12:05" },
{appointmentDate: 5564, appointmentTime: "10:30"},
{appointmentDate: 322, appointmentTime: "16:45"},
{appointmentDate: 12, appointmentTime: "15:05"},

]



const result = myArray.filter(word => word.appointmentDate > 13);


function compare(a, b) {
  const bandA = a.appointmentTime;
  const bandB = b.appointmentTime;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

//console.log(result.sort(compare));



// sort time this way  output will be 21,25,29,31 ect..

const people = [
  { name: "John", age: 21, time: "13:00" },
  { name: "Peter", age: 31, time: "12:30" },
  { name: "Andrew", age: 29, time: "10:00" },
  { name: "Thomas", age: 25, time: "10:00" },
  { name: "Thomas", age: 25, time: "11:30"},
  { name: "Thomas", age: 25, time: "14:30" }
];


let sortedPeople = people.sort( (a,b) =>{
	 if(a.time > b.time){
	 	return 1;
	 }else if(b.name > a.time){
	 	return -1;
	 }else{
	 	return 0;
	 }
});

//console.log(sortedPeople);

 
  

 

//////////////////////////////////////////////////////////////////
const myArrayyy = [
{appointmentDate: 12, appointmentTime: "12:05", stylist: "a" },
{appointmentDate: 12, appointmentTime: "10:30", stylist: "b"},
{appointmentDate: 12, appointmentTime: "15:05", stylist: "a"},
{appointmentDate: 12, appointmentTime: "15:05", stylist: "n"},
{appointmentDate: 12, appointmentTime: "15:05", stylist: "c"},

];

const time = "15:05";

const l = myArrayyy.filter(what => {
        if(time == what.appointmentTime){
        	return what.appointmentTime.length;
        }
})

 if(l.length >= 3){
 	//console.log("full")
 }else{
 	// console.log('not full')
 }
 
 //console.log(l.length)

function what() {
  let phone = "916-555-5987";

   let nex = phone.split('');

   nex.splice(3, 1);
   nex.splice(6, 1)
   let nexNum = nex.join('');


// console.log(nexNum);

}
  
 // what();



let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(3, 1)

//console.log(myFish);

 ////////////////////////////

// write a function which takes in a string and returns counts of ea character in the string 
function charCount(str){
	// make object to return at end
	var obj = {};
	// loop over str for ea character
	for(var char of str){
		 char = char.toLowerCase();
		// check to make sure it is alphanumeric, no spaces @#$% ect... only letters and numbers
		if(isAlphaNumeric(char)){
			obj[char] = ++obj[char] || 1;
		}
	}
	return obj;
}
	


// console.log(charCount("why hello there @richard"));


function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  
  return true;
}

//console.log(isAlphaNumeric("35"))


// Frequency counters
// write a function called same which accepts two arrays. 
//The function should return true if every value in the array has its corresponding value squared 
//in the second array. The frequency of values must be the same.
// Time complexity O (n)   linear 
const same = (arr1, arr2)=>{
  if(arr1.length !== arr2.length){
  	return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1){
  	frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
   for(let val of arr2){
  	frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for( let key in frequencyCounter1){
  	if(!(key ** 2 in frequencyCounter2)){
  		return false
  	}
  	if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
  		return false
  	}
  }
  return true
}

// console.log(same([2,5,8,10], [4,25,64, 100]));

// Frequency counter -anagram

const anagram = (arr1, arr2)=>{
  if(arr1.length !== arr2.length){
  	return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for(let val of arr1){
  	frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
   for(let val of arr2){
  	frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for( let key in frequencyCounter1){
  	if(!(key in frequencyCounter2)){
  		return false
  	}
  	if (frequencyCounter2[key] !== frequencyCounter1[key]){
  		return false
  	}
  }
  return true
}

 //console.log(anagram("rat", "tra"));



//////////// multiple pointers
//  Write a function called sumZero which accepts a sorted array on integers. The function should
// find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
function sumZero(arr){
	let left = 0;
	let right = arr.length -1;
	while(left < right) {
		let sum = arr[left] + arr[right];
		if(sum === 0){
			return [arr[left], arr[right] ];
		}else if(sum > 0){
			right --;		
	}else {
		left ++ ;
	}
  }
}

// console.log(sumZero([-5,-21,-25, -35, 1,2,3,5,8,18,20,35,38,40]));
// O (n)


function uniqueValues(arr){
   let same = 0 ;
   let i = 0;
   let j =  i + 1;
   while(j < arr.length -1 ){
   	
   	if( arr[i] === arr[j]){
        same ++ ;
        j ++ 

   	}else{
   		i ++
   	 }
   	 
   }
   return same;
    
  }

  // console.log(uniqueValues([1,1,1,2,2,5,15,15,15,20, 25, 25, 30]));


  function countUniqueValues(arr){
  	if(arr.length === 0){
  		return 0;
  	}
  	let i = 0;
  	let j;
  	for(j = 1; j < arr.length; j++){
  		if (arr[i] !== arr[j]){
  			i ++;
  			arr[i] = arr[j]
  		}
  	}
  	return i + 1;
  }

// console.log(countUniqueValues([1,2,3,5,5,5,8]));



///// function that returns highest consecutive sum, if num is 3 three in a row the sums to the highest
function maxSubarraySum(arr, num){
	let maxSum = 0;
	let tempSum =0;
	if(arr.length < num) return null;
	for(let i= 0; i < num; i++){
		maxSum += arr[i]
	}
	tempSum = maxSum;
	for(let i = num; i < arr.length; i++){
		tempSum = tempSum - arr[i - num ] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

//maxSubarraySum([2,6,9,2,1,8,5,6,3], 3 )



//// Divide & conquer   Time complexity =  Log(N)  BINARY SEARCH  array has to be sorted!!
//find out if the value ur looking for is in the array, if it is return the value if not return -1
function search(arr, val){
  let max = arr.length -1;
  let min = 0;
  let mid = 0;

  while(min <= max){
  	mid  = Math.floor((min + max) / 2)
  
  if(arr[mid] == val){
  	return mid;
  }
  else if( val > arr[mid]){
  	min = mid  + 1;
  }
  else{
  	max = mid -1;
  }
 }
   return -1;
}

 //console.log(search( [1,2,3,5,8], 8) );


///////recursion
function countDown(num){
	if(num<= 0){
		console.log("all done");
		return;
	}
	console.log(num);
	num--;
	countDown(num)
}
// countDown(5);


function power(base, exponent){
    if(exponent === 0) return 1;
	return base * power(base,exponent-1);

}
      
// console.log(power(7,3));

// under the hood indexOf() looks like  O(n)
function linear(arr, val){
	
	for(let i=0; i<arr.length; i++){
	  if(arr[i] === val){
        return i;
	  }
	}
	return -1;
}

	

// console.log(linear([5,22,66,68,44,77,77,24,365,24], 77));

function disemvowel(str) {
  let lower = str.toLowerCase();
  let stringArr = lower.split("");
  for(i=0; i< stringArr.length; i++){
	  if(stringArr[i] === "a" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u" ){
       stringArr.splice(i, 1)
	  }
  }
    let answer =  stringArr.join("");
      return answer;
  }

 // console.log(disemvowel("code wars online code checker does not work"));

// selction sort
function selectSort(arr){
   for(let i=0; i<arr.length; i++){
	  let lowest = i;
     for(let j = i+1; j<arr.length; j++){
		 if(arr[j] < arr[lowest]){
			 lowest = j;
		 }
	 }
	 let temp = arr[i]
	 arr[i] = arr[lowest];
	 arr[lowest] = temp;
   }
   return arr;

}
 //console.log(selectSort([34,22,10,19,17]));

 // Insertion Sort
 function insertionSort(arr){
	for(var i =1; i<arr.length; i++){
		let currentVal = arr[i];
		for(var j = i-1; j>=0 && arr[j] > currentVal; j--){
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentVal;
	}
	
	return arr
 }
 // console.log(insertionSort([22,65,12,63,244,1]));


 // merge sort //recursion helper function   
 function merge(arr1, arr2){
	 let results = [];
	 let i = 0;
	 let j = 0;
	 while(i<arr1.length && j < arr2.length){
		 if(arr2[j] > arr1[i]){
		   results.push(arr1[i]);
		   i++;
		 }else{
			 results.push(arr2[j]);
			 j++
		 }
	 }
	 while(i < arr1.length){
		 results.push(arr1[i])
		 i++
	 }
	 while(j < arr2.length){
		results.push(arr2[j])
		j++
	}
	 return results;
}

 
 function mergeSort(arr){
	if(arr.length <=1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0,mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
  } 
// console.log(mergeSort([569,505,25,21,2,65]));
 

// quick sort
function pivot(arr,start=0, end=arr.length-1){
	function swap(array, idx1, idx2){
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	 }
		
  let pivot = arr[start];
  let swapIdx = start;
  for(var i = start + 1; i<=end; i++){
	if(pivot > arr[i]){
		swapIdx++;
		swap(arr, swapIdx, i)
 
   }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

function quickSort(arr, left=0, right = arr.length -1){
	if(left<right){
		let pivotIndex = pivot(arr, left, right)
		quickSort(arr,left,pivotIndex-1);
		quickSort(arr,pivotIndex+1,right);
	}
   return arr;
}

// console.log(quickSort([5,66,99,2,505,21]));


// Nth Fibonacci first two are always 0,1
// [0,1,1,2,3,5,8,13,21,34]
// n = 4 output = 2  n=6 output=5
// fib(n) = fib(n-1) + fib(n-2) for n>2
// recursion way, bad way of doing it
function fib(n){
	if(n === 2){
		return 1
	}else if(n === 1){
		return 0
	}else{
		return fib(n-1) + fib(n-2);
	}
}

//console.log(fib(10))

//memoize way, memoize basically an object that you store ur values in, cached result when the same inputs occur again
// O(n) time & space
function memoNthFib(n, memo = {1:0, 2:1}){
   if(n in memo){
	   return memo[n];
   }else{
	   memo[n] = memoNthFib(n-1, memo) + memoNthFib(n-2, memo);
	   console.log(memo);
	   return memo[n];
	  
   }
}
//console.log(memoNthFib(10));


// best way of doing it, set array, & a while loop.. add the values & put the sum in slot 2 &
// move slot 2 to slot 1, then return your answer
// O(n) time  O(1) space  constant space  this is what makes it better than memo, memo stores all the vales, this just stores a constant 2 values in the array.
function getNthFib(n){
  var lastTwo = [0,1];
  var counter = 3;
  
  while(counter <=n){
	  let nextFib = lastTwo[0] + lastTwo[1];
	  lastTwo[0] = lastTwo[1];
	  lastTwo[1] = nextFib;
	  counter ++
  }
    if(n > 1){
		return lastTwo[1]
	}else{
		return lastTwo[0]
	}
}
// console.log(getNthFib(5));


// my version of indexOf()
const findIndex = (arr, val)=>{
      for(i=0; i<arr.length; i++){
		  if( arr[i] === val) {
          return `the value you are looking for is index number ${i}`;
		  }
	  }
	  return "were sorry, the value you are in search of is not in this array.";
}
const score = 88;
const credit = [55,66,88,22,21,988,15,22336,true, "save"];
//console.log(findIndex(credit, score)); 


//two number sum   Find two numbers in the array that add up to the target sum
// storing them in an object then accessing them method 
//O(n) time  O(n) space     (best way if you value time)
function twoNumberSum(array, targetSum){
     const nums = {};
      for(const num of array){
		 const potentialMatch = targetSum - num;
		 if(potentialMatch in nums){
           return [potentialMatch, num];
		 }else{
			 nums[num] = true;
		 }
	  }
	  return [];
}

const myTwoNumberSumArray = [3,5,-4,8,11,1,-1,6];
const mySum = 12;

//console.log(twoNumberSum(myTwoNumberSumArray, mySum));

// sorting the arr from smallest to largest, then creating two pointers
//left & right & adding them to see if they = target sum   time O(nLog(n)) space O(1)
// (best way if you value space)
function twoNumberSumPointer(arr, target){
     arr.sort(function(a,b){
           return a - b;
	 });
	 let left = 0;
	 let right = arr.length -1;
	 while(left < right){
		 let currentSum = arr[left] + arr[right];
		 if(target === currentSum){
             return [arr[left], arr[right]];
		 }else if(currentSum > target){
            right -=1
		 }else if(currentSum < target){
			left +=1
		}
		 }
		 return [];
	 }
//console.log(twoNumberSumPointer(myTwoNumberSumArray, mySum));


// while loop
function isValidSubSequence(array, sequence){
	  let arrIdx = 0;
	  let seqIdx = 0;
	  while(arrIdx < array.length && seqIdx < sequence.length){
         if(array[arrIdx] === sequence[seqIdx]){
			arrIdx +=1
			seqIdx +=1
		 }else{
			arrIdx +=1 
		  }	  
		 }
		 return seqIdx === sequence.length
	}
	const array = [5,1,22,25,6,-1,8,10,65];
    const sequence = [1,6,-1,10];
 //console.log(isValidSubSequence(array, sequence));


 // for loop
 function isValidSubSequenceee(array, sequence){
	let seqIdx = 0;
	for (value of array){
		if(seqIdx === sequence.length){
           break
		}
		if(sequence[seqIdx] === value){
		   seqIdx +=1;
		}
	}
	  return seqIdx === sequence.length;
  }
   //console.log(isValidSubSequenceee(array, sequence));


  const productArr = [2,5, [4,-5], 22, [14,[2,5],10], 2];

   function productSum(array, multiplier = 1){
		let sum = 0;
		for(const element of array){
			if(Array.isArray(element)){
				sum+= productSum(element, multiplier + 1)
			}else{
				sum += element;
			}
		}
		return sum * multiplier;
   }
  // console.log(productSum(productArr));



   function findThreeLargestNumbers(array){
		 const threeLargest = [null, null, null];
		for(num of array){
		updateLargest(threeLargest, num);
		}
		return threeLargest;
}
//helper
function updateLargest(threeLargest, num){
     if(threeLargest[2] === null || num > threeLargest[2]){
		 shiftAndUpdate(threeLargest, num, 2);
	 }else if(threeLargest[1] === null || num > threeLargest[1]){
             shiftAndUpdate(threeLargest, num, 1)
	 }else if(threeLargest[0] === null || num > threeLargest[0]){
		 shiftAndUpdate(threeLargest, num, 0)
	 }
}
//helper
function shiftAndUpdate(array, num, idx){
      for(let i = 0; i <= idx; i++){
		  if(i === idx){
			  array[i] = num;
		  }else {
			  array[i] = array[i + 1];
		  }
	  }
}
//const testArr = [141,1,17,-7,-17,-27,18,541,8,7,7];
//console.log(findThreeLargestNumbers(testArr));
   
function recursivePalindrome(str){
	let left = 0;
	let right = str.length -1;
	if(str.length < 2){
		return true;
	}
	
      if(str[left] === str[right ]){
		 return recursivePalindrome(str.slice(1, right));
	  }
	  return false
}
//console.log(recursivePalindrome("racecar"));

// O(n) time  O(1) space
function palindrome(str){
	let left = 0;
	let right = str.length -1;
	while(left < right){
		if(str[left] !== str[right]){
			return false
		}else{
			left ++
			right --
		}
	}
	return true
}

 //console.log(palindrome("racecar"));


// o(n) time  o(n) space
 function ceaserCypher(string, key){
	const newLetters= [];
	const newKey = key % 26;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(const letter of string){
		newLetters.push(getNewLetter(letter, newKey, alphabet));
	}
       return newLetters.join('');
	
 }
 function getNewLetter(letter,key,alphabet){
	 const newLetterCode = alphabet.indexOf(letter) + key;
	 return alphabet[newLetterCode % 26];
 }

 //console.log( ceaserCypher("adf", 4)); //e, h, j

 class User {
	 constructor(email, name){
		 this.email = email;
		 this.name = name
	 }
 }

const userEmail = "rick@yahoo.com";
const userName = "ricky";
const user1 = new User(userEmail, userName);
//console.log(user1.name);

function reducerUnderHood(arr){
	let output = 0;
	for(let i =0; i<arr.length; i++){
	  output += arr[i];
	  // console.log(output);
	  
	} 
	return output;
}
//console.log(reducerUnderHood([1,2,3,4,8]));


function titleCase(str){

		let toLower = str.toLowerCase().split(" ")
		let newSenctence = toLower.map(function(value){
         return value.replace(value.charAt(0), value.charAt(0).toUpperCase())
		});
		
		return newSenctence.join(" ");
}
//console.log(titleCase("I am a little tea pot"));




function searchInputPosition(arr, target){
        for(i=0; i<arr.length; i++){
			if(arr[i] >= target){
				return i
			}
		}
		return arr.length;
}

//console.log(searchInputPosition([1,3,5,6], 7));
// 2


function removeDuplicates(nums){
	    let i = 0;
		 for (let j = 1; j < nums.length; j++) {
		// if they are the same do nothing but keep looping through with j
		// if they are NOT the same increase i by 1...Then swap j to i
        if (nums[j] != nums[i]) {
			i++;
	        nums[i] = nums[j];
          }
	   }
         return i + 1;
		}
	
		 


 //console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

 const removeElements = (nums, val) => {
		   let i = 0;
		   for ( j = 0; j < nums.length; j++) {
			if (nums[j] != val) {
				nums[i] = nums[j];
				i++;
			}
		}
		 console.log(nums)
         return i
   }

   //console.log(removeElements([0,1,2,2,3,0,4,2], 2));
                              
   
   // if it contains dups retrun true  else return false
   function contiansDuplicates(arr){
		const nums = {};
		for(num of arr){
			if(num in nums){
				return true;
            }nums[num] = true;
		}
		return false;
   }
   //console.log(contiansDuplicates([1,2,3,4,5]));



   // check if t is an anagram of s
   function isAnagram(s,t){
	    if(s.length != t.length){
			return false;
		}

		const sArray = s.split("");
		const tArray = t.split("")
		sArray.sort();
		tArray.sort();

		for(let i = 0; i < sArray.length; i++){
            if(sArray[i] !== tArray[i]){
				return false
			}
		}
		return true
   }
   //console.log(isAnagram("anagram", "nagaram"));


   
   function smallestDifference(arrayOne, arrayTwo) {
	// sort both arrays
	  arrayOne.sort((a,b) => a-b);
	  arrayTwo.sort((a,b) => a-b);
	  // create two pointers
	  let i = 0;
	  let j = 0;
	  // smalletst difference
	  let smallest = Infinity;
	  // current difference
	  let current = Infinity;
	  // smallest pair arrary to be the answer
	  let smallestPair = [];
	  
	  while(i < arrayOne.length && j< arrayTwo.length){
		 let firstNum = arrayOne[i];
			 let secondNum = arrayTwo[j];
			if(firstNum < secondNum){
				  current = secondNum - firstNum ;
				  i ++
				  
			  }else if(secondNum < firstNum){
				  current = firstNum - secondNum;
				  j ++
			  }else{
				  return [firstNum, secondNum];
			  }
		  if(smallest > current){
		      smallest = current;
			  smallestPair = [firstNum, secondNum];
		   }
	   }
	  return smallestPair;
  }

  //console.log(smallestDifference([55,-21,45,23,65,150,132], [25,688,555,-55,99,12]));


function readability(str){
	const letters = str.split("");
	const words = str.split(" ");
	let sentence = 0;
	let numberOfLetters = letters.length;
	
	for(let i = 0; i< letters.length; i++){
        if(letters[i] === "." || letters[i] === "!"){
			sentence ++;
		}
	}
          for(let k = 0; k<letters.length; k++){
			if(letters[k] === ""  || letters[k] === " / " || letters[k] === " . " || letters[k] === " ! "){	
				numberOfLetters --
		  }
		 
		}

	
	
             return [numberOfLetters, words.length, sentence]
	
}

//console.log(readability("Congratulations! Today is your day. You're off to Great Places! You're off and away!"))


const singleNumber = (arr) => {
	let result = 0;
	for(let i = 0; i< arr.length; i++){
	   result ^= arr[i]
	   
	}
	
	return result;	
}
//console.log(singleNumber([4,1,2,1,2,4,10,8,6,6,8,12,12]));



function radixSort(arr){
   

   }

//console.log(radixSort([25,67,101,250,12]));

function radixHelperGetDigit(num, i){
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixHelperDigitCount(n){
	if(n === 0) return 1;
	return Math.floor(Math.log10(Math.abs(n))) + 1;
}

function radixHelperMostDigits(nums){
	let maxDigits = 0;
	for(let i = 0; i<nums.length; i++){
		maxDigits = Math.max(maxDigits, radixHelperDigitCount(nums[i]));
	}
	return maxDigits;
}



