// https://school.programmers.co.kr/learn/courses/30/lessons/12943

/*
1937년 Collatz란 사람에 의해 제기된 이 추측은, 
주어진 수가 1이 될 때까지 다음 작업을 반복하면, 
모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
*/

// 1번 풀이
function solution(num) {
  let result = 0;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    result++;
    if (result === 500) {
      return -1;
    }
  }
  return result;
}

// 2. 2번 풀이
function solution(num) {
  let result = 0;

  while (num !== 1 && result < 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    result++;
  }
  return result < 500 ? result : -1;
}
