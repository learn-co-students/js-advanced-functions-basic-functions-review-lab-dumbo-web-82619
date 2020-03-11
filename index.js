const saturdayFun = (activity = 'roller-skate') => {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = (task = 'go to the office') => {
  return `This Monday, I will ${task}.`
}

const wrapAdjective = (flair = '*') => {
  return function(arg = 'special') {
    return `You are ${flair}${arg}${flair}!`
  }
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

const actionApplyer = (int, arr) => {
  let result = int
  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result)
  }
  return result
}