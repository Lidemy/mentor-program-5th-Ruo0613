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
function compare(a, b, k) {  //比大小
    if (a === b) return "DRAW"
    if (k == -1) {    //對調
      let temp = a
      a = b
      b = temp
    }
  
    const lengthA = a.length
    const lengthB = b.length
  
    if (lengthA != lengthB) {
        return lengthA > lengthB ? "A" : "B"
    }
    for (let i=0; i<lengthA; i++) {
        if (a[i] == b[i]) {
            continue;
        }
        return a[i] > b[i] ? "A" : "B"
    }
  }
  
  function solve(lines) {
    let m = Number(lines[0])
    for(let i=1;i<=m; i++){
      let [a, b, k] = lines[i].split(' ')
      console.log(compare(a, b, k))
    }
  }