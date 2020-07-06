const powerDigitSum = exp => {
    let result = BigInt(Math.pow(2, exp)).toString()
    let sum = 0;

    for (let i = 0; i < result.length; i++) {
        sum += parseFloat(result[i])
    }
    
    console.log(sum)
}

powerDigitSum(15)
powerDigitSum(50)
powerDigitSum(128)