// selection sort
// the way of the alogrithm
//1- finding the smallest element in the list or array
//2- push this element to the end of another array

function selectionSort(arr: number[]): number[] {
  //base case
  // if the array is empty or has one element

  if (arr.length < 2) {
    return arr;
  }
  // recrusion case
  // finding the smallest element and push it to another array
  else {
    var sortedarray: number[] = [];
    while (arr.length > 1) {
      var smallindex = smallest(arr);
      var small = arr.splice(smallindex, 1);
      sortedarray.push(small[0]);
    }
    return sortedarray;
  }
}
function smallest(arr: number[]): number {
  var small = arr[0];
  var smallindex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
      small = arr[i];
      smallindex = i;
    } else continue;
  }
  return smallindex;
}

console.log(selectionSort([7, 9, 13, 1, 2, 4, 30]));
