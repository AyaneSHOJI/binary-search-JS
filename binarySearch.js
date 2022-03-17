
//How to proceed ?
//Get the middle number of the array
//Compare the target number and the middle number
//3. if ok, return
//4. if not, compare the target number and the middle number
//5. get the middle number of the half of array according to step 4 result
//6. Compare the target number and the middle number
//7. Get the middle number of the half of array according to step 6 result

function binarySearch(array, target){
    var startIndex = 0;
    var endIndex = array.length - 1;

    while(startIndex <= endIndex){
        var middleIndex = Math.floor((startIndex + endIndex)/2); 
        var middleNumber = array[middleIndex];
        
        if(middleNumber === target){
            return middleIndex;
        }
        else if(middleNumber < target){
            startIndex = middleIndex + 1;
        }
        else if(middleNumber > target){
            endIndex = middleIndex - 1;
        } 
        else{
            return middleIndex;
        }
    }
}

//array with rondam numbers in ascending order
//find the number "67"
let data = [16, 17, 23, 29, 31, 42, 45, 58, 62, 66, 67, 71, 78, 83, 88];

console.log("Target number index is at " + binarySearch([16, 17, 23, 29, 31, 42, 45, 58, 62, 66, 67, 71, 78, 83, 88], 17));