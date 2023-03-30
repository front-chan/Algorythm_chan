function solution(s1, s2) {
    var answer = 0;
    
    // s1의 배열을 for문을 적용하고 그 안에 s2의 배열에 for문을 적용하여 두 값을 비교해 같으면 answer에 +1을 한다.
    for (let a of s1) {
        for (let b of s2) {
            if (a === b) answer++
        }
    }
    // for (let i = 0; i < s1.length; i++) {
    //     for (let j = 0; j < s2.length; j++) {
    //         if (s1[i] === s2[j]) answer++;
    //     }
    // }
    
    return answer;
}
