const nthPrime = (n) => {
    let number = 1
    let i = 3

    let prime = false
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            break
        }
        else {prime = true }
    }
    console.log(prime)
}

nthPrime(150)
nthPrime(29)