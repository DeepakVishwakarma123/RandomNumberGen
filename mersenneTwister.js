/*
hum isme loop ka use nhi karenge woh back to back numbers
dega toh isliye hume kuch system chahiye ki jo memory counter ki
value ko track kar sake and function jab bhi hum run kare toh 
voh previous time jo operation hua tha usk agle number
se start ho varna maza nhi aayega
ek baar yeh ho jaye 
uske baad hume twisting function and kya naam hai uska
jaise ki temperingn perocess karke final number output karna hai 
let's hope ise hume ache se build kare koshish karenge toh ho jayega 
*/


/*
assuming user need very much time to hit last digit of array as no body on website will gone hit 624
so that's why we didn't preserving curretn array of 624 list 
if someone will hit then we are ready to update old array with twisting 
operation otherwise if someone gone refresh the things then he need to again start with seed overall
and another problem we need to solve this problem by memory memoization technique so if we save the 
created mersenne list then it will expose to someone via  application tab of chrome dev tools
*/


let inputSeed=document.querySelector("#inputSeed")
let submitButton=document.querySelector("button")
let generateButton=document.querySelector("#generate")
let pargraph=document.querySelector("p")
let mersenneList=[]



function setSeed()
{
let randomSeed=inputSeed.value
if(randomSeed==="")
{
    alert("please fill field first")
}
else{
    let randomSeedInnumber=parseInt(randomSeed)
    mersenneList[0]=randomSeedInnumber
    GenerateMersenneList()
    console.log(mersenneList)
}
}
submitButton.addEventListener('click',setSeed,false)




function GenerateMersenneList()
{   
    if(mersenneList.length!=0)
    {
    for(let i=1;i<624;i++)
    {
        //because we have intial already filled that's why we need do loop from next iteration
        //pick next index and fil that with this operation
        mersenneList[i]=(1812433253*(mersenneList[i-1]^(mersenneList[i-1]>>30))+i)%(Math.pow(2,32))
    }
}
}

if(localStorage.getItem("counter")===null)
{
    let counter=622
    localStorage.setItem("counter",String(counter))
}
function tempring()
{ 
  let counter=parseInt(localStorage.getItem("counter"))

  if(parseInt(localStorage.getItem("counter"))===623)
  { 
    alert("something is happended")
    twisting()
    // do twisting 
    // we know that arrays are stored in heap show we perform the operation directly on itself
    return
  }
  if(mersenneList.length===0)
  {
    alert("first please fill the seed")
    return
  }
  let pickNumber=mersenneList[counter]
  counter++
  localStorage.setItem('counter',String(counter))

  //operation first
  let y1=pickNumber^(pickNumber>>11)
  //second operation
  let y2=y1^((y1<<7)&&2636928640)
  //third operation
  let y3=y2^((y2<<15)&&4022730752)
  let randomNumber=y3^(y3>>18)
  pargraph.textContent=`random number: ${randomNumber}`
  return randomNumber
}



generateButton.addEventListener('click',tempring,false)

function twisting()
{
//convert current two number into binary step 1
for(let i=0;i<mersenneList.length;i++)
{    
    console.log("hello");
    
    // referign to the current index i value
    let CurrentIterationBinaryArray=binaryConversion(mersenneList[i])
    //current index next number
    let nextValueInBinaryArray=binaryConversion(mersenneList[i+1])
    nextValueInBinaryArray[0]=CurrentIterationBinaryArray[0]
    let firstStepMixNumber=parseInt(nextValueInBinaryArray.join(""))

    //starting a second step
    let secondStepMixing=firstStepMixNumber>>1

    //third stpe doing xor with distance number at 397 place
    mersenneList[i]=parseInt(secondStepMixing,2)^mersenneList[i+397]
    console.log("hello 2",i);
    console.log("mersennee list now",mersenneList);
    
    
}
}



function binaryConversion(decimalNumber)
{
console.log('test');

let isQuotientnotZero=true
let remainderArray=[] 
while(isQuotientnotZero)
{     
    let Quotient=decimalNumber/2
    let remainder=decimalNumber%2
    decimalNumber=Math.floor(Quotient)

        remainderArray.push(remainder)
        
  
    
    // remainderArray.push(remainder)
    if(Quotient===0)
    {
        isQuotientnotZero=false
    }
}

let binaryNumberArray=remainderArray.reverse()
return binaryNumberArray
}


//there are some bugs might gone solve  yesturday first i need to check for it's cause and why 
//it happens