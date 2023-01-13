function solution(num_list) {
    var answer = [];
    let answer1 = num_list.filter((item) => {
        return item % 2 === 1
    })
    let answer2 = num_list.filter((item) => {
        return item % 2 === 0
    })
    return [answer2.length, answer1.length]
    
}