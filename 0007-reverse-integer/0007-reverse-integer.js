/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  

           let s=x.toString()
let rev=""
if(x>=0)
{
  if(s[s.length-1]==0)
{
  s=s.split("")
  s.splice(s.length-1)
  rev=s.reverse().join("")
}
else
{
  rev=s.split("").reverse().join("")
}
}
else
{
  s=s.split("")
  s.splice(0,1)
  rev=rev+"-"
  rev=rev+s.reverse().join("")
  
}
     let lowerLimit=Math.pow(-2,31)
    let upperLimit=Math.pow(2,31)-1
    if(rev<lowerLimit || rev>upperLimit)
        {
            rev=0
        }
    
            
return rev

}