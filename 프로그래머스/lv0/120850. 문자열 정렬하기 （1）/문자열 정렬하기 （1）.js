function solution(my_string) {
    var answer = [];
    
    let arr = [...my_string.replace(/[^0-9]/g, '')]
    
    
    for (let i = 0; i < arr.length; i++) {
        answer.push(+arr[i])
        // console.log(+arr[i])
        // console.log(answer)
    }
    
    answer.sort((a, b) => a - b)
    
    return answer;
}

// 다른 사람 풀이
// function solution(my_string) {
//     return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
// }
