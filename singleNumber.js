var singleNumber = function(num){
	if(num.length === 0){
		return 0;
	}
	var result = 0;
	for(var x in num){
		result ^= num[x];
	}
	return result;
}