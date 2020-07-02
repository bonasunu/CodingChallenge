const triangularNumber = n => {
    let num = 0

    for (let i = 1; i <= n; i++) {
        num += i
    }

    return num;
}

const divisbleTriangleNumber = n => {
    let result = 0

    while (result === 0) {
        // call triangularNumber
        // if divisible n, result change, loop stop
    }
    console.log(result)
}

