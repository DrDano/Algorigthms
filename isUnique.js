// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

arr = [1, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 9, 10]

var isUnique = function(arr) {
    let obj = {}
    let result = true;
    arr.forEach((value) => {
        if (obj[value]) {
            console.log(obj[value]);
            result = false;
        } else {
            obj[value] = value;
        }
    })
    return result;
}

console.log(isUnique(arr))
