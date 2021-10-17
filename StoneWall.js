function solution(H) {
    let sum = 0;
    index = 0
    count = 0
    stackIndex = 0
    let stack = []
    for (index = 0; index < H.length; index++){
        while (stackIndex > 0 && stack[stackIndex - 1] > H[index]) stackIndex--
        if (stackIndex > 0 && stack[stackIndex -1] === H[index] ) continue 
        else {
            sum++
            stack[stackIndex] = H[index]
            stackIndex++
        }
    }
    return sum
}