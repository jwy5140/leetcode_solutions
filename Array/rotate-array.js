var rotate = function(nums, k) {
    for (let n = 0; n < k; n++){
        nums.unshift(nums.splice(nums.length-1,1))
    }
    return nums
};