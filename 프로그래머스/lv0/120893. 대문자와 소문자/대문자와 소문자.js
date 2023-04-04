function solution(my_string) {
    var answer = '';
    
    let str = [...my_string]
    // console.log(str)
    
    for (let i = 0; i < str.length; i++) {
        if(str[i].match(/[a-z]/g)) {
           answer += str[i].toUpperCase();
        } else if (str[i].match(/[A-Z]/g)) {
            answer += str[i].toLowerCase();
        }
    }
    // console.log(str.match(/[a-z]/g))
    
    // let strLower = my_string.match(/[a-z]/g)
    // let strUpper = my_string.match(/[A-Z]/g)
    // console.log(strLower.join().toUpperCase())
    // console.log(strUpper.join().toLowerCase())
    
    return answer;
}