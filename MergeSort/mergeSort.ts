// this file is to implement merge sort
// the main idea of merge sort is to divide the array in half until we have one element in each peace
// then we merge these peaces until we compare it so we can at the end create a sorted array from the merged sorted arrays

function MergeSort(arr: number[]): number[] {
  // base case
  if (arr.length < 2) {
    return arr;
  }
  //recursion case
  else {
    let mid = Math.ceil(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid, arr.length);
    return Merge(MergeSort(left), MergeSort(right));
  }
}
function Merge(l: number[], r: number[]): any {
  let sortedarray: number[] = [];
  while (l.length > 0 && r.length > 0) {
    if (l[0] > r[0]) {
      sortedarray.push(r[0]);
      r.splice(0, 1);
    } else if (l[0] < r[0]) {
      sortedarray.push(l[0]);
      l.splice(0, 1);
    }
  }
  if (l.length > 0) {
    sortedarray.push(l[0]);
    l.splice(0, 1);
  }
  if (r.length > 0) {
    sortedarray.push(r[0]);
    r.splice(0, 1);
  }
  return sortedarray;
}
console.log(MergeSort([7, 9, 13, 1, 2, 4, 30]));
