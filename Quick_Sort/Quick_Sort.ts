// in this file we will discuss the work of Quick Sort algorithm

// the Idea of Quick sort is:
//Base Case : array of no element or one element is already sorted .
// choose a pivot and split array or list into two (lowest than pivot , highest than pivot )

function QuickSort_A(arr: number[]): any {
  // pivot element is the first element from the arr after each operation.
  //Base Case
  if (arr.length < 2) return arr;
  //recrusive
  else {
    let pivot = arr[0];
    let less = arr.filter((x) => x <= pivot).slice(1);
    //console.log(less);
    let high = arr.filter((x) => x > pivot).slice(0);
    // console.log(high);
    return QuickSort_A(less).concat(pivot, QuickSort_A(high));
  }
}

function QuickSort_R(arr: number[]) {
  // the choosing of the pivot will be randomize
  //Base Case
  if (arr.length < 2) return arr;
  //recrusive
  else {

    // choosing randomly the pivot from the arrays.
    let pivotindex = Math.floor(Math.random() * arr.length);

    let pivot = arr[pivotindex];

    let less = arr.filter((x) => x <= pivot).slice(0);

    let high = arr.filter((x) => x > pivot).slice(0);

    return QuickSort_R(less).concat(QuickSort_A(high));
  }
}

//console.log(QuickSort_A([3, 1, 5, 9, 7]));
console.log(QuickSort_R([3, 1, 5, 9, 7, 5, 4, 8, 34, 7, 22]));
