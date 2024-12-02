// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. 
// "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
    const arrS = s.split("");
    let result = "";
    
    for(let i = 0; i < arrS.length; i++) {
        console.log(arrS[i].charCodeAt())
        if(arrS[i].charCodeAt() === 32) {
            result+=String.fromCharCode(32)
            
        } else if(arrS[i].charCodeAt() >= 65 && arrS[i].charCodeAt() <= 90){
            result+=(arrS[i].charCodeAt()+n) <=90 ? String.fromCharCode(arrS[i].charCodeAt()+n) : String.fromCharCode(64+(arrS[i].charCodeAt()+n)-90);
            
        } else if(arrS[i].charCodeAt() >= 97 && arrS[i].charCodeAt() <= 122){
            result+= (arrS[i].charCodeAt()+n) <= 122 ? String.fromCharCode(arrS[i].charCodeAt()+n) : String.fromCharCode(96+(arrS[i].charCodeAt()+n)-122)
        }
    }
    return result
}