function powers(list){
  z=[];
  for(i=0;i<list.length;i++){
    x=[]
    for(j=i;j<list.length;j++){
      x.push(list.slice(i,j+1));
    }
    z.push(x);
  }
  console.log(z);
  return(z);
}

powers([1,2,3,4,5]);