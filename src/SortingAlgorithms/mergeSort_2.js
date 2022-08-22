 export function getMergeSortAnimations(array){
    const animations = [];
    // Animation Array to store the changes which occur in the state of the array 
    // While going for Any Sorting Technique
    if(array.length <= 1) return array;
    // Here we have created an buffer array 
    // To keep track of the indices as we need them for our colors to pop up
    // and also repace our values in the main array to get sorted array
    const bufferArray = array.slice();
    mergeSortHelper(array,0,array.length-1,bufferArray,animations);
    return animations;
 }

function mergeSortHelper(mainArray, startidx, endidx, bufferArray,animations){
    if(startidx === endidx){
        return;
    }
    const mid = Math.floor((startidx+endidx)/2);
    // we pass the bufferArray as a main array to maintain indices
    mergeSortHelper(bufferArray,startidx,mid,mainArray,animations);
    mergeSortHelper(bufferArray,mid+1,endidx,mainArray,animations);
    // Here our buffer array will help us to check the order of the start and end indices
    // And the we push our animations and update the main-array for the pending recursion call stack
    merge(mainArray, startidx, mid, endidx, bufferArray,animations);

 }
function merge(mainArray, startidx, mid, endidx, bufferArray, animations){
    let k = startidx;
    let i = startidx;
    let j = mid + 1;

    while(i <= mid && j <= endidx){
        // These animations are for when numbers are beging compared with each other
        // The first animation to change color
        // Other to revert color
        animations.push([i,j]);
        animations.push([i,j]);

        if (bufferArray[i] <= bufferArray[j]){
            // This particular animation is for height change
            // So as a set the first two animations are color change 
            // and the third is for height change 
            // This order will become important when 
            // Iterate through the animations array in the main .jsx file
            // to upadate the color and value animations
            animations.push([k, bufferArray[i]]);
            mainArray[k++] = bufferArray[i++];
        }
        else{
            // This particular animation is for height change
            // So as a set the first two animations are color change 
            // and the third is for height change 
            // This order will become important when 
            // Iterate through the animations array in the main .jsx file
            // to upadate the color and value animations
            animations.push([k, bufferArray[j]]);
            mainArray[k++] = bufferArray[j++];
        }
    }
    while(i<=mid){
        // These animations are for when numbers are beging compared with each other
        // The first animation to change color
        // Other to revert color
        animations.push([i, i]);
        animations.push([i, i]);
        // This particular animation is for height change
            // So as a set the first two animations are color change 
            // and the third is for height change 
            // This order will become important when 
            // Iterate through the animations array in the main .jsx file
            // to upadate the color and value animations
        animations.push([k, bufferArray[i]]);
        mainArray[k++] = bufferArray[i++];
    }
    // Same Logic as the above cases
    while(j<=endidx){
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, bufferArray[j]]);
        mainArray[k++] = bufferArray[j++];
    }
}
