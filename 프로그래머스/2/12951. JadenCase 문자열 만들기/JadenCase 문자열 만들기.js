function solution(s) {
    const arrS = s.split(" ")
    
    for(let i = 0; i < arrS.length; i++){
        if(arrS[i].length === 0) continue;
        
        if(!isNaN(arrS[i][0])) {
            arrS[i] = arrS[i][0]+arrS[i].slice(1).toLowerCase()
            continue;
        }

        arrS[i] = arrS[i][0].toUpperCase()+arrS[i].slice(1).toLowerCase();
    }

    return arrS.join(" ")
}