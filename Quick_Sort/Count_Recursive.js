//Second Example
// recursive function to count the number of items in a list.
//base case if there is no element in the array the count will be 0
function ArrElemCount(arrc) {
    var count;
    if (arrc.length === 0) {
        count = 0;
        return count;
    }
    else {
        //arr have elements
        count = 1 + ArrElemCount(arrc.slice(1));
    }
    return count;
}
console.log('Array count is ' + ArrElemCount([1, 2, 3, 4]));
