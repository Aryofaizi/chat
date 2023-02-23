function removeVowels(str) {
    // Your code goes here
    str = str.split("");
    const vowels = ['a','i','o','u','e'];
    for(vowel of str){
        if(vowels.includes(vowel.toLowerCase())){
            str.splice(str.indexOf(vowel),1);
        }
    }
    return str.join("")
  }

console.log(removeVowels("Hello, World!"));


