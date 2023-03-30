function solution(n) {
    // result 값을 저장할 빈 배열을 생성한다.
    var answer = [];
    
    // 매개변수로 주어진 정수 n을 for문을 사용해 출력한다. (1 ~ n 까지)
    for (let i = 1; i <= n; i++) {
        // 1부터 2로 나누었을 때 0이 아닐 경우 홀수이므로 홀수인 경우만 answer 빈 배열에 추가한다.
        if (i % 2 !== 0) {
            answer.push(i)
            // console.log(answer)
        }
    }
    return answer;
}