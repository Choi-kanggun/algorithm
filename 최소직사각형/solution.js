// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때,
// 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  let sortSizes = sizes;
  let temp = 0;

  for (let i = 0; i < sortSizes.length; i++) {
    if (sortSizes[i][0] < sortSizes[i][1]) {
      temp = sortSizes[i][0];
      sortSizes[i][0] = sortSizes[i][1];
      sortSizes[i][1] = temp;
    }
  }

  for (let j = 0; j < sortSizes.length; j++) {
    if (sortSizes[j][0] > maxWidth) {
      maxWidth = sortSizes[j][0];
    }
    if (sortSizes[j][1] > maxHeight) {
      maxHeight = sortSizes[j][1];
    }
  }

  return maxWidth * maxHeight;
}
