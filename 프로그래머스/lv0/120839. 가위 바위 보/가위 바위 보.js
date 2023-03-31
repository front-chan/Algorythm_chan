function solution(rsp) {
    var answer = '';
    
    var result = [2, 0, 5]
    
    let rsps = [...rsp]
    
    let results = []
    
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