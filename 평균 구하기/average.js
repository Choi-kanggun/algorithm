// https://school.programmers.co.kr/learn/courses/30/lessons/12944

/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, 
solution을 완성해보세요.
*/

function solution(arr) {
    let sum = 0;
    arr.forEach((number)=>{
        sum += number        
    })
    return sum / arr.length
}