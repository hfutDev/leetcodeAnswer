/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // 第一种解法 效率稍微好点
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        var rest = target - nums[i];
        for(var j = 0; j < nums.length; j++) {
            if (nums[j] === rest && j !== i) {
                return [i,j];
            }
        }
    }
};
twoSum([3,2,9], 11);


// 第二种解法 反而效率更低 shit
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        var rest = target - nums[i];
        var j =nums.indexOf(rest);
        if (j !== -1 && i!==j ) {
            return [i,j];
        }
    }
};
