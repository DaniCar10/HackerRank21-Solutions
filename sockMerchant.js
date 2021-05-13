// https://www.hackerrank.com/challenges/sock-merchant/problem

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20,]


// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    // key/cor e chave/quantidade de repetições que a cor aparece
    let pairColorsObj = ar.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
      }, {});

      // cria uma array apenas com a quantidade de repetições que cada cor aparece
      let totalColors = Object.values(pairColorsObj)

      let pairArr = totalColors.map(item => {
          return Math.floor(item / 2)
        })

        let result = pairArr.filter(element => element >= 1).reduce((a, b) => a + b, 0);
        console.log(result)}

sockMerchant(n, ar);