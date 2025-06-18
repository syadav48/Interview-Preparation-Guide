var intToRoman = function (num) {
  const a = num % 10;
  const b = num % 100;
  const c = num % 1000;
  const d = num % 10000;
  function getRoman(n, ini, mid, fin) {
    if (n <= 0 || n >= 10) return "";

    if (n <= 3) return ini.repeat(n);
    if (n === 4) return ini + mid;
    if (n === 5) return mid;
    if (n <= 8) return mid + ini.repeat(n - 5);
    if (n === 9) return ini + fin;
  }

  const numeric = getRoman(a, "I", "V", "X");
  const decimal = getRoman((b - a) / 10, "X", "L", "C");
  const cent = getRoman((c - b) / 100, "C", "D", "M");
  const mil = getRoman((d - c) / 1000, "M");
  if (num.toString().length === 4) {
    return mil + cent + decimal + numeric;
  } else if (num.toString().length === 3) {
    return cent + decimal + numeric;
  } else if (num.toString().length === 2) {
    return decimal + numeric;
  } else {
    return numeric;
  }
};
console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(216));

// I - 1, II - 2, III - 3, IV - 4, V - 5, VI - 6, VII - 7, VIII - 8, IX - 9, X - 10  ---> I, V, X
// X - 10, XX - 20, XXX - 30, XL - 40, L - 50, LX - 60, LXX  - 70, LXXX - 80, XC - 90, C - 100  ---> X, L, C
// C - 100, CC -200, CCC - 300, CD - 400, D - 500, DC - 600, DCC - 700, DCCC - 800, CM - 900, 1000 - M ----> C, D, M
// M- 1000, MM - 2000, MMM - 3000
