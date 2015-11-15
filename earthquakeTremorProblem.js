function strongEnough(earthquake, age) {
  buildingStrength=1000
  for(i=0;i<age;i++){
    buildingStrength-=(buildingStrength/100);
  }
  EQstrength= earthquake.map(function(tremor){return tremor.reduce(function(a,b){return a+b})}).reduce(function(a,b){return a*b});
  console.log(EQstrength);
  if(EQstrength>buildingStrength){
    return 'Needs Reinforcement!'
  }else{
    return 'Safe!'
  }
}