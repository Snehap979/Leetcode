/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count=0
let tempHeights=[...heights]
tempHeights.sort(compare)
function compare(a,b)
{
  return a-b
}
for(let i=0;i<heights.length;i++)
{
  if(heights[i]!=tempHeights[i])
  count=count+1
}
return count
};