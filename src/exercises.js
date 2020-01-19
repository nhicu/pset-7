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
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
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
