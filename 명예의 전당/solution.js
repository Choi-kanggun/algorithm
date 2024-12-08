// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 풀이

function solution(k, score) {
  const result = [];
  const temp = [];
  for (i = 0; i < score.length; i++) {
    if (i <= k - 1) {
      temp.push(score[i]);
      temp.sort((a, b) => a - b);
      result.push(temp[0]);
    } else {
      temp[0] = temp[0] < score[i] ? score[i] : temp[0];
      temp.sort((a, b) => a - b);
      result.push(temp[0]);
    }
  }
  return result;
}
