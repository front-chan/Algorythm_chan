function solution(n, k) {
    const A = 12000
    const B = 2000
    
    return (n * A) + (k * B) - ((Math.floor(n / 10)) * B)
}