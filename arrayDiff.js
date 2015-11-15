function array_diff(a, b){
  return a.filter(function(e){ return b.indexOf(e)==-1;});
}

console.log(array_diff([1,2,3,4], [1,4]));