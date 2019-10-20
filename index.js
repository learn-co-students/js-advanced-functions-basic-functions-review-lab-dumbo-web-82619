function saturdayFun(action = "roller-skate"){
    return `This Saturday, I want to ${action}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = '*'){
    return function(adjective = 'special'){
        return `You are ${flair}${adjective}${flair}!`
    }
}

let Calculator = {
    add: function(x, y){
        return x + y
    },
    subtract: function(x, y){
        return x - y
    },
    multiply: function(x, y){
        return x * y
    },
    divide: function(x, y){
        return x / y
    }
}

function actionApplyer(integer, functionArray){
    if (functionArray.length == 0){return integer}
    for(let i = 0; i < functionArray.length; i++){
        integer = functionArray[i](integer)
    }
    return integer
}