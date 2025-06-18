var intToRoman = function (num) {
const val = [
    1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
];
const syms = [
    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
];
let res = "";
for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
        num -= val[i];
        res += syms[i];
    }
}
return res;
};
console.log(intToRoman(3749));