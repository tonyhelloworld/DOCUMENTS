Git 学习


## 第一节 配置gitignore


&emsp;在我们使用Git的过程中，有时候喜欢建一些文件给自己查看使用而不是给大众使用，或者说像是 node_modules 这些文件不希望上传到代码仓库的，这时候就需要设置响应的忽略规则，来忽略这些文件的提交。

### 1.1 全局生效
&emsp;定义全局 .gitignore 文件，将其放在任意位置即可生效
```
    git config --global core.excludesfile ~/.gitignore
```

<br>

### 1.2 忽略规则
1. 忽略掉所有文件名是 test.html 的文件
```
test.html
```

2. 忽略掉 node_modules 文件夹
```
node_modules
```

3. 忽略掉所有生成的备份文件
```
*.*~
```

4. 忽略所有 .o 和 .a 文件
```
*.[oa]
```

5. 详细用法看文档：[详情](https://mirrors.edge.kernel.org/pub/software/scm/git/docs/gitignore.html)

<br>

### 1.3 VS Code 隐藏 node_modules
&emsp;值得一提的就是，我们不仅要忽略它的上传，在VS Code 这个编辑器中，如果我们也需要忽略它的话，就需要进行相应的设置，VS Code 隐藏工作区中的 node_modules 文件夹： 主菜单 -> 文件 -> 首选项 -> 用户设置：
```
"file.exclude": {
    "node_modules/": true
}
```

<br>

## 第二节 git 命令

&emsp;这里讲解日常使用的 git 命令操作

<br>

### 2.1 git fetch
&emsp;从一个或多个其他存储库中获取分支和/或标签(统称为“引用”)以及完成其历史所必需的对象。 远程跟踪分支已更新(Git术语叫做commit)，需要将这些更新取回本地，这时就要用到git fetch命令。

<br>

### 2.2 git 取消忽略文件大小写的更改

&emsp;在当前项目，输入 `git config core.ignorecase false` 即可关闭 git 忽略文件大小写的配置。

<br>

### 2.3 git 删除文件夹

* 删除 `target` 文件夹：`git rm -r --cached target`
* 提交更改：`git commit -m "删除 target 目录"`
* 确认更改：`git push`

<br>

### 2.4 git 覆盖上一次 commit 提交信息

&emsp;`git commit -amend -m "New commit"`