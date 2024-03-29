//factorial function
//LOOP way
function factloop(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log("Factorial using loop" + factloop(5));
//factorial function
//recursion way
function factrec(M) {
    //base case
    if (M <= 0)
        return 1;
    //recursion case
    else
        return M * factrec(M - 1);
}
console.log("Factorial using recursion" + factrec(5));
//recursion example
// fun(4);
// /
// fun(3), print(3), fun(2)(prints 0 1)
// /
// fun(2), print(2), fun(1)(prints 0)
// /
// fun(1), print(1), fun(0)(does nothing)
// /
// fun(0), print(0), fun(-1) (does nothing)
function fun(B) {
    debugger;
    if (B > 0) {
        fun(--B);
        console.log(B);
        fun(--B);
    }
}
fun(4);
