function solution(A, B) {
    let C = []
    let D = []
    let index = 1
    C[0] = A[0]
    D[0] = B[0]
    while (index < A.length) {
        if (D[D.length - 1] === 0) {
            C.push(A[index])
            D.push(B[index])
            index++
        } else {
            if (B[index] === 1) {
                C.push(A[index])
                D.push(B[index])
                index++;
            } else {
                let stop = 0;
                while (D[D.length - 1] === 1 && stop !== 1) {
                    if (A[index] > C[C.length - 1]) {
                        C.pop()
                        D.pop()
                        if (C.length === 0) {
                            index++
                            stop = 1
                            C.push(A[index])
                            D.push(B[index])
                        }
                    } else {
                        index++
                        stop = 1
                    }
                }
            }
        }
    }
    return C.length
}