function findAllPrime(n){
    if(n <= 1) return []
    if(n === 2) return [2]
    let arr = [2]
    const isPrime = (num) => {
        if(num % 2 === 0) return false
        for(let i = 3; i <= Math.sqrt(num); i += 2){
            if(num % i === 0){
                return false
            }
        }
        return true
    }
    for(let i = 3; i <= n; i++){
        if(isPrime(i)){            
            arr.push(i)
        }
    }
    return arr
}
console.log(findAllPrime(89));
//https://chat.deepseek.com/a/chat/s/60a1b6b0-5079-4ff9-9a12-89522023e8ea 
//continue from here
