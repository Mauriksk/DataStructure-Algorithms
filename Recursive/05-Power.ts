//!Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (base: number, exponent: number): number => {
    let result: number = 0

    if(exponent === 0){
        return 1
    }

    const helper = (currentValue: number, exponent: number) => {

        if(exponent === 1){
            return result = currentValue
        }

        result = currentValue * base

        helper(result, exponent - 1)
    }

    helper(base, exponent)
    
    return result 
}
console.log(power(2, 4))