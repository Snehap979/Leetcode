let count=0
let i=0
let adjacent=0
if(n==0)
{
  return true
}
if(flowerbed[0]==0 && n==1 && flowerbed.length==1)
return true
let start=flowerbed[0]

let cur=flowerbed[i]
let next=flowerbed[i+1]
if(start==0 && next===0)
{
  count=count+1
  if(count==n)
  {
    return true
  }
  i=i+1
}
cur=flowerbed[i]
next=flowerbed[i+1]
for(i;i<=flowerbed.length-2;i++)
{
 
  let next=flowerbed[i+1]
  adjacent=flowerbed[i+2]
  if(adjacent==undefined && i==flowerbed.length-2)
 {
   //check if the cur and next are the ^ of each
   if(cur!=undefined && next!=undefined && cur^next===0)
   {
     count=count+1
      if(count==n)
      {
        return true
      }
   }
 }
  if(cur!=undefined && next!=undefined && adjacent!=undefined && cur^next===0)
{
  
   
 if(adjacent!=1)
 {
     next=next^1
     count=count+1
 if(count==n && (next^cur^adjacent!=0))
  {
    return true
  }
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

