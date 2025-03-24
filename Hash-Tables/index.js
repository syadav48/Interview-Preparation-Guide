//cryptographic hash function - just explore

function hash(key, arrayLength) {
    let total = 0
    let WEIRED_PRIME = 31 //jsut to decrease the no of collision using prime no
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRED_PRIME + value) % arrayLength
    }
    return total
}

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }
    _hash(key) {
        let total = 0
        let WEIRED_PRIME = 31 //jsut to decrease the no of collision using prime no
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRED_PRIME + value) % this.keyMap.length
        }
        return total
    }
    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
        return index
    }
    get(key){
            let index = this._hash(key)
            if(this.keyMap[index]){
                for(let i=0; i<this.keyMap[index].length; i++){
                    if(this.keyMap[index][i][0] === key){
                        return this.keyMap[index][i][1]
                    }
                }
            }
            return undefined
    }
    values(){
        let valuesArr = []
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }
    keys(){
        let keysArr = []
        for(let i=0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j=0; j<this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
}
const ht = new HashTable()
ht.set("hello world", "goodBye")
ht.set("hello", "cools")
ht.set("hi ogid", "bol")
ht.set("hey dgs", "fench")
console.log(JSON.stringify(ht, null, 4));