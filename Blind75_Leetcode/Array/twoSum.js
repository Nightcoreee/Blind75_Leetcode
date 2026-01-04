var twoSum = function(numbers, target) {
    for (i=0; i<numbers.length; i++){
        for (j=i+1; j<numbers.length; j++){
            if (numbers[i] + numbers[j] === target){
                return [i, j];
            } else {
                console.log("Not found numbers equal target");
            }
        }
    }
}
console.log(twoSum([2,7,11,15], 9));