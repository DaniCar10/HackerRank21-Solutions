// https://www.hackerrank.com/challenges/counting-valleys/problem

let steps = 8
let path = 'UDDDUDUU'

function countingValleys(steps, path) {
    // transforma o parâmetro path em array
    let pathArr = path.split('');
    // transforma os elementos D para -1 e U para 1
    let pathNum = [];
    for (let i = 0; i < pathArr.length; i++) {
        let element = pathArr[i];
        if (element == 'U') {
            element = 1
        }
        if (element == 'D') {
            element = -1
        }
        pathNum.push(element);        
    }
    
    pathNum.unshift(0);
    let sum;
    let res = 0;
    pathNum = pathNum.map(elem => sum = (sum || 0) + elem);

    for (let index = 0; index < pathNum.length; index++) {
        if((pathNum[index] == 0 && pathNum[index+1] == -1) || (pathNum[index] == -1 && pathNum[index+1] == 0) ){
            res++;
        }        
    }
   return Math.floor(res/2);

}
console.log(countingValleys(steps, path))