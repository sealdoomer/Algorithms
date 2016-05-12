var trap = function(height){
	if(height === null || height.length === 0){
		return 0;
	}
	var max = 0;
	var res = 0;
	var container = [];
	for(var i = 0; i < height.length; i++){
		container[i] = max;
		max = Math.max(max, height[i]);
	}
	for(i = height.length - 1; i >= 0; i--){
		container[i] = Math.min(max, container[i]);
		max = Math.max(max, height[i]);
		res += container[i] - height[i] > 0 ? container[i] - height[i] : 0;
	}
	return res;
};