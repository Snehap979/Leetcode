/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path=path.split("/")   
    let canonicalArray=[]
    let updatedCanonicalArray=['/']
    for(let i=0;i<path.length;i++)
        {
            
            console.log("path[i]!=",path[i]!="" && path[i]!='.')
            if(path[i]!="" && path[i]!='.')
                {
                    // console.log("canonicalArray",canonicalArray)
                    if(path[i]!="..")
                        {
                            // console.log("path[i].....",path[i])
                            canonicalArray.push(path[i])
                        }
                    else
                        {
                            canonicalArray.pop()
                        }                     
                }
                      
        }
    // console.log("canonicalArray",canonicalArray)
   for(let i=0;i<canonicalArray.length;i++)
       {
           updatedCanonicalArray.push(canonicalArray[i])
           updatedCanonicalArray.push('/')
       }
    if(updatedCanonicalArray.length!=1 && updatedCanonicalArray[updatedCanonicalArray.length-1]=='/')
        {
            updatedCanonicalArray.pop()
        }
    return updatedCanonicalArray.join("")

    
};