function solution(X, Y) {
    let result = "";
    
    for(let i = 9; i >= 0; i--){
        const countX = X.split(i).length-1
        const countY = Y.split(i).length-1
        
        result += i.toString().repeat(Math.min(countX, countY));
    }
    if( result === "") return "-1";
    if( result[0] === "0") return "0"
    
    return result

}