function solution(S, P, Q) {
    const array = S.split('');
    const N = array.length;
    let A = new Array(N+1).fill(0);
    let C = new Array(N+1).fill(0);
    let G = new Array(N+1).fill(0);
    let result = [];
    for(let i=0; i<N; i++) {
        switch(array[i]){
            case 'A':
                A[i+1]++;
                break;
            case 'C':
                C[i+1]++;
                break;
            case 'G':
                G[i+1]++;
                break;
            default: 
            break;
        }
        A[i+1] += A[i];
        C[i+1] += C[i];
        G[i+1] += G[i];
    }

    for(let K in P){
        let start = P[K];
        let end = Q[K] + 1;
        if(A[start] != A[end]) result[K] = 1;
        else if(C[start] != C[end]) result[K] = 2;
        else if(G[start] != G[end]) result[K] = 3;
        else result[K] = 4
    }
    return result;
}