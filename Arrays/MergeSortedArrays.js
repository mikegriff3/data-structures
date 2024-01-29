function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1Item !== undefined || arr2Item !== undefined) {
    if (arr2Item === undefined || arr1Item <= arr2Item) {
      merged.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      merged.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return merged;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30, 40, 50]));
