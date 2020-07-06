const powerDigitSum = exp => {
    let result = Math.pow(2, exp).toString()
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += Number(result[i])
    }
    console.log(sum)
}

powerDigitSum(15)