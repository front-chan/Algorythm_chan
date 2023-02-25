function solution(my_string, letter) {
    var answer = '';
    let str = my_string.split(letter)
    
    for (let i = 0; i < str.length; i++) {
        answer += str[i]
    } 
    return answer;
}