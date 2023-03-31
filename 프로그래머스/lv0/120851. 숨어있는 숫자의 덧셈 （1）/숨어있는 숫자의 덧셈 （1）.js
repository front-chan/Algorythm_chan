function solution(my_string) {
    var answer = 0;
    
    var arr = my_string.split('')
    
    let sum = arr.filter((a) => {
        return +a > 0
    })
    
    answer = sum.reduce((a, b) => {
        return +a + +b
    })
    
    return answer;
}