var isPalindrome = function(str) {
    
    let lowerS = str.toLowerCase();
    let reverseStr = lowerS.split('').reverse().join('');
    console.log(reverseStr === lowerS);

};

isPalindrome("racecar");