mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

function mergeSortedArrays(arr1, arr2) {
  let newSortedArr = [];
  for (let nums of arr1) {
    newSortedArr.push(nums);
  }
  for (let nums of arr2) {
    newSortedArr.push(nums);
  }
  //return
  console.log(newSortedArr.sort((a, b) => a - b));
}

//
function mergeSortedArrays2(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  console.log(mergedArray); //return
}
mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]);
