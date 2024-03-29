// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var addToTotal = function (arr) {
  total = 0;
  modArr = arr.sort().filter((num) => {
    total += num;
    return num < 60 && total < 60;
  });

  return modArr.length;
};
