function flowerbed(flowerbed,n){
let count=0
let i=0
let adjacent=0
if(n==0)
{
  return true
}
if(flowerbed[0]==0 && flowerbed[1]==0)
{
  count=count+1
  if(count==n)
  {
    return true
  }
  i=i+1
}
let cur=flowerbed[i]
for(i;i<flowerbed.length;i++)
{
  let next=flowerbed[i+1]
  adjacent=flowerbed[i+2]
  if(cur!=undefined && next!=undefined && cur^next===0)
{
  count=count+1
 next=next^1
  if(count==n && (next^cur^adjacent!=0))
  {
    return true
  }
   
  cur=next
 
 
}
else
  cur=next
}
if(count==n)
{
return (true)
}
else return(false)


}
console.log(flowerbed([1,0,0,1,0],2))

