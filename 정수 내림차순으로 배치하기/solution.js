// https://school.programmers.co.kr/learn/courses/30/lessons/12933

/*
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  //한 문자씩 변환하여 배열로 만듦
  const numbers = [...String(n)];
  let result = "";
  //내림차순 정렬
  const reverse = numbers.sort((a, b) => b - a);
  // 배열의 길이만큼 반복하며 문자를 앞에서부터 더한다.
  for (let i = 0; i < reverse.length; i++) {
    result += reverse[i];
  }
  return Number(result);
}
