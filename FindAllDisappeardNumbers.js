/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
let finalArray=[]
for(let i=0;i<nums.length;i++)
{
  if(!nums.includes(i+1))
  {
    finalArray.push(i+1)
  }
}
return finalArray
};
