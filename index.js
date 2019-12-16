// Your code here


const Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b){
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`;
  }

let wrapAdjective = function(a = "*"){
  return function(b = "special"){
    return `You are ${a}${b}${a}!`;
  }
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}
