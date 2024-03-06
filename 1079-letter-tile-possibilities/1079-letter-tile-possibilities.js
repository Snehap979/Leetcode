/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let nums=tiles
let finalArray=[]

  for(let i=0;i<nums.length;i++)
  {
    backtrack(i,nums,nums[i])
  }
  return finalArray.length


function backtrack(start,array,str)
{
  if(!finalArray.includes(str))
   finalArray.push(str)
  if(str.length==nums.length)
  {
    
    return 
  } 
 let remaining=array.slice(0,start)+array.slice(start+1)
 for(let i=0;i<remaining.length;i++)
 {
   string=str+remaining[i]
   backtrack(i,remaining,string)
 }
}
};