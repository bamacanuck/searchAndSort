var result = binarySearch([
  1,// index 0
  23,// index 1
  43,// index 2
  56,// index 3
  77,// index 4
  89,// index 5
  211,// index 6
  212,// index 7
  789,// index 8
  972,// index 9
  1001,// index 10
  4567,// index 11
  4599,// index 12
  83784// index 13
], 212);

console.log(result);

function binarySearch(stuff, searchElement) {

  // Set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = stuff.length - 1;
  var minIndex = 0;

  // This is the main loop.
  while (minIndex <= maxIndex) {

    // Get a position near the middle.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    // Get that element.
    currentElement = stuff[currentIndex];

    // Test it.
    if (currentElement < searchElement) {
      // if it's less than we are looking for, look *above* this value.
      minIndex = currentIndex + 1;

    }
    else if (currentElement > searchElement) {

      // If it's more than we are looking for, look *below* this value.
      maxIndex = currentIndex - 1;
    } 
    else {
      // We found it; return the index.
      return currentIndex;
    }

  }

  return false;
}

// binarySearch ();