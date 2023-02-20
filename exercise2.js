function average(arr){
    return arr.reduce((r,item)=>r+item,0)/arr.length;
}

console.log(average([1,2,3,4,5]));