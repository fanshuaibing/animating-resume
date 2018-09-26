
var css1 = `/* 
 * 面试官你好，我是范帅兵
 *安徽建筑大学大四学生，应聘前端实习生
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
 
/* 先加上过渡效果*/
*{
  transition: all 1s;
}

/*换一个背景颜色吧*/
html{
  background:  #D5E6FB;
}


/* 我需要一点代码高亮 */

.token.selector{ color: #FF5A8C ;}
.token.property{ color: #5C02DC ;}


/* 编辑器太丑了,调整一下编辑器 */
#code-wrapper{ 
  position: absolute;
  height: 97%;
  width: 49%; 
  left: 0;
  border: 8px solid #444;
  display:flex;
  color: black;
  margin: 16px ;
}
#code{
  width: 100%;
  overflow: auto;
  background: white;
  padding: 16px;
}
 

/* 现在正式开始 */
/* 我需要一张白纸 */

#paper{  
  position: absolute;
  background: white ;
  height: 97%;
  width: 49%; 
  right: 0;
  border: 8px solid #444;
  display: flex;
  color: black;
  margin: 16px ;
}
#paper > .content {
 display:block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`

var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

var md = `
# 自我介绍

我叫范帅兵
目前就读于安徽建筑大学,2019毕业 
自学前端半年
希望应聘前端开发实习岗位

# 技能介绍

## HTML5 & CSS3

标签语义化：能根据 HTML5 标准编写具有语义化的文档结构。
CSS居中与布局：能快速对元素进行居中处理，使用float、flex、grid等方案进行页面布局。
CSS动画：能使用keyframes、transition、transform等实现常见动画效果。
了解Bootstrap的基本使用规则。 

## JavaScript

理解异步、this、作用域链、闭包、原型链、面向对象等。
了解 ES6 的部分常用语法,能在项目中普遍使用let、块级作用域、箭头函数、Promise 等语法。

## jQuery
熟悉 jQuery 的常用 API，能使用 jQuery 技术栈进行网站开发。

## HTTP与浏览器

了解 HTTP 基础知识，了解常见状态码含义，能够根据请求查看响应。

理解浏览器运行机制，理解页面加载的整个过程。


# 项目介绍

- [在线简历](https://fatfanfan.github.io/resume/index.html)

- [导航](https://fatfanfan.github.io/keyboard/index.html)

- [简易画板](https://fatfanfan.github.io/canvas/1.html)




# 联系方式

- Email fatfan1020@gmail.com

- 手机 17756979714

# 博客地址

- [简书](https://www.jianshu.com/u/21ccc68041d0)

- [Github](https://github.com/fatfanfan)



`
let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

//主要代码
writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})




/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn){
	let domCode = document.querySelector('#code')
	let n = 0
	let id = setInterval(() => {
		n += 1
		domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
		styleTag.innerHTML = prefix +  code.substring(0, n)
		domCode.scrollTop = domCode.scrollHeight
		if (n >= code.length) {
			window.clearInterval(id)
			fn && fn.call()
		}
	}, 50)
}

function createPaper(fn){
	var paper = document.createElement('div')
	paper.id = 'paper'
	var content = document.createElement('pre')
	content.className = 'content'
	paper.appendChild(content)
	document.body.appendChild(paper)
	fn && fn.call()
}
function writeMarkdown(markdown, fn){
	let domPaper = document.querySelector('#paper>.content')//获取pre标签
	let n = 0
	let id = setInterval(() => {
		n += 1
		domPaper.innerHTML = markdown.substring(0, n)//给pre标签添加内容
		domPaper.scrollTop = domPaper.scrollHeight
		if (n >= markdown.length) {
			window.clearInterval(id)
			fn && fn.call()
		}
	}, 50)
}
function convertMarkdownToHtml(fn){
	var div = document.createElement('div')    //创建标签
	div.className = 'html markdown-body'
	div.innerHTML = marked(md)                 //html格式的paper
	let markdownContainer = document.querySelector('#paper > .content')   // 获取pre标签
	markdownContainer.replaceWith(div)       //替换pre标签
	fn && fn.call()
}





