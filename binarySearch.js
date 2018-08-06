// STILL in progress

// (fix this code)

// vis-a-vis middle versus mid, etc.



binarySearch (array, target) => {

	let midInd;
	let array = process.argv(3);
	let value = process.argv(2);

  let lowInd = 0;

  let highInd = array.length - 1;

  while (lowInd <= highInd) {

      let midIndex = Math.floor((low + high) / 2);

      if (array[midInd] === value) {
        return value;
      }
			
			else if (array[midInd] < value) {
        lowInd = middle + 1;
      }
      else if (array[midInd] > value) {
        highInd = middle - 1;
      }
    }

    // return - 1; ???

}

return middle;