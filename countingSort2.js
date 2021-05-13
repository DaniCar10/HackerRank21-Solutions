// https://www.hackerrank.com/challenges/countingsort2/problem

let arr = [1, 1, 3, 2, 1]
function countingSort(arr) {    
    // Write your code here
    var result = new Array(100).fill(0);
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
            result.splice(element,1,result[element]+1);        
    }
    let arrResult = [];

    for (let j = 0; j < result.length; j++) {
        const element2 = result[j];
        if (element2 != 0) {
            for (var k = 1; k <= element2; k++) {
                arrResult.push(j);
              }           
        }        
    }
    return arrResult
}
console.log(countingSort(arr))