var longestNiceSubstring = function(s) {
    const charSet = []
    let maxLength = 0
    let start = 0
    for(let i = 0; i < s.length; i++){
        while(charSet.includes(s[i])){
            console.log(charSet, "cchh");
            charSet.shift(s[start])
            start++
        }
        charSet.push(s[i])
    }
    return charSet
};

console.log(longestNiceSubstring("YazaAay"));
