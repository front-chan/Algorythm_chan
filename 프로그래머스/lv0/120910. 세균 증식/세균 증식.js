function solution(n, t) {
    var answer = [];
    
    answer.push(n * 1)
        
    for (let i = 2; i <= t + 1; i++) {
        answer.push(answer[answer.length - 1] * 2)

        // console.log(answer)
    }
    
    return answer[answer.length - 1];
}

// 신기했던 다른 사람 풀이
// function solution(n, t) {
//   return n << t;
// }
