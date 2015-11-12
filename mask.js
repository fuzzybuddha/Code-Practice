
// return masked string
function maskify(cc) {
  var numStr = cc.toString();
  masked='';
  for(i=0; i<numStr.length; i++){
    if(i<numStr.length-4){
      masked+='#';
    }else{
      masked+=(numStr[i]);
    }
  }
return masked;
}