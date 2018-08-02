
var css1 = `/* 
 * 面试官你好，我是XXX
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
  background: rgb(222,222,222);
}
#code-wrapper{
  width: 49%; 
  left: 0;
  position: fixed;
  height: 100%;
}

/* 我需要一点代码高亮 */

.token.selector{ color: #06fac2;}
.token.property{ color: blue;}
.token.function{ color: blue;}

/* 编辑器太丑了,调整一下编辑器 */
#code{
  width: 100%;
  border: 8px solid #444;
  padding: 16px;
  overflow: auto;
  background: white;
  font-size:16px;
}
 

/* 现在正式开始 */
/* 我需要一张白纸 */

#paper > .content {
 display: block;
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

我叫 xxx
目前就读于安徽建筑大学,2019毕业 
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 HTML JavaScript CSS  

# 项目介绍

- [轮播](https://fatfanfan.github.io/apple/index.html)

- [简历](https://fatfanfan.github.io/resume/index.html)

- [导航](https://fatfanfan.github.io/KBD/1.html)

# 联系方式

- QQ  1737574999
- Email 1737574999@qq.com
- 手机 xxxxxxx

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
function writeMarkdown(markdown, fn){
	let domPaper = document.querySelector('#paper>.content')
	let n = 0
	let id = setInterval(() => {
		n += 1
		domPaper.innerHTML = markdown.substring(0, n)
		domPaper.scrollTop = domPaper.scrollHeight
		if (n >= markdown.length) {
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

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

