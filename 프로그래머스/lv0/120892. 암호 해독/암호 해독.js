function solution(cipher, code) {
    var answer = '';
    
    var str = [...cipher]
    // console.log(str)
    
    var newStr = []
    
    for (let i = code - 1; i < str.length; i+=code) {
        newStr.push(str[i])
        // console.log(newStr)
        answer = newStr.join('')
    }
    
    return answer;
}