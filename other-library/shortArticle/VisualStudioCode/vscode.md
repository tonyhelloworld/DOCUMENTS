# VSCode 常用操作和配置

## 第一节 VSCode配置

&emsp;配置方式： 主菜单 -> 文件 -> 首选项 -> 用户设置：
```
{
    "editor.wordSeparators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?",
    "git.autofetch": true,
    "markdown.styles": [
        "E:\\MyWeb\\jsliang-study\\Document-Library\\public-repertory\\css\\markdown-github.css"
    ],
    "file.exclude": {
        "node_modules/": true
    }
}
```

<br>

### 1.1 下划线选中
&emsp;设置不仅可以下划线选中，而且可以横杠选中，主要应用于同事写 class 名或者 id 名或者写 js 起名的时候，有可能用 - 或者 _ 。
```
{
    "editor.wordSeparators": "./\\()\"':,.;<>~!@#$%^&*|+=[]{}`~?"
}
```

<br>

## 1.2 监听 git fetch
&emsp;git fetch 命令用于从另一个存储库下载对象和引用，在 vs code 中配置 git.fetch 功能，从而启动自动提取。`当然一般不会有问题，但是在环境中使用tar压缩源码时，vs code后台会来 git fetch 导致压缩失败，可以视情况关闭`
```
{
    "git.autofetch": true,
}
```

<br>

## 1.3 配置 Markdown 预览的样式
&emsp;如果是VS Code默认的配置，Markdown 文件是乌漆嘛黑的，这时候可以给它设置个 GitHub 样式，这样子预览看到的就是 GitHub 中的样式，详情可看：[点击跳往](../markdown/markdown.md)
```
{
    "markdown.styles": [
        "E:\\MyWeb\\jsliang-study\\Document-Library\\public-repertory\\css\\markdown-github.css"
    ],
}
```

<br>

## 1.4 忽略 node_modules 文件夹
&emsp;设置这个，vs code 就不会理会 node_modules 文件夹了。详情可看：[点击跳往](../git/git.md)
```
{
    "file.exclude": {
        "node_modules/": true
    }
}
```

<br>

## 1.5 VS Code 设置模板页

1. 安装插件 HTML Snippets
2. 文件-首选项-用户代码片段-HTML
3. 修改文件内容为：

```
{
  // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  // Example:
  // "Print to console": {
  //  "prefix": "log",
  //  "body": [
  //      "console.log('$1');",
  //      "$2"
  //  ],
  //  "description": "Log output to console"
  // }
  "!!": {
  "prefix": "!!",
  "body": [
    "<!DOCTYPE html>",
    "<html lang=\"en\">",
    "<head>",
    "\t<meta charset=\"UTF-8\">",
    "\t<meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no\">",
    "\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
    "\t<title>HelloWorld</title>",
    "</head>",
    "<body>",
    "\t$1",
    "\t",
    "\t<script src=\"https://cdn.bootcss.com/jquery/3.3.1/jquery.js\"></script>",
    "</body>",
    "</html>"
  ],
  "description": "!! - Defines a template for a html5 document"
  }
}
```

4. 在HTML页面输入!!然后回车，即可看到新效果

