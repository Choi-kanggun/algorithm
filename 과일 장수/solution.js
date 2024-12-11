// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때,
// 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

// 풀이

function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i += m) {
    const box = score.slice(i, i + m);

    if (box.length === m) {
      result += Math.min(...box) * m;
    }
  }
  return result;
}
