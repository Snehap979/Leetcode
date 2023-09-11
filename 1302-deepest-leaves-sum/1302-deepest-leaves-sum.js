/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let sum=0
    let sumArray=[]
    if(root)
        {
            let deque=[]
            let arr=[[root,0]]
            while(arr.length!=0)
                {
                    let [node,count]=arr.pop()       
                    count=count+1
                    if(node.left==null && node.right==null)
                        {
                            //if the level of the top of the sumArray is different then sumArray=[]
                            if(sumArray.length>0)
                                {
                                     let val=sumArray[sumArray.length-1]
                            if(val[1]!=count)
                                {
                                    sumArray=[]
                                }
                                }
                           
                            sumArray.push([node.val,count])
                            // console.log("sumArray",sumArray)                          
                        }
                    else
                        {
                             if(node.left)
                             {
                                    deque.push([node.left,count])
                                    sumArray=[]
                             }
                            if(node.right)
                            {
                                 deque.push([node.right,count])
                                 sumArray=[]
                             }
                        }
                  
                    
                if(arr.length==0)
                    {
                        arr=deque
                        deque=[]
                    }
                }
            
        }
     // console.log("sumArray",sumArray)
    for(let i=0;i<sumArray.length;i++)
{
   
    sum=sum+sumArray[i][0]
    
}
    return sum
};