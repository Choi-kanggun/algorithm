// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때
// 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 풀이 1
function solution(array, commands) {
  let result = [];
  let fisrtIndex = 0;
  let lastIndex = 0;

  for (let i = 0; i < commands.length; i++) {
    fisrtIndex = commands[i][0];
    lastIndex = commands[i][1];

    let tempArr = [];
    for (let j = fisrtIndex - 1; j < lastIndex; j++) {
      tempArr.push(array[j]);
      console.log(tempArr);
    }
    tempArr.sort((a, b) => a - b);
    result.push(tempArr[commands[i][2] - 1]);
  }
}

// 풀이 2
function solution(array, commands) {
  const result = [];

  for (let i = 0; i < commands.length; i++) {
    const newArray = array.slice(commands[i][0] - 1, commands[i][1]);

    newArray.sort((a, b) => a - b);
    result.push(newArray[commands[i][2] - 1]);
  }
  return result;
}
