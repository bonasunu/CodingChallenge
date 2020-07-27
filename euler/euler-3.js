const largestPrimeFactor = number => {
    let num = number;
    let div = 2;

    while (num >= div) {
        if (num % div === 0) {
            num /= div;
        }
        else {
            div++;
        }
    }

    console.log(div);
}

largestPrimeFactor(13195)