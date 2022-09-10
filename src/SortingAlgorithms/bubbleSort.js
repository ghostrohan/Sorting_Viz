export function getBubbleSortAnimations(array) {
    const animations =[];
    if(array.length <= 1)return animations;
    if (isSoreted(array)) {
        alert("Array Already in Sorted State")
        return animations;
    }
    var n = array.length;
    bubbleSortHelper(array,n,animations);
    return animations;
}
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function bubbleSortHelper(array,n,animations){
    for(let i = 1 ; i < n ; i++){
        for(let j = 0 ; j < n - i ; j++){
            if(array[j] > array[j+1]){
                animations.push([j,j+1]);
                animations.push([j,j+1]);
                animations.push([j+1, array[j]]);
                animations.push([j, array[j+1]]);
                swap(array,j,j+1);

            }
        }
    }
}
// This function is a check jst to ensure sorting needs to be done
// If array is already sorted no need to sort
function isSoreted(array) {
    let i = 0;
    let j = 1;
    let n = array.length;
    while (j < n) {
        if (array[i] > array[j]) return false;
        i++;
        j++;
    }
    return true;

}