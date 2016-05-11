var sortedArrayToBST = function(nums) {
    if(nums === null || nums.length === 0){
        return null;
    }
    return helper(nums, 0, nums.length - 1);
};

var helper = function(nums, l, r){
  if(l > r){
      return null;
  }
  var m = parseInt((l + r)/2);
  var root = new TreeNode(nums[m]);
  root.left = helper(nums, l, m - 1);
  root.right = helper(nums, m + 1, r);
  return root;
};