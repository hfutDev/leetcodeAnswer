/**
Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var len = nums.length,res = [];
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i);
        res.push(j);
        return res;
      }
    }
  }
};

//第二种算法
var twoSum = function(nums, target) {
  var len = nums.length,tem={};
  for (var i = 0; i < len; i++) {
    tem[nums[i]] = i;
  }
  for (var i = 0; i < len; i++) {
    var cha = target - nums[i];
    if(tem[cha] != undefined && i != tem[cha]){
        return [i,tem[cha]]
    }
  }
};
