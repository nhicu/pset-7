function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  let lastb = b.length -1;
  let lasta = a.length - 1;

  if (a[0] === b[0] || a[lasta] === b[lastb]){
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {

    let empty = [];

    if (!values || values.length < n || n <= 0) {
      return empty;
    }
    else if (n > 0) {
      let newArray = [];
      let first;

      for (f = 0; f <= n - 1; f++) {
        first = values[f];
        newArray.push(first);
      }
      let end = values.length - 1;
      let endStart = end - n;
      for (e = endStart; e <= end; e++) {
        newArray.push(e);
      }
      return newArray;
    } else {
      return values;
    }

}

function difference(numbers) {
  function checkNumber(aNumber) {

    return Number.isInteger(aNumber)
  }

  if (numbers == undefined || numbers.length < 1 || { // check to see if is a number )
    return undefined;
  } else {
    let ascending = numbers.sort(function(a, b){return a - b});
    let smallest = numbers[0]
    let descending = numbers.sort(function(a, b){return b - a});
    let largest = numbers[0]
    let difference = largest - smallest;
    return difference;
  }
}


function max(number) {

  if (!number || number.length === 0) {
    return undefined;
}

  else if (number.length < 3 && number.length % 2 !== 1) {
  return undefined;
} else if (isNaN(number)) {
  return undefined;
  }
}

function middle(values) {
  if (values == undefined || values.length < 3 || values.length % 2 == 0) {
    return [];
  } else {
    let leftMiddle = values[(values.length - 1) - (Math.ceil(values.length / 2))];
    let middle = values[values.length - (Math.ceil(values.length / 2))];
    let array = [leftMiddle, middle]
    return array;
  }
}

function increasing(numbers) {
  
  var num = 0;
  var last = -1;

  if (!numbers || numbers.length === 0) {
    return false;
  }
  if (numbers.length < 3){
    return false;
  }
  if(Number.isNaN(numbers)){
    return false;
  }
  if(!isInteger(number)){
    return false
  }
    for (i = 0; i < numbers.length; i++) {
      if (numbers[i] === last + 1) {
        last = numbers[i]
         if (numbers[u + 1] === last + 1) {
          return true;
          num = 1;
          break;
        }
        else {
        last = -1;
      }
    }
      else {
        last = numbers[i];
      }
    }
    if (num === 0) {
      return false;
    }

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
