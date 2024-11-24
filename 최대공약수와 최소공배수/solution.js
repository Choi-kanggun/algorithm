// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
// 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 
// solution(3, 12)는 [3, 12]를 반환해야 합니다.

function solution(n, m) {
    
    const nDivisor = [];
    const mDivisor = [];
    let maxDivisor = 0;
    let leastMultiple = 0;
    const temp=[];
    let multipleN = n;
    let multipleM = m;
    
    // n,m 약수 구하기   
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            nDivisor.push(i);
        }
    }
    
    for(let i = 1; i <= m; i++){
        if(m%i === 0){
            mDivisor.push(i);
        }
    }

    // 공약수를 temp에 push
    for(let i = 0; i < nDivisor.length; i++){
        for(let j = 0; j < mDivisor.length; j++){
            if(nDivisor[i]===mDivisor[j]){
                temp.push(nDivisor[i]);
            }
        }
    }
    // 최대공약수 할당
    maxDivisor = Math.max(...temp)
    
    // 최소공배수 구하기
    while(multipleN!==multipleM){
        if(multipleN>multipleM){
            multipleM+=m;
        } else if (multipleN < multipleM){
            multipleN+=n;
        }
    }
    
    // 최소공배수 할당
    leastMultiple = multipleN;
    
    return [maxDivisor,leastMultiple]
}