function solution(rsp) {
    var answer = '';
    
    let rsps = [...rsp]
        
    for (let i = 0; i < rsps.length; i++) {
        // console.log(rsps[i])
        if (Number(rsps[i]) === 2) {
            answer += "0"
            console.log(answer);
        }
        if (+rsps[i] === 0) {
            // results.push(result[2])
            answer += "5"
        }
        if (+rsps[i] === 5) {
            // results.push(result[0])
            answer += "2"
        }
    }
    // console.log(results)
    
    return answer;
}


/*
// 코드 실행 되지만 테스트 실패
function solution(rsp) {
    var answer = '';

    if (rsp.includes('2')) answer += "0"
    if (rsp.includes('0')) answer += "5"
    if (rsp.includes('5')) answer += "2"
    
    return answer;
}
*/
