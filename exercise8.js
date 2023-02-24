function countUnique(arr) {
    let list = [];
    for(i of arr){
        if(!list.includes(i)){
            list.push(i)
        }
    }
    return list.length;
}

console.log(countUnique([1, 2, 2, 3, 3, 3]));