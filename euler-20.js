const sumFactorialDigits = n => {
    let total = 0;
    let factorialDigits = 1;

    for (let i = n; i > 0; i--) {
        factorialDigits *= i;
    }

    factorialDigits = BigInt(parseFloat(factorialDigits)).toString();

    for (let i = 0; i < factorialDigits.length; i++) {
        total += Number(factorialDigits[i]);
    }


    console.log(factorialDigits)
    console.log(total);
}

sumFactorialDigits(10) // should return 27
sumFactorialDigits(25)
sumFactorialDigits(75)
sumFactorialDigits(100)