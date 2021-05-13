// https://www.hackerrank.com/challenges/lisa-workbook/problem

// num of chapter
let n = 5
// max problem per page
let k = 3
// num of problem per chapter
let arr = [4, 2, 6, 1, 10]

function workbook(n, k, arr) {
    let counter = 0, numPage = 0
    for (let i = 0; i < n; i++){
        for (let j = 1; j <= arr[i]; j++){
            if (k==1||j % k == 1) {
                numPage++;
            }
            if (j == numPage) {
                counter++;
            }
        }
    }
    return counter;
}
console.log(workbook(n, k, arr))