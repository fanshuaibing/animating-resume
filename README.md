## 会动的简历

- [预览链接](https://fatfanfan.github.io/animating-resume/index.html)
- [源码链接](https://github.com/fatfanfan/animating-resume)
- 关键词: 原生JavaScript CSS3   marked.js github-markdown-css
- 通过用JS写入CSS到 style 标签内部与 pre 标签, pre标签会显示内容的形式,即写成什么就会怎么显示。
```
domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
		styleTag.innerHTML = prefix +  code.substring(0, n)
```
- 引入Prsim.js/css 高亮代码, 碰到写入paper的问题，即是在paper页面没有写出来时，
paper内容已经写出来了。此时碰到了异步问题，那么用回调callback来解决。

- 引入marked.js 将markdown转为HTML格式，以及引入 github-markdown-css html加样式。
