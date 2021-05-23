var readline = require('readline');
var rl = readline.createInterface({
input: process.stdin
});
var lines = []
rl.on('line', function (line) {
lines.push(line)
});
rl.on('close', function() {
solve(lines)
})
function solve(lines){
    for(let i = 1; i < lines.length; i++) {
      console.log(isPrime(Number(lines[i])))
    }
  }
  
  function isPrime(n) {  //判斷質數
    if (n < 2){
      let result = 'Composite'
     return result;
    }
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {   
        let result = 'Composite'
        return result;
      }
    }
    let result = 'Prime'
    return result;
  }
