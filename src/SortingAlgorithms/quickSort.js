export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
function partition(array, low, high, animations) {
    let pivot = array[high];
    let pivotIndex = low;
    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            animations.push([pivotIndex, j]);
            animations.push([pivotIndex, j]);
            animations.push([pivotIndex, array[j]]);
            animations.push([j, array[pivotIndex]]);
            
            swap(array, pivotIndex, j);
            

            pivotIndex++;

        }

    }
    animations.push([pivotIndex , high]);
    animations.push([pivotIndex , high]);
    animations.push([pivotIndex, array[high]]);
    animations.push([high, array[pivotIndex]]);
    swap(array, pivotIndex, high);
    
    return pivotIndex;

}
function quickSortHelper(array, low, high, animations) {
    if (low < high) {
        let pi = partition(array, low, high, animations);

        quickSortHelper(array, low, pi - 1, animations);
        quickSortHelper(array, pi + 1, high, animations);
    }
}


