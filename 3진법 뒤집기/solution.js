// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 
// return 하도록 solution 함수를 완성해주세요.

function solution(n) {
    let remainder = [];
    let result = 0;
    
    while(n >= 3){
        remainder.push(n%3)
        n = parseInt(n/3);
    }
    remainder.push(n);
    
    let gop=3;
    for(let i = remainder.length-1 ; i >= 0; i--){
        if( i === remainder.length-1){
            result += remainder[i]*1;
        } else {
            result+=remainder[i]*(gop);
            gop*=3;
        }
    }
    return result
}