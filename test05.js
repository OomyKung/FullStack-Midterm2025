// Made by : Me (Note : This is a LeetCode Problem)
// หา Palindrome ที่ยาวที่สุดในสตริงที่กำหนด
// Palindrome คือ สตริงที่อ่านจากด้านหน้าและด้านหลังเหมือนกัน เช่น "racecar" หรือ "level"
function findLongestPalindrome(inputStr){
    let bestStartIndex = 0;
    let bestEndIndex = 0;

    function expandFromCenter(leftIndex,rightIndex){
        while(
            leftIndex >=0 && rightIndex < inputStr.length && inputStr[leftIndex] === inputStr[rightIndex]
        ){
            leftIndex--;
            rightIndex++;
        }
        return [leftIndex+1,rightIndex-1]
    }
    for (let centerIndex = 0;centerIndex < inputStr.length;centerIndex++){
        const [oddStart,oddEnd] = expandFromCenter(centerIndex,centerIndex);
        const [evenStart,evenEnd] = expandFromCenter(centerIndex,centerIndex+1);
        if (oddEnd - oddStart > bestEndIndex - bestStartIndex){
            bestStartIndex = oddStart;
            bestEndIndex = oddEnd;
        }
        else if (evenEnd - evenStart > bestEndIndex - bestEndIndex){
            bestStartIndex = evenStart;
            bestEndIndex = evenEnd;
        }
    }
    return inputStr.slice(bestStartIndex,bestEndIndex+1)
}
console.log(findLongestPalindrome("babad"))
console.log(findLongestPalindrome("cbbd"))
console.log(findLongestPalindrome("racecarxyz"))
console.log(findLongestPalindrome("abcde"))