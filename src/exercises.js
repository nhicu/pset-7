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
  
  let newA = []

  if (!values || values.length < n || !(n % 1 === 0) || n <= 0) {
    return newA;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let x = 0; x < n; x++) {
        if (values[x] !== undefined) {
          newA.push(values[x]);
        }
      }
      for (let x = n; x > 0; x--) {
        if (values[values.length - x] !== undefined) {
          newA.push(values[values.length - x]);
        }
      }
      return newA;
    }
  }
}

function difference(numbers) {

  if (!numbers || numbers.some(isNaN) || numbers.length < 1) {
    return undefined;
  } else {
    let maximum = Number(Math.max.apply(null, numbers));
    let minimum = Number(Math.min.apply(null, numbers));
    let difference = maximum - minimum

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

  if (!values || values.length % 2 === 0 || values.length < 3) {
    return [];
  } else {
    let newA = [];

    let middle = Math.floor(values.length / 2);
    newA.push(values[middle - 1], values[middle], values[middle + 1]);

    return newA;
  }
}


function increasing(numbers) {

  if (!numbers || numbers.length < 3) {
    return false;
  }
  let flag = false;
  for (let i = 0; i < numbers.length - 2; i++) {
    let index = Number.isInteger(numbers[i]);
    if (index === false) {
      return false;
    }
    let first = numbers[i];
    let second = numbers[i + 1];
    let third = numbers[i + 2];
    let indexsecond = Number.isInteger(second);
    let indexthird = Number.isInteger(third);

    if (indexsecond === false || indexthird === false) {
      return false;
    }
    if (first < second && second < third) {
      flag = true;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}


function everywhere(values, x) {

  let flag;
  if (!values || values.length < 1 || !x) {
    return false;
  } else {
    for (let y = 0; y < values.length - 1; y++) {
      if (values[y].isNaN) {
        flag = false;
        return false;
      }
    }

    let first;
    let second;
    let third;

    for (let i = 0; i < values.length - 1; i++) {
      if (i === 0) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i + 1] === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else if (i === (values.length - 1)) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i - 1]) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else {
        second = values[i];
        first = values[i - 1];
        third = values[i + 1];

        if (second === x) {
          flag = true;
        } else if (first === x) {
          flag = true;
        } else if (third === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      }
    }

    if (flag === false) {
      return false;
    } else {
      return true;
    }
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
