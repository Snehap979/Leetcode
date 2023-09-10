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
var countNodes = function(root) {
     let count=0
  if(root)
      {
          arr=[root]
          let deque=[]
          // let count=0
          while(arr.length!=0)
              {
                  let node=arr.pop()
                  // console.log("node.val",node.val)
                  count=count+1
                  if(node.left)
                      {
                          deque.push(node.left)
                           // count=count+1
                      }
                  if(node.right)
                      {
                          deque.push(node.right)
                           // count=count+1
                      }
                  // console.log("deque",deque)
                  if(arr.length==0)
                      {
                          arr=deque
                          // count=count+deque.length
                          deque=[]
                          
                      }
                 
              }
           // return count
      }
   return count
};