// Eloquent Javascript
let theNumber = 15 //theNumber(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
	console.log("The square root of your number is (15) " + theNumber * theNumber)
}

// Long unreadable approach to subsequently add numbers in a certain range (1-11)
let total = 0, count = 1;
while (count <= 10) {
	total += count;
	count +=1
}
console.log(total);
// -> 55

// var sum=0;
// // Short readable approach to subsequently add numbers in a certain range(1-11)
// console.log(sum(range(1,10)));
// // -> Error output??? ReferenceError: sum is not defined

function factorial(n){
	if (n == 0) {
		return 1;
	} else {
		return factorial(n-1) * n;
	}
}

console.log(factorial(8));
// -> 40320

console.log(1-1*3)