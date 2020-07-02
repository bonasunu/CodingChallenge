const triangularNumber = n => {
    let num = 0

    for (let i = 1; i <= n; i++) {
        num += i
    }

    return num;
}

const factors = n => {
    let numFactors = [];

    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            numFactors.push(i);

            if (n / i !== i) {
                numFactors.push(n / i);
            }
        }
    }
    //console.log(numFactors.length - 1)
    return numFactors.length - 1;
}

const divisibleTriangleNumber = n => {
    let result = 0;
    let num = 1;
    
    while (result === 0) {
        const factorsNum = factors(triangularNumber(num));

        if (factorsNum === n) {
            result = triangularNumber(num)
        }

        num++;
    }
    console.log(result)
    return result;
}

divisibleTriangleNumber(5) // should return 28
divisibleTriangleNumber(23) // should return 630
divisibleTriangleNumber(167) // should return 1385280
//divisibleTriangleNumber(500) // should return 76576500
//divisibleTriangleNumber(374) // should return 17907120
// TODO Fix for big O 