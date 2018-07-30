function maxMinAvg(arr) {
    var sum = 0
    var count = 0
    var max = arr[0]
    var min = arr[0]
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
        count += 1
        sum += arr[i]
    }
    return("The minimum is " + min + ". Max is " + max + ". Avg is " + sum/count)
}

maxMinAvg([1, -2, 9, 4])



// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

function fizzbuzz(num) {
    var return_str = ""
    if (!(num.isInteger) || (num <= 0)) {
      return "num must be positive number"
    }
    for (var i = 1; i <= num; ++i) {
      if (i % 3 == 0 && i % 5 == 0) {
        return_str += " FizzBuzz ";
        
      } else if (i % 3 == 0) {
        return_str += " Fizz ";
        
      } else if (i % 5 == 0) {
        return_str += " Buzz ";
      } else {
        return_str += i + " ";
      }
    }
    return return_str
    
  }
  
  console.log(fizzbuzz(15))



function bracesValid(brace_comb) {
  var other_pair = {"}": "{", ")": 
  "(", "]": "["}
  var stack = []
  for (var i = 0; i < brace_comb.length; ++i) {
    if (brace_comb[i] == "{" || brace_comb[i] == "("
        || brace_comb[i] == "[") {
      stack.push(brace_comb[i])
    } 
    else if (stack[stack.length-1] === other_pair[brace_comb[i]]) {
      stack.pop()
    }
    else {
      return false
    }
  }
  return true
}

bracesValid("{{()}}[]")



function bubbleSort(arr) {
  for (var i = 0; i < arr.length-1; ++i) {
    var sorted = true
    for (var j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j+1]) {
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        sorted = false
      }
    }
    if (sorted) {
      return arr
    }
  }
  return arr
}

bubbleSort([3,2,4,2,4,-1, -5, 2])




//  Classifying functions by Big-O

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// O(n)

function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// O(1)

function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

// O(n)


function identityMatrix(n){
  var matrix = [];
  for(var i=0; i < n; i++){
    var row = [];
    for(var j=0; j < n; j++){
      if(j == i){
        row.push(1);
      }
      else{
        row.push(0);
      }
    }
    matrix.push(row);
  }
  return matrix;
}

// O(n^2)


function coinChange(num) {
  if (Number.isInteger(num)) {
    var dollars = 0
    var dimes = 0
    var pennies = 0
    var nickels = 0
    var quarters = 0
    var my_dictionary = {}
    
    while(num >= 100) {
      num -= 100
      dollars += 1
      my_dictionary["dollars"] = dollars
    }
    while(num >= 25) {
      num-= 25
      quarters += 1
      my_dictionary["quarters"] = quarters
    }
    while (num >= 10) {
      num -= 10
      dimes += 1
      my_dictionary["dimes"] = dimes
    }
    while (num >= 5) {
      num -= 5
      nickels += 1
      my_dictionary["nickels"] = nickels
    }
    while (num >= 1) {
      num -= 1
      pennies += 1
      my_dictionary["pennies"] = pennies
    }
    return my_dictionary
  }
  else {
    var newnum = 0
    for(var key in num) {
      if (key == "dollars") {
        newnum += num[key] * 100
      } else if (key == "quarters") {
        newnum += num[key] * 25
      } else if (key == "dimes") {
        newnum += num[key] * 10
      } else if (key == "nickels") {
        newnum += num[key] * 5
      } else if (key == "pennies") {
        newnum += num[key]
      }
    }
    return coinChange(newnum)
  }
  
}

coinChange({dollars: 2, dimes: 15, pennies: 5})


function userLanguages(users) {
  var bigstring = ""
  for(var i = 0; i < users.length; ++i) {
    bigstring += users[i].fname + " "
    bigstring += users[i].lname + " knows "
    for (var j = 0; j < users[i].languages.length; ++j) {
      if (j == users[i].languages.length - 1) {
        bigstring += "and " + users[i].languages[j] + ".\n"
      } else {
        bigstring += users[i].languages[j] + ", "
      }
    }
    bigstring += users[i].fname + " is also interested in "
    var count = 1
    for (var interest_key in users[i].interests) {
      for (var k = 0; k < users[i].interests[interest_key].length; k++) {
        if ((count == Object.keys(users[i].interests).length) && (k == users[i].interests[interest_key].length-1)) {
          bigstring += "and " + users[i].interests[interest_key][k] + ". \n"
        }
        else {
          bigstring += users[i].interests[interest_key][k] + ", "
        }
      }
      count += 1
    }
  }
  return bigstring
}

console.log(userLanguages(users))





function binarySearch(arr, num, start_index = 0, end_index = arr.length-1) {
  if ((start_index > end_index) || (end_index < start_index)) {
    return -1
  }
  var center_index = Math.floor((start_index + end_index)/2)
  if (num > arr[center_index]) {
    return binarySearch(arr, num, center_index+1, end_index)
  }
  else if (num < arr[center_index]) {
    return binarySearch(arr, num, start_index, center_index-1)
  }
  else if (num == arr[center_index]) {
    return center_index
  }
}


function no_recurse_binarySearch(arr, num) {
  var start_index = 0;
  var end_index = arr.length-1;
  while (start_index <= end_index) {
    console.log("PRINT")
    var center_index = Math.floor((start_index + end_index)/2)
    if (num > arr[center_index]) {
      start_index = center_index+1;
    }
    else if (num < arr[center_index]) {
      end_index = center_index - 1;
    }
    else if (num == arr[center_index]) {
      return center_index;
    }
  }
  return -1;
}

no_recurse_binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15)
