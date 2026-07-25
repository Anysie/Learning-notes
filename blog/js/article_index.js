const articleData = [
  { title:'html_notes' , essay: '../笔记/html_notes.html' , 
    para: `
    HyperText Markup Language——超文本标记语言<br>
    1.超文本：暂且理解为“超级的文本”，和普通文本相比，内容更丰富。<br>
    2.标记：文本要变成超文本，就需要用到各种标记。<br>
    3.语言：每一个标记的写法、读音、使用规则，构成标记语言。`},

  { title:'html5_notes' , essay: '../笔记/html5_notes.html' , 
    para: `
    HTML5 是超文本标记语言第五个重大版本，2014 年正式发布，是一套标记语言规范，不是编程语言。<br>
    注意：HTML ≠ HTML5；HTML5 泛指：HTML5 标记 + CSS3 + JavaScript 整套前端技术栈。`},

  { title:'css_notes' , essay: '../笔记/css_notes.html' , 
    para: `
    CSS：层叠样式表（Cascading Style Sheets)<br>
    HTML搭建结构，CSS搭建样式`},

  { title:'css3_notes' , essay: '../笔记/css3_notes.html' , 
    para: `
    CSS3 是 CSS 规范的第三个大版本，并不是全新语言，是在 CSS2.1 基础上进行扩展、拆分模块的升级版，是现代网页美化的核心技术。<br>
    小常识：CSS3 采用模块化设计，不再一次性发布完整标准，各个模块独立更新（选择器、边框、动画、布局等分开规范）。`},

  { title:'JavaScript基础_notes' , essay: '../笔记/JavaScript基础_notes.html' , 
    para: `
    JavaScript是一门编程语言，可实现一些页面交互效果<br>
    JavaScript分为<br>
    1. ECMAScript<br>
    2. Web APIs——DOM(页面文档对象模型) 和 BOM(浏览器对象模型)`},

  { title:'web APIs_notes' , essay: '../笔记/web APIs_notes.html' , 
    para: `
    作用：使用JS去操作 html 和 浏览器<br>
    分类：DOM(文档对象模型) 和 BOM(浏览器对象模型)`}
]

// 获取对象
const stitle = document.querySelectorAll('.article .essay h4')//数组标题
const para = document.querySelectorAll('.article .essay p')//段落
const a = document.querySelectorAll('.article a')//段落
//放入数据
for(let i = 0 ; i < 4 ; i++){
  stitle[i].innerHTML = articleData[i].title
  para[i].innerHTML = articleData[i].para
  a[i].href = articleData[i].essay
}
