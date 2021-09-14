// in this file we will discuss the work of Quick Sort algorithm
// the Idea of Quick sort is:
//Base Case : array of no element or one element is already sorted .
// choose a pivot and split array or list into two (lowest than pivot , highest than pivot )
function QuickSort_A(arr) {
    // pivot element is the first element from the arr after each operation.
    //Base Case
    if (arr.length < 2)
        return arr;
    //recrusive
    else {
        var pivot_1 = arr[0];
        var less = arr.filter(function (x) { return x <= pivot_1; }).slice(1);
        //console.log(less);
        var high = arr.filter(function (x) { return x > pivot_1; }).slice(0);
        // console.log(high);
        return QuickSort_A(less).concat(pivot_1, QuickSort_A(high));
    }
}
function QuickSort_R(arr) {
    // the choosing of the pivot will be randomize
    //Base Case
    if (arr.length < 2)
        return arr;
    //recrusive
    else {
        // choosing randomly the pivot from the arrays.
        var pivotindex = Math.floor(Math.random() * arr.length);
        var pivot_2 = arr[pivotindex];
        var less = arr.filter(function (x) { return x <= pivot_2; }).slice(0);
        var high = arr.filter(function (x) { return x > pivot_2; }).slice(0);
        return QuickSort_R(less).concat(QuickSort_A(high));
    }
}
//console.log(QuickSort_A([3, 1, 5, 9, 7]));
console.log(QuickSort_R([3, 1, 5, 9, 7, 5, 4, 8, 34, 7, 22]));
