// 利用indexOf方法去重
Array.prototype.unique = function() {
    // 这里是利用对象键hash值的唯一性来去重
    // 定义一个临时数组
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (result.indexOf(this[i]) == -1)
            result.push(this[i]);
    }
    return result;
}
// 利用ES6中的set方法

function unique(arr){
    if(!Array.isArray(arr)){
        console.log('type error');
        return;
    };
    return [...new Set(arr)]
}


// 利用map结构的key不重复
function unique(arr){
    let map = new Map();
    let array = new Array();// 此处array是用来返回结果的
    for(var i = 0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],true)
        }else{
            map.set(arr[i],false)
            array.push(arr[i])
        }
    }
    return array;
}