function solution(A, K) {
    K = K % A.length;
    const sliceIndex = A.length - K;
    return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}