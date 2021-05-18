function join(arr, concatStr) {
    var resultjoin = ''
    
    for (i = 0 ; i < arr.length - 1 ; i++)
    {
        resultjoin += arr[i] + concatStr
    }
        resultjoin += arr[i]
    return resultjoin
}

function repeat(str, times) {
    var resultrepeat = ''

    for (i = 1 ; i <= times ; i++)
    {
        resultrepeat += str
    }
    return resultrepeat
  
}

console.log(join(['a', 2, 3, 'b', 5], '!'));
console.log(repeat('yoyo', 5));
