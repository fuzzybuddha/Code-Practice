function hammingDistance(a,b){
  d=0;
  for(i=0; i<a.length; i++){
    if(a[i]!=b[i]){
      d+=1;
    }
  }
  return d;
}