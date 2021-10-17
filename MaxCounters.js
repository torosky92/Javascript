function solution(N, A) {
    let M = A.length
    let C = []
    let H = 0
    let PH = 0
    for(let K = 0; K < N; K++) C[K] = 0
    for(let K = 0; K < M; K++){
        if(A[K] !== N+1){
            C[A[K]-1]++
            if(H < C[A[K]-1]) H=C[A[K]-1]
            continue
        }
        if(H===PH) continue
        for(let J=0; J < N; J++) C[J] = PH = H
    } 
    return C
}