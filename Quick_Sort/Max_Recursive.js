function max(arr) {
    //we have here two base cases 
    //base case 1
    if (arr.length === 0)
        return null;
    //base case 2
    else if (arr.length === 1)
        return arr[0];
    //recursion case
    else {
        var subMax = max(arr.slice(1));
        return arr[0] > subMax ? arr[0] : subMax;
    }
}
console.log(max([1, 2, 4, 3]));
// the excution wil be 
// max(1) will retutn 3
// max(2) submax is 3 and arr[0] = 4 > 3 then submax => 4
// max(3)  submax is 4 and arr[0] = 2 
// max(4)  submax is 4 and arr[0] = 1 
