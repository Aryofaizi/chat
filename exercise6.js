function sumOfMultiples(n,arr) {
    let multiples = [];
    for(i of arr){
        if(Number.isInteger(i/n)){
            multiples.push(i);
        }
    }
    let sum = multiples.reduce((accumulator,current)=>accumulator+current,0);
    return sum;
}

console.log(sumOfMultiples(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));