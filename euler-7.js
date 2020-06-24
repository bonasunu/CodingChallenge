const checkPrime = num => {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    };

    if (num === 1) {
        prime = false;
    };

    return prime;
}

//if (checkPrime(13) === true) console.log('Prime');

const nthPrime = n => {
    let number = 1
    let countPrime = 0
    let primeNum = 0

    while (countPrime < n) {
        if (checkPrime(number) === true) {
            countPrime++
            primeNum = number
        }
        number++
    }
    console.log(primeNum)
}

nthPrime(100)
nthPrime(10001)