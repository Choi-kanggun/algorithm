// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 풀이 1

function solution(food) {
  let result = "0";

  for (let i = food.length - 1; i > 0; i--) {
    const count = Math.floor(food[i] / 2);
    for (j = 0; j < count; j++) {
      result += i;
    }
  }
  console.log(result);
  const reverse = result.slice(1, result.length).split("").reverse();

  return reverse.join("") + result;
}

// 풀이 2
function solution(food) {
  let result = "";
  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 === 0) {
      let count = food[i] / 2;
      while (count > 0) {
        result += i;
        count--;
      }
    } else {
      let count = Math.floor(food[i] / 2);
      while (count > 0) {
        result += i;
        count--;
      }
    }
  }
  const reverse = result.split("").reverse().join("");
  return reverse + "0" + result;
}
