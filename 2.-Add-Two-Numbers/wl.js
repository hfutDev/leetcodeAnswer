/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
 var res=[],add=0;
 while(l1&&l2){
    var tem=l1.val+l2.val+add;
    if(tem>9){
        res.push(tem%10);
        add = 1;
    }else{
        res.push(tem);
        add = 0;
    }

   if((l1.next==null)&&(l2.next==null)){
       add && res.push(add);
       return res;
   }else{
       l1 = l1.next || {val:0,next:null};
       l2 = l2.next || {val:0,next:null};
   }
 }

};
