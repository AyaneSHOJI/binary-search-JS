//array with rondam numbers in ascending order
//find the number "67"
let data = [16, 17, 23, 29, 31, 42, 45, 58, 62, 66, 67, 71, 78, 83, 88];

//How to proceed ?
//1. Get the middle number of the array
//2. Compare the target number and the middle number
//3. if ok, return
//4. if not, compare the target number and the middle number
//5. get the middle number of the half of array according to step 4 result
//6. Compare the target number and the middle number
//7. Get the middle number of the half of array according to step 6 result

function binarySearch(array, target){
    let startIndex = 0;
    let endIndex = array.length - 1;

    while(startIndex <= endIndex){
        let middleIndex = Math.floor((startIndex + endIndex)/2); //in the first loop, middleIndex = 7
        if(array[middleIndex] === target){//In the first loop, not equal, 45 != 67
            return middleIndex;
        }
        else if(array[middleIndex] < target){//In the first loop, 45 < 67
            startIndex = middleIndex + 1;//startIndex has a new value, 8, then restart loop
        }
        else{
            startIndex = middleIndex - 1;
        }
    }
    //target not found
    return -1;
}

Console.log(binarySearch(data, 67));