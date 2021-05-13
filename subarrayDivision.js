// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen

// let s = [1, 1, 1, 1, 1, 1];
let s = [1, 2, 1, 3, 2];
// soma de elementos
let d = 3;
// total de elementos a serem somados
let m = 2;

function solve(s, d, m) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
      let newArr = s.slice(i, i + m);
      if((newArr.length == m) && (d == newArr.reduce((currentValue, indexValue) => currentValue + indexValue))){
        result.push(newArr);
      }
    }
    return result.length;
  }

  console.log(solve(s, d, m));