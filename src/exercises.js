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

  if (numbers == undefined || numbers.length < 1 ) // check to see if is a number )
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
  if (number.length % 2 === 0 || number.length < 3 ){
    return undefined;
  }
  if (number.some(isNaN)){
    return undefined;
  }
  else{
    var first_element = number[0];
    var middle_element = number[Math.floor(number.length/2)];
    var last_element = number[number.length-1];
    var array = [];
    var largest = Number(Math.max.apply(null, array));
    array.push(first_element, middle_element, last_element);
    return  Number(Math.max.apply(null, array));
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
}

function everywhere(values, x) {

  if (values != undefined && values.length >= 1 && x != undefined) {
      for(let j = 0; j < values.length; j++) {
        if (values[j] === x || values[j - 1] === x || values[j + 1] === x) {
          return true;
        }
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  }

function consecutive(numbers) {

  if (!numbers || numbers.length < 3) {
      return false;
    }
    let numeral = true;
    for (i = 0; i <= numbers.length - 1; i++) {
      if (isNaN(numbers[i])) {
        numeral = false;
      }
    }
    if (numeral === false) {
      return false;
    }
    let status = false;
    for (h = 0; h <= numbers.length - 1; h++) {
      let one = numbers[h] % 2;
      let two = numbers[h + 1] % 2;
      let three = numbers[h + 2] % 2;
      if (one === 0 && two === 0 && three === 0) {
        return true;
      } else if (one > 0 && two > 0 && three >0) {
        return true;
      } else {
        status = false;
      }
    }
    if (status === false) {
      return false;
    }
  }

  function balance(numbers) {

    var count = 0;
    var size = 0;
    var sum1 = 0;
    var sum2 = 0;

    if (!numbers || numbers.length < 2) {
      return false;
    }
    for (i = 0; i < numbers.length; i++) {
      if (!(Number.isInteger(numbers[i]))) {
        return false;
      }
    }
    for (z = 0; z < numbers.length; z++) {
      if (numbers[z] == undefined) {
        return true;
      }
    }
    for (x = numbers.length; x > -1; x--) {
      sum1 = 0
      sum2 = 0
      for(y = numbers.length - x; y > -1; y--) {
        sum1 = sum1 + numbers[y]
      }
      for(a = numbers.length - 1; a > numbers.length - x; a--) {
        sum2 = sum2 + numbers[a]
      }
      if (sum2 == sum1) {
        count = 1
        return true;
      }
    }
    if (count == 0) {
      return false;
    }
  }

  function clumps(values) {

  var clumpFinalIndex;
  var clump = 0;
  var value;
  var sameValues;

  if (!values) {
    return -1;
  }
  else {
     for (let w = 0; w < values.length - 1; w++) {
         let test2 = w + 1;
         let test1 = w;
         value = values[test1];
         sameValues = values[test2];
         if (value === sameValues) {
             while (value === sameValues) {
                 value = values[test1++];
                 sameValues = values[test2++];
              }
             clump++;
             clumpFinalIndex = test1 - 1;
             w = clumpFinalIndex;
          }
       }
        return clump;
     }
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
