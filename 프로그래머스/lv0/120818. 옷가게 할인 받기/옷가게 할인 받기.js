function solution(price) {
    // var answer = 0;
    
    if (price >= 500000) {
        return Math.floor(price * 0.8);
    } else if (price >= 300000) {
        return Math.floor(price * 0.9);
    } else if (price >= 100000) {
        return Math.floor(price * 0.95);
    } else return price
    
    // 코드 실행 되고 테스트는 여전히 실패
    // if (price >= 500000) {
    //     answer = price * (1 - (20 / 100));
    // } else if (price >= 300000) {
    //     answer = price * (1 - (10 / 100));
    // } else if (price >= 100000) {
    //     answer = price * (1 - (5 / 100));
    // }
    
    // 코드 실행은 되지만 테스트는 또 실패
    // if (price >= 500000) {
    //     answer = price - (price * 0.2);
    // } else if (price >= 300000) {
    //     answer = price - (price * 0.1);
    // } else if (price >= 100000) {
    //     answer = price - (price * 0.05);
    // }
    
    // 코드 실행 안됨 낮은 가격이 위쪽에 있어서 안됨
    // if (price >= 100000) {
    //     answer = price - price * 0.05;
    // } else if (price >= 300000) {
    //     answer = price - price * 0.1;
    // } else if (price >= 500000) {
    //     answer = price - price * 0.2;
    // }
    
    // 코드 실행조차 안됨
    // switch (price) {
    //     case price > 100000 :
    //         answer = price - price * 0.05;
    //         break;
    //     case price > 300000 :
    //         answer = price - price * 0.1;
    //         break;
    //     case price > 500000 :
    //         answer = price - price * 0.2;
    //         break;
    // }
    
    // return Math.floor(answer);
}