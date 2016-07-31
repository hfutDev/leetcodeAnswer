// 心疼自己，记录心酸的编码过程，最终结果在最下面。写的很挫，一般人应该是很难读懂

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
    this.val = val;
    this.next = null;
}
 * function ListNode(val) {
    this.val = val;
    this.next = null;
}
 * function ListNode(val) {
    this.val = val;
    this.next = null;
}
 * function ListNode(val) {
    this.val = val;
    this.next = null;
}
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 // fuck 撸了半天撸成了数组的实现 failed
var addTwoNumbers = function(l1, l2) {
    function makeNumbers(arr) {
    	var number = 0;
    	for(var i = 0; i < arr.length; i++) {
    		number += arr[i] * Math.pow(10, i);
    	}
    	return number;
    }

    resultnumber = makeNumbers(l1) + makeNumbers(l2);
    var str = resultnumber + '';
    var result = [];
    for(var i = 0; i < str.length; i++) {
    	result.unshift(Number(str[i]));
    }
    return result;
};
addTwoNumbers([2,4,3],[5,6,4]);

// 链表实现 failed

var addTwoNumbers = function(l1, l2) {
   function makeNumbers(list) {
        var i = 0;
        var sum = 0;
        while(list.next) {
            sum += list.val * Math.pow(10, i);
            i ++;
            list = list.next;
        }
        return sum += list.val * Math.pow(10, i);
    }
    resultnumber =  makeNumbers(l1) + makeNumbers(l2);
    var str = resultnumber + '';
    var result = new ListNode(Number(str[str.length-1]));
    var _result = result;
    for(var i = str.length -2; i >= 0; i--) {
        result.next = new ListNode(Number(str[i]));
        result = result.next;
    }
    return _result;
};

// fuck 上面给的数据超出JS计算精度范围了，自动表示为科学计数法。后面就全错了。
// 属于极端例子不可测的


// 最终答案
var addTwoNumbers = function(l1, l2) {
   if(!l1) {
    return l2;
   }
   else if(!l2) {
    return l1;
   }
   var tag = 0;
   l3 = l1.val + l2.val;
   if(l3 >= 10) {
       l3 = l3%10;
       // tag 表示进位
       tag = 1;
       debugger;
   }
   l3 = new ListNode(l3);//0
   _l3 = l3;
   while (l1.next || l2.next || tag !== 0) {
     if (l1.next === null && l2.next) {
        if(l2.next.val + tag >= 10) {
          l3.next = new ListNode(l2.next.val + tag - 10);
        }
        else {
          l3.next = new ListNode(l2.next.val + tag);
          tag = 0;
        }
        l2 = l2.next; l3 = l3.next;   
     }
     else if (l2.next === null && l1.next) {
        if(l1.next.val + tag >= 10) {
          l3.next = new ListNode(l1.next.val + tag - 10);
        }
        else {
          l3.next = new ListNode(l1.next.val + tag);
          tag = 0;
        }
        l1= l1.next; l3 = l3.next; 
     }
     else if (!(l2.next||l1.next) && tag ==1 ) {
        l3.next = new ListNode(tag);
        tag = 0;
     }
     else {
        var sum = l1.next.val + l2.next.val + tag;
        tag = 0;
        if (sum >= 10) {
           sum = sum%10;
           tag = 1; 
        }
        l3.next = new ListNode(sum);
        l1 = l1.next; l2 = l2.next; l3 = l3.next;
     } 
   }
   return _l3;
};
