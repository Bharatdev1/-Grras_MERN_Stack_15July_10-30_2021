var arr = [2,4,3,56,5,78,];
var marks = [23,45,67,54,43];

// arr.forEach(function(a){
//     console.log("got"+a);
// })

// var squres= arr.map(function(a){
//     return a*a;
// })
// var squres= arr.reduce(function(a,b){
//     return a+b;
// })

// console.log(squres);

var isFailed = marks.some(function(e){return e<33});
console.log(isFailed);
