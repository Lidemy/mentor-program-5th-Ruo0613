function reverse(str) {

    var x = ''
    for ( i = str.length - 1 ; i >= 0 ; i--) {
        
        x += str[i]
    }
    console.log(x)
  
}

reverse('abcdefg');
