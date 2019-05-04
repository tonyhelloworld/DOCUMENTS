function test(){
    var num = 100;
    var showResult = function(){
        console.log('num:',num)
        // alert(num)
    }
    num++;
    return showResult;
}
var showResult =  test();
showResult();