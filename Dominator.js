function solution(A) {
    if (A.length === 1) return 0;
    let max = 1;
    let maxIndex = -1;
    let occurrence = new Object();
    for (let i = 0; i < A.length; i++) {
        if (occurrence.hasOwnProperty(A[i])) {
            occurrence[A[i]][0]++;
            if (occurrence[A[i]][0] > max) {
                if (occurrence[A[i]][0] > A.length / 2) {
                    max = occurrence[A[i]][0];
                    maxIndex = occurrence[A[i]][1];
                    return maxIndex;
                }
            }
        } else {
            occurrence[A[i]] = new Array();
            occurrence[A[i]][0] = 1;
            occurrence[A[i]][1] = i;
        }
    }
    return maxIndex;
}