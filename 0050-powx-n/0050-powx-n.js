/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x==0)
        {
            return 0
        }
    if(n==0 || x==1)
        {
            return 1
        }
    if(x==-1 && n%2==0)
        {
           return 1 
        }
    if(x==-1 && n%2==1)
        {
            return -1
        }
 
    
    let sum=1
if(n>0)
{
  for(let i=0;i<n;i++)
  {
  sum=sum*x
  }
}
else
{
  let num=-1*n
  // console.log("num",num)
  for(let i=0;i<num;i++)
  {
      if(sum==0)
          {
              return 0
          }
  sum=sum/x
      // console.log("sum",sum)
  }
}
    return sum
};