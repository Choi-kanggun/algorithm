function solution(lottos, win_nums) {
    var answer = [];
    let best = 0;
    let lowest = 0;
    for(let i=0; i<6; i++){
        if(lottos[i]===0){
            best++;
            continue;
        }
        for(let j=0; j<6; j++){
            if(lottos[i]===win_nums[j]){
                best++;
                lowest++;
            }
        }
    }
    function ranking(number){
        if(number===6){
            return 1;
        } else if(number===5){
            return 2;
        } else if(number===4){
            return 3;
        } else if(number===3){
            return 4;
        } else if(number===2){
            return 5;
        } else{
            return 6;
        }
    }
    answer.push(ranking(best));
    answer.push(ranking(lowest));
    return answer;
}