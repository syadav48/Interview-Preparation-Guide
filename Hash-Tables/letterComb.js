var letterCombinations = function(digits) {
    let res = []
    let fin = []
    let num = [2, 3, 4, 5, 6, 7, 8, 9]
    let val = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], 
    ['m', 'n', 'o'], 
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z'],
    ]
    let map = new Map
    map.set("2", ['a', 'b', 'c'])
    map.set("3", ['d', 'e', 'f'])
    map.set("4", ['g', 'h', 'i'])
    map.set("5", ['j', 'k', 'l'])
    map.set("6", ['m', 'n', 'o'])
    map.set("7", ['p', 'q', 'r', 's'])
    map.set("8", ['t', 'u', 'v'])
    map.set("9", ['w', 'x', 'y', 'z'])
    for(let i = 0; i < digits.length; i++){
        res.push(map.get(digits[i]))   
    }
    
    for(let i = 0; i < res[0].length; i++){
        for(let j = 0; j < res[i].length; j++){
            let word = ''
            word += res[]
            fin.push(word)
        }
    }
    return fin
    
};

console.log(letterCombinations("23"));
//[ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ]
// ad, ae, af 00, 01, 02 [i][j++]
// bd, be, bf 10, 11, 12 [j][j++]
// cd, ce, cf