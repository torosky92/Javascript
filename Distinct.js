function solution(A) {
    const count = new Object()
    for(let i = 0; i < A.length; i++) count[A[i]] = 1
    return Object.keys(count).length
}