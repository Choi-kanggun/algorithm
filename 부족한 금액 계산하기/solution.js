// https://school.programmers.co.kr/learn/courses/30/lessons/82612



function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  if (money < 0) {
    return -money;
  } else {
    return 0;
  }
}

// 3항 연산자
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return money < 0 ? -money : 0;
}
