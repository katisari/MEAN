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
  //     console.log("num must be positive number")
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
      
  }
