function isPrime(num) {
    const limit = Math.sqrt(num)
    for (let i = 2; i <= limit; i++ ) {
        if (num % i === 0) {
                return false;
            }   
    }
    return true  
}

function isPrimeArray(n) {
    isPrimeArray._prime = []
    let check = 2
    while (isPrimeArray._prime.length < n) {
        if (isPrime(check)) {
            isPrimeArray._prime.push(check)
        }
        check++
    }
    console.log(isPrimeArray._prime)

  }

console.time()
isPrimeArray(process.argv[2])
console.timeEnd()

