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
