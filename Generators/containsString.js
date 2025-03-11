function* filterString(arr, keyword){
    for(let str of arr){
        if(str.includes(keyword)){
            yield str
        }
    }
}
//Usage
const strings = ["hello world", "generators are cool", "javascript is fun", "yield is powerful"];
for(let str of filterString(strings, "is")){
    console.log(str);
}