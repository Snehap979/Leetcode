/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
     let arr1=[]
    let arr2=[]
    while(list1!=null)
        {
            arr1.push(list1.val)
            list1=list1.next
        }
    while(list2!=null)
        {
            arr2.push(list2.val)
            list2=list2.next
        }
    let arr3=[...arr2,...arr1]
   arr3.sort(compare)
    function compare(a,b)
    {
        return a-b
    }
    if(arr3.length==0)
        return null
    let list3=new ListNode(arr3[0])
    let cur=list3
    for(let i=1;i<arr3.length;i++)
        {
            list3.next=new ListNode(arr3[i])
            list3=list3.next
        }
    return cur
};