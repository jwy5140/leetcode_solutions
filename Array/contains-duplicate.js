var containsDuplicate = function(nums) {
    const countObj = {};
    for (let n = 0; n < nums.length; n++){
        if (countObj[nums[n]]){
            return true
        }
        else {
            countObj[nums[n]] = 1
        }
    }
    return false
};