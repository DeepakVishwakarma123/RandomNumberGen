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

let inputSeed=document.querySelector("#inputSeed")
let submitButton=document.querySelector("button")
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
    console.log(mersenneList);
    
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












