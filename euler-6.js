function sumSquareDiff(n) {

	let pow = 0;
	let sumPow = 0;

	for (let i = n; i > 0; i--) {
		pow = pow + (i * i);
	}

	for (let i = n; i > 0; i--) {
		sumPow += i;
	}

	return (sumPow * sumPow) - pow;

};

console.log(sumSquareDiff(10));
