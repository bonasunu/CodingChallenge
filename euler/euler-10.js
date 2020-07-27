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

    return prime    
}

const primeSum = n => {
   
    let total = 0

    for (let i = 0; i < n; i++) {
        if (checkPrime(i) === true) {
            total += i
        }
    }

    console.log(total)
}

primeSum(140759)
