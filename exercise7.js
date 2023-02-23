function reverseString (str) {
    let reversed = []
    for(let i=str.length-1;i>=0;i--){
        reversed.push(str.substring(i,i+1));
    }
    return reversed.join("");
}
console.log(reverseString("hello"));