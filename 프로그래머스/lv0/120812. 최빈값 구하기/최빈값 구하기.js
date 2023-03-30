function solution(array) {
    var arr = new Map();
    console.log(arr); // Map(0) {} 출력
    
    for (let a of array) arr.set(a, (arr.get(a) || 0)+1);
    console.log(arr);
    // Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }
    // Map(2) { 1 => 2, 2 => 2 }
    // Map(1) { 1 => 1 }
    
    arr = [...arr].sort((a,b) => b[1] - a[1]);
    console.log(arr)
    // [ [ 3, 3 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ] ]
    // [ [ 1, 2 ], [ 2, 2 ] ]
    // [ [ 1, 1 ] ]
    
    console.log(arr.length)
    // 4, 2, 1
    
    return arr.length === 1 || arr[0][1] > arr[1][1] ? arr[0][0] : -1;
    // 4 === 1 || 3 > 1 ? 3 : -1 ---> 3 > 1 이 성립되므로 3 반환
    // 2 === 1 || 2 > 2 ? 1 : -1 ---> 2 === 1 || 2 > 2 가 모두 false이므로 -1 반환
    // 1 === 1 || 1 > undefined ? 1 : -1 ---> 1 === 1 이 성립되므로 1 반환
}

// function solution(array) {
//     var arr = new Map();
//     console.log(arr) // Map(0) {} 출력

//     // Map 객체 초기화 과정
//     for (let i = 1; i <= Math.max(...array); i++) {
//         arr.set(i, 0)
//     }
//     console.log(arr)
//     // Map(4) { 1 => 0, 2 => 0, 3 => 0, 4 => 0 }
//     // Map(2) { 1 => 0, 2 => 0 }
//     // Map(1) { 1 => 0 }
    
//     // array 배열의 원소값과 일치하는 Map 객체의 key를 증가시키는 과정
//     for (let i = 0; i <array.length; i++) {
//         arr.set(array[i], arr.get(array[i]) + 1);
//     }
//     console.log(arr);
//     // Map(4) { 1 => 1, 2 => 1, 3 => 3, 4 => 1 }
//     // Map(2) { 1 => 2, 2 => 2 }
//     // Map(1) { 1 => 1 }
    
//     // Map 객체의 value만 모아서 배열로 만드는 과정
//     let newArr = Array.from(arr.values());
//     console.log(newArr);
//     // [ 1, 1, 3, 1 ]
//     // [ 2, 2 ]
//     // [ 1 ]
    
//     // newArr의 최대값 출력 과정
//     let max = Math.max(...newArr);
//     console.log(max);
//     // 3
//     // 2
//     // 1
    
//     console.log(newArr.indexOf(max));
//     // 2 -> newArr[2] = 3임
//     // 0 -> newArr[0] = 2임
//     // 0 -> newArr[0] = 1임
//     console.log(newArr.lastIndexOf(max));
//     // 2 -> newArr[2] = 3임
//     // 1 -> newArr[1] = 2임
//     // 0 -> newArr[0] = 1임
    
//     // 최대값이 하나면 max 출력, 여러 개 중복되면 -1 출력하는 과정
//     if (newArr.indexOf(max) !== newArr.lastIndexOf(max)) {
//         return -1;
//     } else {
//         return newArr[newArr.indexOf(max)];
//     }
// }