// 다른 사람 풀이
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
    // 소수점을 내림처리를 하고 money / 5500을 앞에 담아주고 money % 5500원으로 나머지를 구해 뒤에 담아준다.
}

/*
function solution(money) {
    // result 값을 담아줄 빈 배열을 생성한다.
    var answer = [];
    // 아이스 아메리카노 가격을 상수로 담아준다.
    const AMERICANO = 5500;
    
    // 아이스 아메리카노를 마실 수 있는 잔 수를 money / AMERICANO를 나눠주고 소수 부분을 버리는 Math.trunc를 사용한다. 
    var count = Math.trunc(money / AMERICANO)
    // 남는 잔돈을 계산하기 위해 money에서 AMERICANO 가격과 잔 수를 곱한 값을 빼준다.
    var price = money - (AMERICANO * count)
    
    // console.log(Math.trunc(money / AMERICANO))
    // console.log(money - (AMERICANO * count))
    
    answer = [count, price]
    
    return answer;
}
*/
