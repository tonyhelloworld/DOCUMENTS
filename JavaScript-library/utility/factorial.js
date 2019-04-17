// 计算阶乘
function factorial(){
    if(num < 0){
        throw new Error('负数没有阶乘')
    }else if(num ===1 || num ===0){
        return 1;
    }else{
        return num * factorial(num-1)
    }
}
console.log(factorial(3))