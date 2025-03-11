function* stimulate(){
    let price = 100;
    while(true){
        yield price
        price += (Math.random() - .5) * 2
    }
}

const stockGen = stimulate()
for(let i = 0; i < 10; i++){
    console.log(`Current Price: ${stockGen.next().value.toFixed(2)}`);
    
}