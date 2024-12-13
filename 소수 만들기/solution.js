// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
// nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때
// 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// 풀이

function solution(nums) {
  const sumArr = [];
  let sum = 0;

  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = 0;
        sum += nums[i] + nums[j] + nums[k];
        sumArr.push(sum);
      }
    }
  }

  for (let i = 0; i < sumArr.length; i++) {
    let count = 0;
    for (let j = 2; j <= sumArr[i]; j++) {
      if (sumArr[i] % j === 0) {
        count++;
      }
    }
    if (count === 1) {
      result++;
    }
  }

  return result;
}
