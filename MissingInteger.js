function solution(A) {
    let max = Math.max.apply(null,A);
    if (max < 0) return 1;
    let B = new Array(max).fill(0);
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) B[A[i] - 1]++
    }
    let index = B.indexOf(0)
    if (index === -1) return max + 1
    return index + 1
}