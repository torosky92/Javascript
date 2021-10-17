function solution(X, A) {
    const position = new Set()
    let minSec = 0
    for(let i = 0; i < A.length; i++){
        const post = A[i]
        if(position.has(post)) continue
        minSec = Math.max(minSec, i)
        position.add(post)
    }
    return position.size === X ? minSec : -1
}