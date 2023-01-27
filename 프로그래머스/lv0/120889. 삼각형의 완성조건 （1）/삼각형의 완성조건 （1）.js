function solution(sides) {
    const arr = sides.sort((a,b) => a - b)
    const result = arr[arr.length - 1] < arr[0] + arr[1]
    
    if (result) {
        return 1
    } else {
        return 2
    }

}