function solution(hp) {
    var answer = 0;
    
    answer += Math.floor(hp / 5);
    hp -= answer * 5
    console.log(hp)
    
    answer += Math.floor(hp / 3);
    hp -= Math.floor(hp / 3) * 3;
    console.log(hp)

    answer += Math.floor(hp / 1);
    hp -= Math.floor(hp / 1) * 1;
    console.log(hp)

    if (hp === 0) return answer;
    
    // var ants = [5,3,1]
    
//     answer += Math.floor(hp / ants[0])
//     hp -= answer * ants[0]
    
//     answer += Math.floor(hp / ants[1])
//     hp -= answer * ants[1]
    
//     answer += Math.floor(hp / ants[2])
//     hp -= answer * ants[2]
    
//     hp === 0 ? answer : null;
    
//     for (let i = 0; i < ants.length;i++) {
//         answer += Math.floor(hp / ants[i])
//         hp -= answer * ants[i]
        
//         if (hp % ants[i] === 0) return answer;
//     }
    
    
}