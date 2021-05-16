function join(arr, concatStr) {
    var x = ''
    
    for (i = 0 ; i < arr.length ; i++)
    {
        x += arr[i] + concatStr
    }

    return x
}

function repeat(str, times) {
    var y = ''

    for (i = 1 ; i <= times ; i++)
    {
        y += str
    }
    return y
  
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
