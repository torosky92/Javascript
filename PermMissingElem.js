function solution(A) {
    if (A.length === 0) return 1
    let actualSum = A.reduce(function(actualSum, i){ return actualSum + i;})
    let requiredSum = (A.length + 1) * (A.length + 2) / 2
    return requiredSum - actualSum;
}