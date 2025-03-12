var longestNiceSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let windowSum = ''
  const isNice = (str) => {
    console.log(str);
    
    if(str.length < 2) return false
    const set = new Set(str);
    for (const char of set) {
      const charCode = char.charCodeAt();
      if (
        (charCode >= 97 && !set.has(String.fromCharCode(charCode - 32))) ||
        (charCode < 97 && !set.has(String.fromCharCode(charCode + 32)))
      ) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < s.length; i++) {
    while(!isNice(windowSum)){
       windowSum = windowSum.slice(start)
       console.log(windowSum);
       
        start++
    }
    maxLength = Math.max(maxLength, i - start + 1)
    windowSum += s[i]
  }
  return maxLength

};

console.log(longestNiceSubstring("YazaAay"));

//abcACB
//bB
const isNice = (str) => {
  const allCharCode = [...new Set(str.split("").map((e) => e.charCodeAt()))];
  for (let i = 0; i < allCharCode.length; i++) {
    if (allCharCode[i] < 97) {
      if (!allCharCode.includes(allCharCode[i] + 32)) {
        return false;
      }
    } else {
      if (!allCharCode.includes(allCharCode[i] - 32)) {
        return false;
      }
    }
  }
  return true;
};
//console.log(isNice('abcccccBBBBbbbbaaaaAACCCCACB'));

const isNice2 = (str) => {
  const set = new Set(str);
  for (const char of set) {
    const charCode = char.charCodeAt();
    if (
      (charCode >= 97 && !set.has(String.fromCharCode(charCode - 32))) ||
      (charCode < 97 && !set.has(String.fromCharCode(charCode + 32)))
    ) {
      return false;
    }
  }
  return true;
};
//console.log(isNice2("abcccccBBBBbbbbaaaaAACCCCACB"));
//console.log(isNice2("abd"));
