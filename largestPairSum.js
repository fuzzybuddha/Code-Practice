function largestPairSum(numbers){
  x=findMax(numbers);
  numbers.splice(numbers.indexOf(x), 1);
  z=findMax(numbers)+x;
  return z;
}

function findMax(array){
  max=array[0]
  for(i=1;i<array.length;i++){
    if(max<array[i]){
      max=array[i];
    }
  }
  return max;
}