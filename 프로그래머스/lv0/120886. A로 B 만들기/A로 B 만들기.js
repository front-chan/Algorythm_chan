function solution(before, after) {    
    var strB = [...before].sort().join('');
    var strA = [...after].sort().join('');
    
    return strA === strB ? 1 : 0;
//     var newStr = '';
    
//     for (let i = before.length - 1; i >= 0; i--) {
//         newStr += before[i];
//         // console.log(newStr)
//     }
    
    // console.log(newStr === after)
    
    // newStr === after ? 1 : 0;
    
    // if(newStr === after) {
    //     return 1;
    // } else {
    //     return 0;
    // }
}