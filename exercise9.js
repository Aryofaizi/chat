function isPalindrome (str) {
    str = str.toLowerCase()
    str = str.replace(/\s/g,"");
    splited = str.split("")
    const reversed = splited.reverse()
    if(str == reversed.join("")){
        return true;
    }
    return false;
}

console.log(isPalindrome(" M o m "));