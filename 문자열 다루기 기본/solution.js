// https://school.programmers.co.kr/learn/courses/30/lessons/12918

/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

// 1번 풀이
function solution(s) {
  let result = [];
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      for (j = 0; j < 10; j++) {
        if (Number(s[i]) !== j) {
          continue;
        } else {
          result.push(true);
        }
      }
    }
    return result.length === s.length ? true : false;
  } else {
    return false;
  }
}

// 2번 풀이
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      if (isNaN(s[i])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
