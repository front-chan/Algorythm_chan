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