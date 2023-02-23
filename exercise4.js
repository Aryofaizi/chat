function sumOfPositives(arr){
    if(arr.length == 0){
        return 0;
    }
    let positives = [];
    for(i of arr){
        if(i>0){
            positives.push(i);
        }
    }
    if(positives.length == 0){
        return 0;
    }
    return positives.reduce((r,item)=>r+item,0);
}

console.log(sumOfPositives([])); 
