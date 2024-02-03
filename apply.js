//
const myArray = [["columns", 4], ["rows", 8]];

//
function multiplyAll(arr) {
    let product = 1;
    // 
  for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      console.log(arr[i][j]);
    }
  }
    // 
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

  //
  function testGreaterThan(val) {
  if (val > 100) { 
    return "Over 100";
  }

  if (val > 10) { 
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//

var w = 10;
var x = 20;
var y = 10;
var z = 20;

function compareValues(y, z) {
    if (y === z) {
      return "The values are equal.";
    } else {
      return "The values are NOT equal.";
    }
   
  }

  console.log(w,z);

function compareValues(w, z) {
    if (w === z) {
      return "The values are equal.";
    } else {
      return "The values are NOT equal.";
    }
   
  }

  console.log(w,z);


  function compareValues(y, y) {
    if (y === y) {
      return "The values are equal.";
    } else {
      return "The values are NOT equal.";
    }
  }

  console.log(y,y);


  function compareValues(x, z) {
    if (x === z) {
      return "The values are equal.";
    } else {
      return "The values are NOT equal.";
    }
  }

  console.log(x,z);