function solution(numbers) {
    let max = numbers[0] * numbers[1];
    
    for(let i = 0; i < numbers.length - 1; i++){
        const first = numbers[i];
        
        for(let j = i + 1; j < numbers.length; j++){
            const second = numbers[j];
            
            if(max < first * second){
                max = first * second;
            }
        }
    }
    
    return max;
}

// function solution(numbers) {
//     var answer = '';
//     var num = [];
    
//     for (let i = 0; i < numbers.length; i++) {
//         num.push(Math.abs(numbers[i]));
//     }
    
//     var newNum = num.sort((a, b) => a - b);
    
//     console.log(newNum);
    
//     return answer;
// }