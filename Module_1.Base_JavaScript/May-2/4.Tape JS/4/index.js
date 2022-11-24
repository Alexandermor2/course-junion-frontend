// 1
console.log(Number(" 1 2 3 4 5"));
// 2
console.log(Number("1234 5"));
// 3
console.log(Number("12345"));
// 4
console.log(String(false));
// 5
console.log(Boolean(0000000));
// 6
console.log(Boolean(0.0000001));
// 7
console.log(String(undefined));
// 8
console.log(Number("100f"));
// 9
console.log(Number("100"));
// 10
console.log(Number("000001"));

//1   1 2 3 4 5  (NaN)
//2   1234 5  (NaN)
//3   12345
//4   false
//5   false
//6   true
//7   undefined
//8   100f  (NaN)
//9   100
//10  000001  (1)