// this function to write the selection sort algorithm
// the big O notaion for this algorithm is O(n2)

// CASE: we need to sort array from the smallest number to the biggest number
//Selection sort way : we search the hall array to find index for the smallest number first and then add the number to another array.

//Let's begin:)

function FindSmallestItemIndex(array: number[]): number {
  let smallestitemindex = 0;
  let smallestitem = array[smallestitemindex];

  for (let i = 1; i < array.length; i++) {
    if (smallestitem > array[i]) {
      smallestitem = array[i];
      smallestitemindex = i;
    }
  }
  return smallestitemindex;
}

function SelectionSort(array: number[]): number[] {
  let SortedArray: number[] = [];
  let length = array.length;
  for (let j = 0; j < length; j++) {
    let smallestitemindex = FindSmallestItemIndex(array);
    let smallestitem = array.splice(smallestitemindex, 1);
    SortedArray.push(smallestitem[0]);
  }
  return SortedArray;
}

console.log(SelectionSort([3, 1, 5, 9, 7]));
