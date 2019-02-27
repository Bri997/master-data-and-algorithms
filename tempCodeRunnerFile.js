const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "a"];

const array3 = ["a", "b", "c", "x"];
const array4 = ["z", "y", "x"];

// 2 parameter
// return true / false

// function checkArr(arrayA, arrayB) {
//   for (let i = 0; i < arrayA.length; i++) {
//     for (let k = 0; k < arrayB.length; k++) {
//       if (arrayA[i] === arrayB[k]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// checkArr(array3, array4);

//what if we create an obj in the array1

//array1 ===> obj {
//a: true,
//b: true,
//c: true,
//x: true
// }

// array2[index == obj.properties

function containsCommonItems(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  //loop through second array and check if item is second array exist on created object
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      //if it does not exist
      //add it to the obj
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// containsCommonItems(array1, array2)

function containsItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
containsItem(array1, array2);

//google code interview video
//Brute force
function hasPairWithSum(arr, sum) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let k = i + 1; k < len; k++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

//Better
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
