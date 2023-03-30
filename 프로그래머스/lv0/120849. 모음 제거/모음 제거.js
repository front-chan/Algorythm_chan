// 다른 사람 풀이
function solution(my_string) {
    return my_string.replace(/[aeiou]/gi, '')
}
// 정규식을 이용한 방법이다.
// 정규식에 대한 내용을 따로 정리해야겠다.

/*
이 방법으로 풀었을 때 'bus'는 u가 잘 출력되지만 중복 모음이 있을 경우 하나만 삭제된다.
if (str[i] === str[i + 1]) {
    str.splice(i, 1)
}
이 구문을 추가했을 때 코드 실행은 제대로 되지만 테스트 결과는 정확도 23%로 실패다.

function solution(my_string) {
    var answer = '';
    let mo = ['a', 'e', 'i', 'o', 'u'];

    // 문자열을 배열로 변환
    let str = my_string.split('');
    console.log(str)
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < mo.length; j++) {
            // console.log(mo[j])
            if (str[i] === mo[j]) {
                if (str[i] === str[i + 1]) {
                    str.splice(i, 1)
                }
                str.splice(i, 1)
                // console.log(str.splice(i, 1))
                // console.log(str)
                answer = str.join('')
            }
        }
    }
    
    return answer;
}
*/