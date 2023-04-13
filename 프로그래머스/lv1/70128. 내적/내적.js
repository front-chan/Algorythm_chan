function solution(a, b) {
    var answer = [];
    
    for (let i = 0; i < a.length; i++) {
        answer.push((a[i] * b[i]));
        // console.log(answer)
    }
    
    var sum = answer.reduce((total, cv) => {
        return total + cv
    }, 0)
    
    return sum;
}