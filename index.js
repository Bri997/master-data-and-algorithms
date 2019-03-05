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

//making an array from scratch

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      //shift the items to the left and they get replaced
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();

console.log(newArray.push("Hi"));
console.log(newArray.push("There"));
console.log(newArray.push("!"));
console.log(newArray.push("What's"));
console.log(newArray.push("Up"));
// newArray.pop();
// newArray.pop();
newArray.delete(1);
newArray.delete(1);
console.log(newArray);
