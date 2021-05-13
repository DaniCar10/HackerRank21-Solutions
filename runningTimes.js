// https://www.hackerrank.com/challenges/runningtime/problem

n = 2
arr = [2, 1, 3, 1, 2]

function runningTime(arr) {
    let current;
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        current = arr[i];
        while (j >= 0 && current < arr[j]) {
            arr[j+1] = arr[j]
            j--;
            count++
        }        
        arr[j + 1] = current;
    }
    console.log(count) 
}
runningTime(arr)