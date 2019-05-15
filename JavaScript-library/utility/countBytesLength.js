// 计算字符串的长度
function countBytesLength(str){
    var length = 0
    for(var i = 0; i< str.length ; i++){
        // 中文日文特殊字符占两个字节
        if(str[i].charCodeAt() >255){
            length +=2;
        }else{
            length++;
        }
    }
    return length;
}

