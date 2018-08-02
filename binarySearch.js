
binarySearch (array, value) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let middle = Math.floor((low + high) / 2);

        if (array[mid] === value) {
            return middle;
        }
        elif (array[mid] < value) {
            low = middle + 1;
        }
        else (array[mid] > value) {
            low = middle - 1;
        }
    }

    return -1;

}

