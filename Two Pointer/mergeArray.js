var mergeArrays = function(nums1, nums2) {
   const map1 = new Map()
   const map2 = new Map()
   let arr = []
   for(let i = 0; i < nums1.length; i++){
    map1.set(nums1[i][0], nums1[i])
   }
   for(let i = 0; i < nums2.length; i++){
    map2.set(nums2[i][0], nums2[i])
   }
   for(const [key, value] of map1){
    if(map2.has(key)){
       arr.push([key, value[1] + map2.get(key)[1]]) 
    } else{
        arr.push(value)
    }
   }
   for(let i = 0; i < nums2.length; i++){
    const isInclude = arr.map((e) => e[0])
    if(!isInclude.includes(nums2[i][0])){
        arr.push(nums2[i])
    }
   }
   return arr.sort((a, b) => a[0] - b[0])
};
console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]));
console.log(mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]));

//tipa hua solution
var mergeArrays = function(nums1, nums2) {
    let result = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] === nums2[j][0]) {
            result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++; j++;
        } else if (nums1[i][0] < nums2[j][0]) {
            result.push(nums1[i++]);
        } else {
            result.push(nums2[j++]);
        }
    }

    while (i < nums1.length) result.push(nums1[i++]);
    while (j < nums2.length) result.push(nums2[j++]);

    return result;
};