const naiveSearch = (chain: string, slice: string): number => {
    let start = 0;
    let end = slice.length - 1
    let counter = 0

    for(let i = 0; i < chain.length; i++){
        let cutString = chain.slice(start, end)
        if(cutString === slice){
            counter += 1
        }
        start += 1
        end += 1
    }

    return counter
}

console.log()