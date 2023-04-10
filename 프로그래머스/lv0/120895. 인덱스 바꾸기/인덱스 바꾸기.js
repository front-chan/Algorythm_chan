function solution(my_string, num1, num2) {
    var str = [...my_string];
    // console.log(str[num1])
    // console.log(str[num2])
    var change1 = str[num1]
    var change2 = str[num2]
    str[num1] = change2
    str[num2] = change1
    // console.log(str.join(''));
    
    // for (let i = 0; i < str.length; i++) {
    //     console.log(str[i]);
    //     if (str[num1]) {
    //         str[num1] = str[num2]
    //     }
    // }
    
    return str.join('');
}