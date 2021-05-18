function capitalize(str) {
  
  if (str.length === 0 ) 
  { 
    var result = 'null'
  }
 
  else{
  var result = ''
  result = str[0].toUpperCase() + str.substring(1)
  }
  return result

}

 
console.log(capitalize(''));
