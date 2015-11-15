function insertDash(num) {
   num=String(num).split('');
   z='';
   for(i=0;i<num.length-1;i++){
     z+=num[i];
     if((num[i]%2!=0) && (num[i+1]%2!=0)){
       z+='-'
     }
   }
   z+=num[num.length-1];
   return(z);
}