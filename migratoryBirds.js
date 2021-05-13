// https://www.hackerrank.com/challenges/migratory-birds/problem


// let arr = [1, 4, 4, 4, 5, 3, 3, 3, 5];
// let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
// let arr = [1, 2, 3, 4, 4, 4, 5, 3, 2, 1, 3, 4];
let arr = [1, 4, 4, 4, 5, 3, 3, 3];


function migratoryBirds(arr) {
  // transforma a array em um objeto chave-valor
  // a chave é o número que estava na array e o valor é a quantidade de vezes que esse número aparece
  var newObj = arr.reduce(function(obj, b) {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});
    
    // ordena o objeto pelo valor em ordem decrescente
    var keysSorted = Object.keys(newObj).sort(function(a,b){return newObj[b]-newObj[a]})
    var mostCommon = Number(keysSorted[0])
    return mostCommon
    
}

console.log(migratoryBirds(arr))