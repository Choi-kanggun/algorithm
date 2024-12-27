function solution(players, callings) {
    const playersPosition = {};
    players.forEach((player,idx)=>{
        playersPosition[player] = idx;
    })
    
    callings.forEach((player)=>{
        const target = playersPosition[player];
        const prevPlayer = players[target-1];
        
        players[target-1] = players[target];
        players[target] = prevPlayer;
        
        playersPosition[player]--;
        playersPosition[prevPlayer]++;
    })
    return players;
}