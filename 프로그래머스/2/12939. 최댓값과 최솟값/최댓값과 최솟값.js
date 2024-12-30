function solution(s) {
    let result = ""
    const newS = s.split(" ").map(Number)
    
    const max = Math.max(...newS)
    const min = Math.min(...newS)
    
    result = min + " " + max
    return result
}