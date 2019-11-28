var removeDuplicates = function(nums) {
    for (let n = 0; n < nums.length; n++){
        while (nums[n+1] === nums[n]){
            nums.splice(n+1,1)
        }
    }
};