function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let abc = 1

    for (let a = 1; a < n/2; a++) {
        for (let b = a + 1; b < n/2; b++) {
            let c = sumOfabc - a - b;

            if (a*a + b*b === c*c) {
                console.log('list', a, b, c)
                abc = a * b * c
            }
        }
    }

    console.log(abc)
}
   
specialPythagoreanTriplet(1000);