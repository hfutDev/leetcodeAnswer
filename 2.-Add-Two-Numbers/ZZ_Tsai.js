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
    if(l1===null){
        return l2
    }
    if(l2===null){
        return l1
    }
    sum = l1.val+l2.val
    next1 = l1.next
    next2 = l2.next
    l3 = new ListNode(sum%10)
    new_node = l3
    sum = Math.floor(sum/10)
    while(next1||next2||sum!==0){
        value1 = next1?next1.val:0
        value2 = next2?next2.val:0
        sum = value1+value2+sum
        new_node.next = new ListNode(sum%10)
        new_node = new_node.next
        next1 = next1?next1.next:null
        next2 = next2?next2.next:null
        sum = Math.floor(sum/10)
    }
    return l3
};
