"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var inputLines = [];
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});
process.stdin.on("end", function () {
    inputLines = inputString.split("\n");
    inputString = "";
    main();
});
function readLine() {
    return inputLines[currentLine++];
}
function main() {
    // Enter your code here
    console.log("welcome");
    readLine();
    var sum = 0;
    for (var i = 0; i < inputLines.length; i++) {
        sum = sum + Number(inputLines[i]);
    }
    console.log(sum);
    return sum;
}
