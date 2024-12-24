function solution(survey, choices) {
    const spliter = survey.map(ele => ele.split('') )
    const obj = {
        "R" : 0,
        "T" : 0,
        "C" : 0,
        "F" : 0,
        "J" : 0,
        "M" : 0,
        "A" : 0,
        "N" : 0
    }
    let answer = ''
    
    for(i=0 ; i<survey.length ; i++) {
        if(choices[i] > 4) {
            obj[spliter[i][1]] += Math.abs(4 - choices[i])
        }
        else if(choices[i] < 4) {
            obj[spliter[i][0]] += Math.abs(4 - choices[i])
        }
    }
    
    (obj["R"] >= obj["T"]) ? answer += "R" : answer += "T";
    (obj["C"] >= obj["F"]) ? answer += "C" : answer += "F";
    (obj["J"] >= obj["M"]) ? answer += "J" : answer += "M";
    (obj["A"] >= obj["N"]) ? answer += "A" : answer += "N";
 
    return answer
}