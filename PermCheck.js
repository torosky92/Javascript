function solution(A) {
    let L = A.length
    let X = ((L + 1) * L) / 2
    let Y = 0
    let I = 0
    let F = []
    let V = -1
    while(I < L){
        V = A[I]
        I++
        if(F[V]) continue
        F[V] = true
        Y += V;
    }
    return X === Y ? 1 : 0;
}