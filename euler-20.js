const sumFactorialDigits = n => {
    let total = 0;
    let factorialDigits = 1;

    for (let i = n; i > 0; i--) {
        factorialDigits *= i
    }

    factorialDigits = BigInt(factorialDigits).toString();

    for (let i = 0; i < factorialDigits.length; i++) {
        total += Number(factorialDigits[i]);
    }

    console.log(factorialDigits)
    console.log(total);
}

sumFactorialDigits(10) // should return 27
sumFactorialDigits(25) // should return 72
sumFactorialDigits(75) // should return 432
sumFactorialDigits(100) // should return 648
console.log(Math.pow(2, 53))