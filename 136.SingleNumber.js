const singleNumber = (nums) => {
    const result = {}
    for(let i = 0; i < nums.length; i++) {
        if(result[nums[i]]) {
            delete result[nums[i]];
        } else {
            result[nums[i]] = 1
        }
        console.log(result);
    }
    return Object.keys(result)[0]
};

const bestSingleNumber= (n) => n.reduce((a, c) =>  a ^ c, 0);


console.log(singleNumber([1, 2, 2,]))
console.log(bestSingleNumber([1, 2, 2,]))
