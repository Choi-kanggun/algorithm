function solution(ingredient) {
    const hamberger = []
    let count = 0;
    
    for(let i = 0; i < ingredient.length; i++){
        hamberger.push(ingredient[i]);
        
        if(hamberger.slice(-4).join('') === '1231'){
            count++;
            hamberger.splice(-4);
        }
    }
    return count
}