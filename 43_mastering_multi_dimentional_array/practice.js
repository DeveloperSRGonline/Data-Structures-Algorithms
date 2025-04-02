let arr = [[1,2,4,5],[1,2,5,4],[4,6,7,9]]
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j > arr[i].length; j++){
        process.stdout.write(`${arr[i] [j]} `)
    }
    console.log();
}