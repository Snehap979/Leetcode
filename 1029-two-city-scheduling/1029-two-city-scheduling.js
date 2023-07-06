/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let n=costs.length
let sum=0
let acount=0
  let bcount=0
  let arr=[]
  let t=[]
for(let i=0;i<costs.length;i++)
{
  diff=Math.abs(costs[i][0]-costs[i][1])
  if(diff==0)
  {
    t.push(costs[i][0])
    arr.push(null)
  }
  else
  arr.push(diff)
}
// console.log("arr",arr)
let tempDiff=[...arr]
tempDiff.sort(compare)
function compare(a,b)
{
  return b-a
}
// console.log("tempDiff",tempDiff)
let indices=[]
for(let i=0;i<tempDiff.length;i++)
{
  if(tempDiff[i]!=null)
  {
    let index=arr.indexOf(tempDiff[i])
  // console.log("index,tempDiff",index,tempDiff)
  // console.log("index",index)
  let aval=costs[index][0]
  let bval=costs[index][1]
  if(aval<bval && acount<n/2)
  {
    sum=sum+aval
    acount++
  }
  else if(bval<aval && bcount<n/2)
  {
    sum=sum+bval
    bcount++
  }
  else{
    if(bcount<n/2)
    {
      sum=sum+bval
      bcount++
    }
    else
    {
      sum=sum+aval
      acount++
    }
  }
  // console.log("arr",arr,index,tempDiff[i])
  arr.splice(index,1)
  costs.splice(index,1)
  }
// indices.push(i)

}
// console.log("acount,bcount",acount,bcount,sum)
// console.log("sum",sum,t)
for(let i=0;i<t.length;i++)
{
    sum=sum+t[i]
}
    return sum
};