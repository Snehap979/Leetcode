/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let finalarr=[[1]]
for(let i=1;i<numRows;i++)
{
  let arr=[]
   let valArr=finalarr[i-1]
  for(let j=0;j<=i;j++)
  {
  valArr[j-1]&&valArr[j]? arr.push(valArr[j-1]+valArr[j]):arr.push(1)
  }
  finalarr.push(arr)
}
    return finalarr
};