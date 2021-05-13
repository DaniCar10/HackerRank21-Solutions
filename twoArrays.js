// https://www.hackerrank.com/challenges/two-arrays/problem


let k = 10
let A = [7, 6, 8, 4, 2]
let B = [5, 2, 6, 3, 1]

// Complete the twoArrays function below
function twoArrays(k, A, B) {
    let sortA = A.sort(function(a, b) {
        return a - b;
    });
    let sortB = B.sort(function(a, b) {
        return b - a;
    });

    let i = 0
    while (i < sortA.length) {
        if (sortA[i] + sortB[i] < k) {
                return 'NO'
            }      
        sortA[i] + sortB[i]
        i++    
        }            
    return 'YES'

}
console.log(twoArrays(k, A, B))