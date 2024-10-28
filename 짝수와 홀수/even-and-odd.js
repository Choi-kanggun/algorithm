//https://school.programmers.co.kr/learn/courses/30/lessons/12937

/*
정수 num이 짝수일 경우 "Even"을 반환하고 
홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

//1. if 조건문 풀이

function solution(num) {
    if(num % 2 === 0){
        return "Even";
    } else if(num % 2 === 1)
        return "Odd";
}

// 2. reduce메서드를 사용한 풀이

function solution(numbers) {
    return numbers.reduce((acc,cur)=> acc+cur);
};


