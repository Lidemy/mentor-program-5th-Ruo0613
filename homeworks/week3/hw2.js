var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {

 let temp = lines[0].split(' ')//切割

 let n = Number(temp[0])

 let m = Number(temp[1])

 for(let i=n; i<=m; i++){
     if (isNarcissisticnumber(i)){
         console.log(i)
     }
 }
 }

 //判斷幾位數
 function count(n){
  let result = 0
  if(n===0){
    return 1
  }
  while(n!=0){
      n = Math.floor( n / 10)
      result++
  }
  return result
 }

 //判斷是否為水仙花數
 function isNarcissisticnumber(n){
     let digits = count(n) //幾位數
     let m = n
     let sum = 0
     while(n!=0){
         let num = n % 10
         sum += num**digits
         n = Math.floor( n / 10)
     }
    if(sum === m){
        return true
    }
    else{
        return false
    }
 }

 