function solution(n, lost, reserve) {
    const newLost = lost.filter((el)=>!reserve.includes(el)).sort((a,b)=>a-b);
    const newReserve = reserve.filter((el)=>!lost.includes(el)).sort((a,b)=>a-b);
    let result = n-newLost.length;
    console.log(result)
    for(let i = 0; i < newLost.length; i++){
        for(let j = 0; j < newReserve.length; j++){
            if(newReserve[j]===newLost[i]-1 || newReserve[j]===newLost[i]+1){
                result++;
                newReserve[j]=-1;
                break;
            }
        }
    }
    return result;
}