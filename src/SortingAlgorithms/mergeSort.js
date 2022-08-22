export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    mergeSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function mergeSortHelper(mainArray, startidx, endidx, animations) {
    if (startidx === endidx) {
        return;
    }
    const mid = Math.floor((startidx + endidx) / 2);
    mergeSortHelper(mainArray, startidx, mid, animations);
    mergeSortHelper(mainArray, mid + 1, endidx,animations);
    merge(mainArray, startidx,endidx, animations,[],[]);

}
function merge(mainArray, startidx, endidx, animations,first,second) {
    
    let mid = Math.floor(startidx + endidx)/2;
    let length1 = mid - startidx + 1;
    let length2 = endidx - mid;
    
    var map1 = new Map();
    var map2 = new Map(); //  To keep track of the original indexs to 
    // Aminate Correctly

    let k = startidx;
    for (let i = 0 ; i < length1 ; i++){
        map1.set(i, k); // Pushing Key Value pairs to keep track of indexes originally
        first.push(mainArray[k++]);
    }
    k = mid + 1;
    for (let j = 0; j < length2; j++) {
        map2.set(j, k);
        second.push(mainArray[k++]);
    }

    let index1 = 0;
    let index2 = 0;
    let array_start_index = startidx;
    while(index1 < length1 && index2 < length2){
        animations.push([map1.get(index1), map2.get(index2)]);
        animations.push([map1.get(index1), map2.get(index2)]);
        if(first[index1] <= second[index2]){
            animations.push([array_start_index,first[index1]]);
            mainArray[array_start_index++] = first[index1++];
        }
        else{
            animations.push([array_start_index, second[index2]]);
            mainArray[array_start_index++] = first[index2++];
        }
    }
    while(index1 < length1){
        animations.push([map1.get(index1), map1.get(index1)]);
        animations.push([map1.get(index1), map1.get(index1)]);
        animations.push([array_start_index, first[index1]]);
        mainArray[array_start_index++] = first[index1++];

    }
    while (index2 < length2) {
        animations.push([map2.get(index2), map2.get(index2)]);
        animations.push([map2.get(index2), map2.get(index2)]);
        animations.push([array_start_index, second[index2]]);
        mainArray[array_start_index++] = second[index1++];

    }

    map1.delete();
    map2.delete();
    first = [];
    second = [];

}
