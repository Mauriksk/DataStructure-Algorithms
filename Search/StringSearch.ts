const naiveSearch = (chain: string, slice: string): number => {
    let start = 0;
    let end = slice.length
    let counter = 0

    for(let i = 0; i < chain.length; i++){
        let cutString = chain.slice(start, end)
        console.log("in for", cutString, slice)
        if(cutString === slice){
            counter += 1
        }
        start += 1
        end += 1
    }

    return counter
}

console.log(naiveSearch("omglittleboyomg", "omg"))// 2 times

//Second Naive Search

function NaiveSearch2 (long: string, short: string) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break
            if(j === short.length - 1) count++
            
        }
    }
    return count
}