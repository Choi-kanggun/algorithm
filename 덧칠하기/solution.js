// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 풀이

function solution(n, m, section) {
  let count = 0;
  let lastPainted = 0;

  for (let el of section) {
    if (el > lastPainted) {
      count++;
      lastPainted = el + m - 1;
    }
  }

  return count;
}
