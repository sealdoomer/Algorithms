var search = function(nums, target){
	if(nums === null || nums.length === 0){
		return -1;
	}
	var l = 0;
	var r = nums.length - 1;
	while(l <= r){
		var m = parseInt((l + r)/2);
		if(target === nums[m]){
			return m;
		}
		if(nums[m] < nums[r]){
			if(target > nums[m] && target <= nums[r]){
				l = m + 1;
			}else{
				r = m - 1;
			}
		}else{
			if(target >= nums[l] && target < nums[m]){
				r = m - 1;
			}else{
				l = m + 1;
			}
		}
	}
	return -1;
}