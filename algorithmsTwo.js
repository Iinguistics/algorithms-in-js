// happy number if it breaks down to 1 true  else false
// access ea digit & sq it, then add all the sq digits to find sum
// then repeat until you get to 1, the sum becomes the new number
function happy(number, counter=0){
  result = false;

 if(counter < 20){
  let sum = number.toString().split('').map(n => n*n).reduce((a,b) => a+b);

  if(sum === 1){
      return result = true;
  }else{
      counter ++
      happy(sum, counter)
  }
 }
    return result;
}
//console.log(happy(19));

function isomorphic(s,t){
    const tLen = t.length;
    if(s.length !== tLen){
        return false
    }
    const letters = {};
    for(let i = 0; i<=s.length; i++){
        if(!letters[s[i]]){
            letters[s[i]] = t[i];
        }else if(letters[s[i]] !== t[i]){
            console.log(letters)
            return false
        }
    }
    return true
} 
//console.log(isomorphic("egg", "add"));


function wordPattern(pattern, str){
    const patternData = {};
    const strData = {};
    const myArr = str.split(" ");
      if(pattern.length !== myArr.length){
        return false;
    }
    for(let i = 0; i < pattern.length; i++){
      if(!(patternData)[pattern[i]] && !(strData)[myArr[i]]){
          patternData[pattern[i]] = myArr[i];
          strData[myArr[i]] = pattern[i];
      }
 
      if(patternData[pattern[i]] !== myArr[i] && strData[myArr[i]] !== pattern[i]){
          return false;
      }
    }
    console.log(strData);
    return true
}


//console.log(wordPattern("abc", "cat dog dog"));


//"hello world here", return "here world hello"
// split string into words
// two pointers start & end swap then i++ j--  while i<=j
function reverseWordsString(str){
    //const newStr = [...str]; turns str to arr but ea letter not word
    const newStr = str.split(" ");
    let j = newStr.length - 1;
    let i = 0;
    let temp;
    while(i <= j){
    temp = newStr[j];
    newStr[j] = newStr[i];
    newStr[i] = temp;
    i++
    j--
    }
    newStr.join("");
    return newStr;
}
 //console.log(reverseWordsString("hello world here"))

function moveElementToEnd(array, toMove){
      let i = 0;
      let temp;
      for(let j = 0; j<array.length; j++){
          if(array[j] !== toMove){
              temp = array[j];
              array[j] = array[i];
              array[i] = temp;
              i++;
          }
      }
      return array;
}

const moveArr = [2,1,2,2,2,3,4,2];
//console.log(moveElementToEnd(moveArr, 2));

function twoNumberSum(array, target){
    const nums = {};
    for(num of array){
        const potential = target - num;
        if(potential in nums){
            return [potential, num];
        }else{
            nums[num] = true;
        }
    }
    return [];
}
//console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));

function threeNumberSum(array, target){
  array.sort((a,b)=>{
  return a-b;
  });
  const matched = [];
  for(let i=0; i<array.length - 2; i++){
      let l = i + 1;
      let r = array.length -1;
      while(l < r){
      const cs = array[i] + array[l] + array[r];
      if(cs === target){
          matched.push( [array[i],array[l],array[r]] );
          l++;
          r--;
      }else if(cs<target){
      l++;
      }else if(cs>target){
      r--;
       }
      }
    } 
   return matched;
}
//console.log(threeNumberSum([12,3,1,2,-6,5,-8,6], 16));


function isMonotonic(arr){
    if(arr.length <= 2){
        return true;
    }
   let decreasing = true;
   let increasing = true;

   for(let i = 1; i<arr.length; i++){
       if(arr[i] < arr[i - 1]){
        increasing = false;
       }
       if(arr[i] > arr[i - 1]){
        decreasing = false;
        }
     }
    return decreasing || increasing;
}

//console.log(isMonotonic([22,56,100,250]));

function arrangeWords(str){
    const strToArr =  str.split(" ");
    const newStr = strToArr.sort()
   const answer = newStr.join(" ")
    return answer
}
//console.log(arrangeWords("this is a test"));


//loop & push first arr normally
// push end value of all other arrays

 
function smallDiff(arr1, arr2){
    


}
//console.log(smallDiff([5,8,9,21,-55], [56,99,45,22,1]));


function reverseOnlyLetters(newS){
  const alpha = {
      a:true,e:true,i:true,m:true,q:true,u:true,y:true,
      b:true,f:true,j:true,n:true,r:true,v:true,z:true,
      c:true,g:true,k:true,o:true,s:true,w:true,
      d:true,h:true,l:true,p:true,t:true,x:true,
  };
  const lower = newS.toLowerCase();
  const s = lower.split("");
  let l = 0
  let r = s.length - 1;
  while(l < r){
      if(s[l] && s[r] in alpha){
          let temp =  s[r];
          s[r] = s[l];
          s[l] = temp;
          l ++
          r --
      }else if(s[l] in alpha === false){
          l ++
      }else if(s[r] in alpha === false){
        r --
    }
  }
    return s.join("");

    
}
//console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));not working



//min max stack construction   classes are just blueprints, you can set a var to a new class which creates that var into an object with access to all the blueprints methods
class MinMaxStack {
    constructor(){
        this.minMaxStack =[];
        this.stack = [];
    }
        peek(){
            return this.stack[this.stack.length -1];
        }

        pop(){
            this.minMaxStack.pop();
            return this.stack.pop();
        }

         push(number){
             const newMinMax = { min:number, max:number };
             if(this.minMaxStack.length){
                 const lastMinMax = this.minMaxStack[this.minMaxStack.length-1];
                 newMinMax.min = Math.min(lastMinMax.min, number);
                 newMinMax.max = Math.max(lastMinMax.max, number);
             }
             this.minMaxStack.push(newMinMax);
             this.stack.push(number);
         }

         getMin(){
             return this.minMaxStack[this.minMaxStack.length-1].min;
         }

         getMax(){
            return this.minMaxStack[this.minMaxStack.length-1].max;
        }
};

// const test = new MinMaxStack();
// test.push(5);
// test.push(12);
// test.push(2);
// console.log(test.getMin());
// console.log(test);



function nthTest(n){
  let counter = 3;
  const lastTwo = [0,1];
  while(counter <= n){
    let nFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nFib;
    counter ++;
  }
  if(n < 2){
      return lastTwo[0];
  }else{
      return lastTwo[1];
  }
  
}
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

function maxProduct(nums){
   nums.sort((a,b)=>{
   return a - b;
   });
   const i = nums.length - 2;
   const j = nums.length - 1;
   const ianswer = nums[i] - 1; 
   const janswer = nums[j] - 1;

   return ianswer * janswer;
}
//console.log(maxProduct([3,4,5,2]));


function balancedBrackets(str){
    const openingBrackets = "([{";
    const closingBrackets = ")]}";
    const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
    const stack = [];
    for(const char of str){
       if(openingBrackets.includes(char)){
           stack.push(char);
       }else if(closingBrackets.includes(char)){
           if(stack.length == 0){
               return false;
           }
           if(stack[stack.length - 1] === matchingBrackets[char]){
               stack.pop();
           }else{
               return false;
           }
       }
    }
    return stack.length === 0;
  };
  //console.log(balancedBrackets("([])"));

class Emac {
    constructor(type,model,year,price)  {
       this.type = type
       this.carmodel = model;
       this.year = year;
       this.carprice = price;
    }
    addCar(){
        if(this.type === 'ford'){
            return `you have a ${this.carmodel}, found on road dead, get a better car.`
        }else{
            return `you have a ${this.carmodel}`
        }
    
    }
};
let myFord = new Emac("ford","fusion","2008", "$5,000");
let myHonda = new Emac("honda","civic","2015", "$22,000");

// console.log(myFord.addCar());
// console.log(myHonda.addCar());

function moveTest(arr, target){
   let i = 0;
   let temp;
   for(let j = 1; j<arr.length; j++){
       if(arr[j] !== target){
           temp = arr[j];
           arr[j] = arr[i];
           arr[i] = temp;
           i++;
           console.log('waht')
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
const majorityElement = (arr)=>{
    if(arr.length === 1){
        return arr[0];
    }
  arr.sort((a,b)=>{
      return a - b;
  });
  const marjority = arr.length / 2;
  let counter = 1;
  let i = 0;
    for(let j = 1; j < arr.length; j++){
     if(arr[i] !== arr[j]){
       i++;
     }else if(arr[i] === arr[j]){
           counter ++
       }
     if(counter > marjority){
         return arr[i]
      }
     }
    }
//console.log(majorityElement([2,2,1,1,1,1,2]));


//A fixed point in an array is an element whose value is equal to its index. This question was asked by Apple.
function fixedPoint(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === i){
            return i;
        }
    }
    return false;
}
//console.log(fixedPoint([5,99,8,4,6,88,6]));


function pivotIndex(nums){
    if(nums.length === 0) return -1;
    if(nums.length === 1) return 0;
  
    let leftSum = 0;
    let rightSum = 0;
    for(let i = 1; i<nums.length; i++){
        rightSum += nums[i];
    }

    for(let i = 0; i<nums.length; i++){
        if(leftSum === rightSum){
            return i;
        }else if(i <nums.length - 1){
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
function longestPeak(arr){
    let longestPeakLength = 0;
    let i = 1;
    while(i < arr.length - 1){
        //if the value's to the left & right are both smaller than the current value, the current value is a peak
        const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
        if(!isPeak){
            i++;
            continue;
        }
        let leftIdx = i - 2;
        while(leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]){
            leftIdx --;
        }
        let rightIdx = i + 2;
        while(rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]){
            rightIdx ++;
        }
        const currentPeakLength = rightIdx - leftIdx - 1;
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        i = rightIdx;
    }
    return longestPeakLength;
}
//console.log(longestPeak([1,2,3,3,4,0,10,6,5,-1,-3,2,3]));


function arrayOfProducts(arr){
    const answerArr = [];
   
}
//console.log(arrayOfProducts([5,1,4,2]))


function relativeSortArray(arr1, arr2){
   const exist = [];
   const nonExist = [];
   for(num of arr1){
       if(arr2.includes(num)){
           exist.push(num);
       }else{
           nonExist.push(num);
       }
   }
    exist.sort((x, y) => (arr2.indexOf(x) - arr2.indexOf(y))).concat(nonExist.sort((x, y) => x - y))
  
}
//console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]));


function slowestKeyy(releaseTimes, keysPressed){
  var potentialHighest;
  var potentialHighestKey = 97;
  const highestReleaseTime = [0];
  for(let i = 1; i < releaseTimes.length; i++){
      let currentKey = keysPressed[i].charCodeAt(0); 
      if(i === 1){
          potentialHighest = releaseTimes[0];
          highestReleaseTime[0] = potentialHighest;
          highestReleaseTime[1] = keysPressed[0];
          
      }else{
        potentialHighest = releaseTimes[i] - releaseTimes[i - 1];
      }

      if(potentialHighest === highestReleaseTime[0] && currentKey > potentialHighestKey){
        highestReleaseTime[1] = keysPressed[i];
      }
      
      if(potentialHighest > highestReleaseTime[0]){
          highestReleaseTime[0] = potentialHighest;
          highestReleaseTime[1] = keysPressed[i];
      }
      
  }
  return highestReleaseTime[1];
}


//console.log(slowestKeyy([12,23,36,46,62], "spuda"));


function slowestKey(releaseTimes, keysPressed){
    let max = -Infinity;
    let result;    
    keysPressed.split('');
    
    releaseTimes.reduce((acc, curr, idx) => {
        if (curr - acc > max || curr - acc === max && keysPressed[idx] > result){
            max = curr - acc;
            result = keysPressed[idx];
        };        
        return acc = curr;       
    }, 0);
    
    return result;
}
//console.log(slowestKey([12,23,36,46,62], "spuda"));

function heightChecker(heights){
    const sortedHeights = [...heights].sort((a,b) => a - b)
    let count = 0;
    
    for(let i=0; i<heights.length; i++) {
        if(heights[i] !== sortedHeights[i]) {
            count++
        }
    }
    
    return count
}
//console.log(heightChecker([5,1,2,3,4]));


// two number sum..but instead of returning the values it returns the index's
function twoSum(arr, target){
    const nums = {};
    for(let i = 0; i<arr.length; i++){
        const potentialMatch = target - arr[i];
        if(potentialMatch in nums){
            return [nums[potentialMatch], i];
        }else{
            nums[arr[i]] = i;
        }
    }
    return [];
}
//console.log(twoSum([2,7,11,15], 9));


function sortedSquares(nums){
  sqArr = [];
  for(let i = 0; i<nums.length; i++){
      sqArr.push(nums[i] * nums[i]);
  }
  //sort
  sqArr.sort((a,b)=>{
      return a - b;
  });
  return sqArr;
}
//console.log(sortedSquares([-7,-3,2,3,11]));


// using memoization  space O(n)  time O(n)
function firstDuplicateValue(array){
    const nums = {};
    for(let i = 0; i < array.length; i++){
      if(array[i] in nums){
          return array[i];
      }else{
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
    for(let i = 0; i<string.length; i++){
        const character = string[i];

        if(character === ' '){
            words.push(string.slice(startOfWord, i));
            startOfWord = i;
        }else if(string[startOfWord] === ' '){
            words.push(' ');
            startOfWord = i;
        }
    }
    words.push(string.slice(startOfWord));

    reverseList(words);
    return words.join('');

    function reverseList(arr){
        let temp;
        let left = 0;
        let right = arr.length -1;
        while(left < right){
            temp = arr[right];
            arr[right] = arr[left];
            arr[left] = temp;
            left ++;
            right --;
        }
    }
}
//console.log(reverseWordsInString('testing abc 123'));


function plusOne(digits){
    for(let i = digits.length-1; i >= 0; i --){
        if(digits[i] !== 9){
            digits[i] += 1;
            return digits;
        }else{
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

    for(let i = 0;  i<results.length; i++){
    if(team.hasOwnProperty(competitions[i][1]) && results[i] === 0){
        team[competitions[i][1]] +=3;
    }else if(results[i] === 0){
        team[competitions[i][1]] = 3;
    }

    if(team.hasOwnProperty(competitions[i][0]) && results[i] === 1){
        team[competitions[i][0]] +=3;
    }else if(results[i] === 1){
        team[competitions[i][0]] = 3;
    }
  }
    return Object.keys(team).reduce((a, b) => team[a] > team[b] ? a : b);
}
//console.log(tournamentWinner(testcompetitions, testResults));


function greatestNumberofCandies(candies, extraCandies){
    const results = [];
    for(let i = 0; i<candies.length; i++){
        let left = 0;
        let notGreatest = false;
        while(left < candies.length){
            if(candies[i] + extraCandies >= candies[left]){
                left ++;
            }else{
                notGreatest = true;
                left ++;
            }
        }
        if(notGreatest === false){
            results.push(true)
        }else{
            results.push(false);
        }
    }
    return results;
}
//console.log(greatestNumberofCandies([1,3,9], 4));

// another way of solving it
function greatestNumberofCandiess(candies, extraCandies){
    const results =[];
    const max = Math.max(...candies);
    for(const candie of candies){
    results.push((candie+extraCandies) >= max);
    }
    return results;
}
//console.log(greatestNumberofCandiess([2,3,5,1,3], 3));



//Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn]. Return the array in the form [x1,y1,x2,y2,...,xn,yn].
function shuffle(nums, n){
    const output = [];
    for(let x = 0; x<nums.length / 2; x++){
        let y = n + x;
        output.push(nums[x], nums[y])
    }
    return output;
}
//console.log(shuffle([1,2,3,4,4,3,2,1], 4));


function maxWealth(accounts){
    const output = [];
    for(let i = 0; i<accounts.length; i++){
      output.push(accounts[i].reduce((a,b)=>{
       return a + b;
      }));
    }
   return Math.max(...output);
}
//console.log(maxWealth([[1,2,3],[3,2,1]]));



function numIdenticalPairs(nums){
   let output = 0;
   for(let i = 0; i<nums.length; i++){
       let fastRunner = i + 1;
       while(fastRunner < nums.length){
           if(nums[i] === nums[fastRunner]){
               output ++;
               fastRunner ++;
           }else{
               fastRunner ++;
           }
       }
   }
   return output;
}
//console.log(numIdenticalPairs([1,2,3,1,1,3]));