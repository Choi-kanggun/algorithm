// https://school.programmers.co.kr/learn/courses/30/lessons/12903

/*
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

// if문 풀이
function solution(s) {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)];
  } else {
    return s[s.length / 2 - 1] + s[s.length / 2];
  }
}

// 3항 연산자 풀이
function solution(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.floor(s.length / 2)];
}
