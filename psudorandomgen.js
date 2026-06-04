function PsudoRandomNumberGen(multiplier,currentSeed,incrementSeed,modulousLimit)
{   
    let finalArray=[]
    //running loop at modulous times to apply linear congruential generator formula to detect pattern
    for(let intialValue=0;intialValue<modulousLimit;intialValue++)
    {
        let next=(multiplier*currentSeed+incrementSeed)%modulousLimit
        currentSeed=next
        finalArray.push(next)
    }
    return finalArray
}
let patternResults=PsudoRandomNumberGen(6,3,3,30)
console.log(patternResults)