function solution(A) {
    let zero = 0;
    let count = 0;
    for (let i = 0; i < A.length; i++){
        if(A[i] == 0) zero ++;
        else {
            count += (1 * zero)
            if(count > 1000000000) return -1
        }
    }
    return count
}