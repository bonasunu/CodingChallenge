const smallestMultiple = n => {
    let result = 0;
    let number = 1;

    while (result === 0) {
        let count = 0;

        for (let i = n; i > 0; i--) {
            
            if (number % i === 0) {count++};

            if (count === n) {
                result = number;
            }
        }
        number++;
    }

    console.log(result);
}

smallestMultiple(7) // It should log 420
smallestMultiple(5) // It should log 60