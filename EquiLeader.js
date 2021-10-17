function solution(A) {
    if (A.length === 1) return 0
    let maxRepetition = 1;
    let maxIndex = -1
    let occurance = new Object()
    for (let i = 0; i < A.length; i++){
        if (occurance.hasOwnProperty(A[i])) {
            occurance[A[i]][0]++
            if (occurance[A[i]][0] > maxRepetition){ 
                if (occurance[A[i]][0] > A.length / 2) {
                    maxRepetition = occurance[A[i]][0]
                    maxIndex =  occurance[A[i]][1]
                }
            }
        }
        else {
            occurance[A[i]] = new Array()
            occurance[A[i]][0] = 1
            occurance[A[i]][1] = i
        }
    }
    leader = A[maxIndex]
    let equiLeader = 0
    let stack = []
    for (let i = 0; i < A.length; i++){
        if (stack.length > (Math.floor(i / 2)  ) && ( maxRepetition - stack.length > Math.floor((A.length - i)/2))) equiLeader++
        if (A[i] === leader) stack.push(i)
    }
    return equiLeader
}