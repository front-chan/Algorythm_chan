function solution(a, b) {
    var answer = '';

    let weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
    let dateStr = `2016-${a}-${b}`;
    let date = new Date(dateStr);
    
    return weeks[date.getDay()];
}