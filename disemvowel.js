function disemvowel(str) {
  return str.split('').filter(function(char){
    return !~"aeiouAEIOU".indexOf(char);
  }).join('');
}