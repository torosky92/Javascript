function solution(A) {
    A.sort((a, b)=>(a - b))
    let type1 = A[0]*A[1]*A[A.length-1]
    let type2 = A[A.length-1]*A[A.length-2]*A[A.length-3]
    return Math.max(type1, type2)
}