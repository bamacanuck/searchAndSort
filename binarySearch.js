// STILL in progress

// (fix this code)

let middle;
let array = process.argv(3);
let value = process.argv(2);

binarySearch (array, target) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let middle = Math.floor((low + high) / 2);

        if (array[middle] === value) {
            return value;
        }
        elif (array[mid] < value) {
            low = middle + 1;
        }
        else (array[mid] > value) {
            low = middle - 1;
        }
    }

    // return - 1;

}

return middle;