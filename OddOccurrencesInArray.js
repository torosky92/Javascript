function solution(A) {
    let i = 0;
    const sorted = A.sort()
    while (i <= A.length){
        if(sorted[i] !== sorted[i+1]) return sorted[i]
        i += 2;
    }
}