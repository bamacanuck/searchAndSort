// STILL in progress

// (fix this code)

// vis-a-vis middle versus mid, etc.

let midInd;
let array = process.argv(3);
let value = process.argv(2);

binarySearch (array, target) => {

    let lowInd = 0;

    let highInd = array.length - 1;

    while (lowInd <= highInd) {

        let midIndex = Math.floor((low + high) / 2);

        if (array[midInd] === value) {
            return value;
        }
        elif (array[midInd] < value) {
            low = middle + 1;
        }
        else (array[midInd] > value) {
            low = middle - 1;
        }
    }

    // return - 1;

}

return middle;