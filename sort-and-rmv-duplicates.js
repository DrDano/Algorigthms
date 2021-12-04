

const sort = (arr) => {
    let temp = {}
    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]] = arr[i];
    }
    console.log(temp);
}

sort([3,4,7,1,2,2,1])