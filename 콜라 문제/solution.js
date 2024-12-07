// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 풀이

function solution(a, b, n) {
  let sum = 0;

  while (n >= a) {
    const newCola = Math.floor(n / a) * b;
    sum += newCola;
    n = newCola + (n % a);
  }
  return sum;
}
