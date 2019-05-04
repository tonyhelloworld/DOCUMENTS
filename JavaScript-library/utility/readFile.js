读取本地文件
function readInputFile(id){
    var file = document.getElementById(id).files[0];
    var reader = new FileReader();
    reader.readAsText(file)
    reader.onload = function(){
        console.log(data,this.result)
    }
}

