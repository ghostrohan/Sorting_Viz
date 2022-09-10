export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    if(isSoreted(array)){
        alert("Array Already in Sorted State")
        return animations;
    } 
    heapSortHelper(array,  array.length , animations);
    return animations;
}
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function heapSortHelper(array,n,animations){
      for(var i = Math.floor(n/2) - 1 ; i >= 0 ; i--){
          heapify(array, n, i, animations);
      } 
      for(var i = n -1 ; i > 0 ; i--){
          animations.push([0, i]);
          animations.push([0, i]);
          animations.push([i, array[0]]);
          animations.push([0, array[i]]);
          swap(array,i,0);

          heapify(array,i,0,animations);
      } 
}
function heapify(array,n,i,animations){
    var largest = i;
    var left = 2*i + 1;
    var right = 2*i + 2;

    if(left < n && array[largest] < array[left]){
        largest = left;
    }
    if (right < n && array[largest] < array[right]) {
        largest = right;
    }
    if(largest != i){
        // As value is being swapped the animation are in a set of 4
        animations.push([i,largest]);
        animations.push([i,largest]);
        animations.push([i,array[largest]]);
        animations.push([largest,array[i]]);
        swap(array, largest, i);
        heapify(array,n,largest,animations);
    }
}
// This function is a check jst to ensure sorting needs to be done
// If array is already sorted no need to sort
function isSoreted(array){
    let i = 0;
    let j = 1;
    let n = array.length;
    while(j < n){
        if(array[i] > array[j]) return false;
        i++;
        j++;
    }
    return true;
    
}