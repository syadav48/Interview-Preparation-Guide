const checkThePalindrome = (str) => {
    const rev = str.split("").reverse().join("")
    return rev === str
}
console.log(checkThePalindrome("madam"));
