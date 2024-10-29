// https://school.programmers.co.kr/learn/courses/30/lessons/12931

// for문 풀이
function solution(n)
{
    let sum = 0;
    const str = String(n);
    console.log(str.length);
    for(let i = 0; i < str.length; i++){
        sum+=Number(str[i]);
    }
    return sum;
}

// reduce() 메서드 풀이
function solution(n)
{
    const numbers = [...String(n)];
    return numbers.reduce((acc,cur)=>{
        return Number(acc)+Number(cur);
    },0)
}
