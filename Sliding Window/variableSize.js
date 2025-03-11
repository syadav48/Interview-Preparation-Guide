//Given a string, find the length of the longest substring without repeating characters.
function longSubStr(str){
    const charSet = new Set()
    let maxLength = 0
    let start = 0
    for(let i = 0; i < str.length; i++){
        while(charSet.has(str[i])){
            console.log(charSet, "char");
            
            charSet.delete(str[start])
            start++
        }
        charSet.add(str[i])
        maxLength = Math.max(maxLength, i - start + 1)
    }
    return maxLength
}
console.log(longSubStr("abcabcbb"));
