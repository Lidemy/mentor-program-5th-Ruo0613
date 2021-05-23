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
function solve(lines) {
    let m = Number(lines[0])
    for(let i=1;i<=m; i++){
      let [a, b, k] = lines[i].split(' ')
      console.log(compare(a, b, k))
    }
  }
function compare(a, b, k) {  //比大小
    if (a === b) return "DRAW"
    if (k == -1) {    //對調
      let temp = a
      a = b
      b = temp
    }  
    if (a.length != b.length) {
        if(a.length > b.length){
            return "A"
        }
        else{
            return "B"
        }
    }
    for (let i=0; i<a.length; i++) {
        if (a[i] == b[i]) {
            continue;
        }
        if(a[i] > b[i]){
            return "A"
        }
        else{
            return "B"
        }
    }
  }
