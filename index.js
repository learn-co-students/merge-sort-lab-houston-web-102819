function findMinAndRemoveSorted(array) {
  let min = array[0];
  array.splice(0, 1);
  return min;
}

function merge(firstArray, secondArray) {
  //[1,5,9,23] and [2,3,8,20]
  //need to compare the lowest value in the first array to the lowest value in the second array; then run the test
  let minNum;
  let sortedArray = [];
  while (firstArray.length > 0 && secondArray.length > 0) {
    if (firstArray[0] < secondArray[0]) {
      minNum = findMinAndRemoveSorted(firstArray);
      sortedArray.push(minNum);
    } else {
      minNum = findMinAndRemoveSorted(secondArray);
      sortedArray.push(minNum);
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}

//console.log(merge([1, 3, 6, 8], [2, 4, 5, 7]));

function mergeSort(array) {
  let midPoint = parseInt(array.length / 2);
  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint, array.length);
  if (array.length > 1) {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  } else {
    return array;
  }
}

mergeSort([14, 56, 100, 21]);
