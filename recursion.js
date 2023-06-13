/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i == nums.length) return 1

  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if(words.length === i) return 0

  return Math.max(words[i].length, longest(words, i+1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if(str.length <= i) return ""

  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start=0, end = str.length -1) {
  if(start >= end) return true
  if (str[start] != str[end]) return false
  return isPalindrome(str, start+1, end-1)
}

isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, i = 0) {
  if(i == arr.length) return -1
  if(arr[i] == val) return i
  return findIndex(arr, val, i+1)
}

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0) {
  if(str.length == i) return ""

  return revString(str, i+1) + str[i]
}

revString("porcupine") // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = []

  for(let key in obj) {
    if(typeof obj[key] === 'string') arr.push(obj[key])
    if(typeof obj[key] === 'object') arr.push(...gatherStrings(obj[key]));
    // The ... (spread operator) is used to spread the elements of the array returned by gatherStrings(obj[key]) into individual elements. This allows each string value to be pushed individually to the arr array rather than as a nested array.
    // when recurse it will be creating a new arr
  }

  return arr
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz"
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!"
        }
      }
    },
    favoriteString: "nice!"
  }
};

gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, l=0, r=arr.length-1) {
  if (r < l) return -1
  let mid = Math.floor((l + r)/2)
  if(arr[mid] == val) return mid
  if(arr[mid] > val){
    return binarySearch(arr, val, l, r=mid-1)
  } else {
    return binarySearch(arr, val, l=mid+1, r)
  }
}

binarySearch([1,2,3,4],1) // 0
binarySearch([1,2,3,4],3) // 2
binarySearch([1,2,3,4],5) // -1

// should return number of integers in tested array
function realSize(arrays) {
  let count = 0
  for (let n of arrays) {
    if (Array.isArray(n)) {
      count += realSize(n)
    } else if (typeof n === "number") {
      count++
    }
    console.log(count)
  }
  return count;
}

// function that sums squares of numbers in list that may contain more lists
function SumSquares(l){
  let tot = 0
  for (let n of l) {
    if (Array.isArray(n)) {
      tot+=SumSquares(n);
    } else if (typeof n === "number") {
      tot = tot + n ** 2
    }
  }
  return tot
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  realSize
};
