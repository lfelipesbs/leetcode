/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const sorttedNums = nums.sort((a,b) => a - b);

    if (!sorttedNums.includes(1)) {
        return 1;
    };

    for(let i=0; i <= nums.length; i++) {
        if (sorttedNums[i] < 0) {
            continue;
        };
        if (sorttedNums[i] - sorttedNums[i+1] < -1) {
            return sorttedNums[i] + 1;
        };
    };

    return sorttedNums[nums.length - 1] + 1;
};