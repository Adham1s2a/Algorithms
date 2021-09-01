//binary search is an algorithms searching in a sorted list and get the index of the searched key or null if not found 
function BinarySearch(list, key) {
    var low = 0;
    var high = list.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        //console.log(mid);
        if (key == list[mid])
            return mid;
        if (key > list[mid])
            low = mid + 1;
        else
            high = mid - 1;
    }
}
var my_list = [1, 3, 5, 7, 9];
console.log(BinarySearch(my_list, 7));
