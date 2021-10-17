function sortAsc(a, b) { return (a - b) }
function solution(A) {
    let counter = 0
    let j= 0
    let leftLimit = []
    let rightLimit = []
    for(var i=0; i < A.length; i++) {
        leftLimit[i] =i-A[i]
        rightLimit[i] =i+A[i]
    } 
    leftLimit.sort(sortAsc)
    rightLimit.sort(sortAsc)
    for(var i= 0; i<A.length; i++) {
        while(j < A.length && rightLimit[i] >= leftLimit[j]){ 
            counter += j-i
            j++
        } 
        if(counter > 10000000) return -1
    }
    return counter
}