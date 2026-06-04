function binaryConversion(decimalNumber)
{
let isQuotientnotZero=true
let remainderArray=[] 
while(isQuotientnotZero)
{   
    console.log("curren decimal number",decimalNumber);
    
    let Quotient=decimalNumber/2
    let remainder=decimalNumber%2
    decimalNumber=Math.floor(Quotient)
    remainderArray.push(remainder)
    console.log(remainderArray);
    
    // remainderArray.push(remainder)
    if(Quotient===0)
    {
        isQuotientnotZero=false
    }
}

let binaryNumber=remainderArray.reverse()
let final=binaryNumber.join(
    ""
)
return final
}

console.log(
    binaryConversion(2364514560)
);


console.log(parseInt(11,2));
