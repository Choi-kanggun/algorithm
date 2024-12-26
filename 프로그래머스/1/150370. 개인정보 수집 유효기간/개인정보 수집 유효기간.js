function solution(today, terms, privacies) {
    const calculateDate = (date) => {
        const [year,month,day] = date.split(".").map(Number);
        return year*12*28+month*28+day;
    }
    
    const termObj = {}
    
    terms.forEach((term)=>{
        const [type, period] = term.split(" ");
        termObj[type] = period*28;
    })
    
    const expired = [];
    
    privacies.forEach((privacy,idx)=>{
        const [date, type] = privacy.split(" ");
        const startDay = calculateDate(date);
        const expiryDay = startDay+termObj[type];
        
        if(expiryDay <= calculateDate(today)){
            expired.push(idx+1);
        }
    })
    return expired;
}