function solution(s) {
    let answer = 0;
    let i=0;
    
    while(i < s.length){
        let x = s[i];
        let countX=0;
        let countOther=0;
        
        for(; i<s.length; i++){
            if(s[i]===x) countX++;
            else countOther++;
            
            if(countX===countOther) break;
        }
        answer++;
        i++;
    }
    
    return answer;
}