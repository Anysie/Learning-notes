# HTML

**H**yper**T**ext **M**arkup **L**anguage——超文本标记语言

> 超文本：暂且理解为“超级的文本”，和普通文本相比，内容更丰富。

> 标记：文本要变成超文本，就需要用到各种标记。

> 语言：每一个标记的写法、读音、使用规则，构成标记语言。

## 一、HTML 初体验

1. 第一步:鼠标右键=>新建=>文本文档=>输入以下内容,并保存。

2. 第二步:修改后缀为.html[^1],然后双击打开即可。

	[^1]: 这里的后缀名,使用.htm也可以,但推荐使用更标准的.html。

3. 程序员写的叫 源代码,要交给浏览器进行渲染。

4. 借助浏览器看网页的源代码,具体操作:

在网页空白处:鼠标右键 == >查看网页源代码

## 二、HTML标签

==<marquee>==<u>昨日之深渊，今日之浅谈</u>==</marquee>==
   起始标签                                                  结束标签
   <标签名>               <u>标签体</u>                       </标签名>

- 双标签

![](C:/Users/LENOVO/Pictures/Screenshots/屏幕截图 2026-01-29 143517.png)

- 单标签
	![image-20260129145230110](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260129145230110.png)

	e.g <input>

- 标签可以嵌套，使用**Tab键**进行缩进。

``` html
<marquee>
	昨日之深渊，今日之浅谈
	<input>
</marquee>
```

## 三、HTML标签属性

<marquee ==loop="1"==> //属性：意思——循环一次
	 昨日之深渊，今日之浅谈
	 <input>
</marquee>

![image-20260129150835664](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260129150835664.png)

- **属性名前都有空格**

- 不同标签能写的属性也不尽相同
- 有些属性只有属性值
- 属性发生冲突时，在前的优先，后面的失效

## 四、HTML基本结构

![image-20260129152755410](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260129152755410.png)

在网页中，如何查看某段结构的具体代码？——鼠标右击+“检查”

【检查】和【查看网页源代码】区别

> 【检查】：经过浏览器“处理”后的源代码

> 【查看网页源代码】：程序员编写的源代码

基本结构：

``` 
<html>
	<head></head>
	<body>
		<marquee>尚硅谷</marquee>
</html>
```

- 想要呈现在页面中的内容：写在==body==标签中
- ==head==标签中的内容不会出现在网页上

## 五、HTML注释

> 注：备注

> 释：解释

```
代码
<!--   -->
```

快捷键：Ctrl加/

注释不能嵌套

## 六、HTML文档声明

文档声明在**代码****第一行**

作用：告诉浏览器你是按什么标准写的代码，即告诉浏览器当前网页的版本

代码：<!DOCTYPE  html> 对应H5的标准   

> DOC：document文档

> TYPE：type类型

## 七、HTML字符编码

计算机对数据的操作：

- 存储时对数据进行**编码**
- 读取时对数据进行**解码**

编码解码会遵循一定规范——**字符集**（了解）：

![image-20260221145844453](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260221145844453.png)



**原则:**

- 存储时务必采用合适的字符编码，**否则，无法存储，数据丢失**
- 存储时采用哪种方式编码，读取时就必须采用相同方式编码，**否则，数据能呈现，但数据错乱（乱码）**

代码：<meta charset="UTF-8">   **写在<head></head>中**
向浏览器声明告诉它用UTF-8解码

> charset：字符集

**总结：**

- 写代码时，统一采用**UTF-8**编码（最稳妥）
- 为了让浏览器在渲染hmtl文件时不犯错，可以通过**meta**标签配合**charset**属性指定字符编码

```html
<head>
	<meta charset="UTF-8">
</head>
```

## 八、HTML设置语言

代码：**<html lang="zh-CN”>**

```
<html lang="zh">   (中文)
<html lang="zh-CN">(简体中文)
<html lang="zh-TW">(繁体中文)
<html lang="en">   (英文)
<html lang="en-US">(英语-美国)
<html lang="en-GB">(英语-英国)
<html lang="th">   (泰文)
```

告诉浏览器我们的代码是什么语言

## 九、HTML标准结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <title>
            我是一个标题
        </title>
    </head>
    <body>

    </body>
</html>
```

快速生成标准结构：一个英文！加enter

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

<meta name="viewport" content="width=device-width, initial-scale=1.0">
多的看不懂的，先不管
**删除的快捷键：**Ctrl加Shift加K快速删除光标所在行

## 十、开发者运用的网址

标签的依据：
**w3c官网**
**[w3school](https://www.w3school.com.cn/tags/index.asp)**
**[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements)**

查找的快捷键：Ctrl加f

## 十一、HTML排版的标签

```html
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <!-- 这里的标题是控制网页页签的，放在<head>里 -->
        <title>HTML排版标签</title>
    </head>
    <body>
        <!-- 标题标签 -->
         <!-- <body>里的标题是出现在页面的，共六个等级 -->
         <!-- <h1>最重要，最好只写一个 -->
         <!-- 标题标签不允许嵌套 -->
        <h1>一级标题</h1>
        <h2>二级标题</h2>
        <h3>三级标题</h3>
        <h4>四级标题</h4>
        <h5>五级标题</h5>
        <h6>六级标题</h6>

        <!-- 段落标签 -->
         <!-- <p>标签里边不能再出现h1~h6、div以及它自己 -->
        <p>我是一个段落</p>
        <p>我是一个段落</p>
        <p>我是一个段落</p>
        <p>我是一个段落</p>
        <p>我是一个段落</p>

        <!-- <div>没有特殊用法，只是把段落包起来便于管理 -->
        <div>
            <p>我是一个段落</p>
            <p>我是一个段落</p>
            <p>我是一个段落</p>
            <p>我是一个段落</p>
            <p>我是一个段落</p>
        </div>

    </body>
</html>

```

![](C:/Users/LENOVO/Pictures/Screenshots/屏幕截图 2026-02-23 163653.png)

## 十二、语义化标签

- 语义：含义

	> e.g h1~h6 的语义 标题
	>       p          的语义 段落
	>       div 没有语义    

- 语义化：标签默认的效果不重要，语义最重要！！

	> e.g 对于 h1 标签，效果是文字很大（不重要），语义是网页主要内容

## 十三、块级元素与行内元素

- 块级元素的特点：独占一行(排版标签都是块级元素)
- 行内元素的特点：不独占一行

**规则**

1. 块级元素中能写其他元素
2. 行内元素中能写行内元素，不能写块级元素

**特殊**

1. h1~h6不能嵌套
2. p标签中不能写块元素

## 十四、文本标签

- **常用文本标签**

![image-20260226150317791](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226150317791.png)

- **不常用文本标签**

![image-20260226150514710](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226150514710.png)

![image-20260226152849454](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226152849454.png)



![image-20260226153715617](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226153715617.png)

##  十五、图片标签

```html
<img width="" height="" src="" alt="">
```

img：行内元素

src=“图片路径”
alt=“图片的描述”

width="宽"
height="高"

> 单位是像素

## 十六、相对路径与绝对路径

- **相对路径**：相对于当前位置

![image-20260226161759401](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226161759401.png)

- **绝对路径**:

	- 本地绝对路径

	- 网络绝对路径

![image-20260226161920431](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226161920431.png)

## 十七、常见的图片格式

![image-20260226162052271](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226162052271.png)

![image-20260226163010164](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226163010164.png)

![image-20260226163621263](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226163621263.png)

图片转BASE64编码的网站：搜索base64后找菜鸟工具

## 十八、超链接

a标签具有href属性是超链接，具有name属性是锚点

- **跳转页面**

```html
<a href="" target="" download>   </a>
```

> href="链接"

> target=“_blank”   在新的页签中打开
> target=“\_self”       在当前页签打开（默认，可不写）**

> download             触发下载（可以写成download=“ 文件名字 ”）

![image-20260226172505785](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260226172505785.png)

- **跳转文件**

	注意1:若浏览器无法打开文件,则会引导用户下载。
	注意2:若想强制触发下载,请使用download属性,属性值即为下载文件的名称。

- **跳转锚点**

	方法一：

	```html
	<a href="#锚点名">  </a>
	
	<a name="锚点名">中间不写</a>
	底下接要跳转到的地方
	```

	方法二：（推荐）

	直接在需要跳转的标签上加一个属性<u>**id**</u>

	```html
	<a href="#锚点名">奥特曼</a>
	
	<p id="锚点名">我是一只奥特曼</p>
	```

	**补充：**

	回到顶部/刷新页面/弹窗：

	```html
	<a href="#">回到顶部</a>    <!-- 即可回到顶部 -->
	
	<a href="">刷新页面</a>     <!-- 即可刷新页面 -->
	
	<a href="javascript:冒号和分号中间任意写js的脚本;">点我弹窗</a>    <!-- 弹窗 -->
	```

	跳转到其他页面：

	```html
	<a href="./文件#锚点名">跳转到其他页面</a>
	```

- **唤起指定应用**

	```html
	<a href="tele:10010">电话联系</a>
	<a href="mailto:123456@qq.com">邮件联系</a>
	<a href="sms:12345">短信联系</a>
	```



## 十九、列表

- **有序列表**  **O**rdered **L**ist

	列表项：**L**ist **I**tems

	```html
	<h2>要把大象放冰箱共几步？</h2>
	        <ol>
	            <li>把冰箱门打开</li>
	            <li>把大象放进去</li>
	            <li>把冰箱门关上</li>
	        </ol>
	```

	

- **无序列表**  **U**nordered **L**ist

	```html
	<h2>我想去的几个城市</h2>
	        <ul>
	            <li>成都</li>
	            <li>上海</li>
	            <li>西安</li>
	        </ul>
	```

	

- **（自）定义列表**  **D**efinition **L**ist

	```html
	<h2>如何更好的学习</h2>
	        <dl>
	            <dt>做好笔记</dt>   
	            <dd>笔记是以后复习的重点</dd>   
	            <dt>多加练习</dt>
	            <dd>自己敲出来的代码才是自己的</dd>
	            <dt>别怕出错</dt>
	            <dd>错很正常，改正并记住就是经验</dd>
	        </dl>
	```

	> t：title 标题,术语名称

	> d：description 描述

**注意事项**

1. **ol**和**ul**标签下的子集最好都用li包裹

	```html
	<ol>
	            <li>把冰箱门打开</li>
	            <li>把大象放进去</li>
	            <li>把冰箱门关上</li>
	    		<li>
	                <a href="www.">超链接</a>
	    		</li>
	</ol>
	```

2. **li**不要单独使用

3. 列表可以嵌套

	```html
	<h2>我想去的几个城市</h2>
	        <ul>
	            <li>成都</li>
	            <li>
	                <span>上海</span>
	                <ul>
	                    <li>外滩</li>
	                    <li>东方明珠</li>
	                    <li>迪士尼</li>
	                    <li>杜莎夫人蜡像馆</li>
	                </ul>
	            </li>
	            <li>西安</li>
	```

4. 自定义列表的术语名称下可以有多个描述

## 二十、表格

**表格的组成：**
![image-20260227161404214](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260227161404214.png)

**标签**：

- 表格：<table>
- 标题：<caption>
- 头部：<thead>
- 主体：<tbody>
- 脚注：<tfoot>

---

**1. 表格头部**<thead>

标签：

- 行：<tr>   table row(行)
- 单元格：<th> h指head

![image-20260227162543581](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260227162543581.png)

**2.表格主体**<tbody>

标签：

- 行：<tr>
- 单元格：<td>  d指data数据

![image-20260227163122669](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260227163122669.png)

**3.表格脚注**

标签：

- 行：<tr>
- 单元格：<td>

---

加边框：在<table>标签上加**border**属性



## 二十一、**表格的常用属性：**

![image-20260228120328707](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228120328707.png)

![image-20260228120401711](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228120401711.png)

![image-20260228120420268](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228120420268.png)

## 二十二、补充几个标签

- 换行：单标签

	```html
	<br>
	```

- 分割线：单标签

	```html
	<hr>
	```

- 按原文显示：简单来说就是敲了多少个空格就出现几个空格

	```html
	<pre>   </pre>
	```

	

## 二十三、表单的基本结构

**标签：**

- 表单：form
- 输入框：input
- 按钮：button

![image-20260228141355343](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228141355343.png)

```html
<form action="https://www.baidu.com/s"> 
        <!-- name中写的东西是固定的-->
        <input type="text" name="wd">  
        <button>去百度搜索</button>
</form>
<hr>
<form action="https://search.jd.com/search" target="_blank">
        <input type="text" name="keyword">
        <button>去京东搜索</button>
</form>
```

## 二十四、表单的常用控件

![image-20260228142838361](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228142838361.png)

![image-20260228142900758](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228142900758.png)

![image-20260228145630564](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228145630564.png)

**注意：**普通输入框可以不写value，**但是，单选框和复写框必须写**

![image-20260228150420493](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228150420493.png)

![image-20260228151431956](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228151431956.png)

按钮上都不要加name属性，包括input

![image-20260228151802434](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228151802434.png)

![image-20260228153414882](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228153414882.png)

![image-20260228153540503](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228153540503.png)

![image-20260228153941724](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228153941724.png)

![image-20260228155453108](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228155453108.png)

```html
<!-- 做关联第一种方法 -->
        <label for="zhanghu">账户：</label>  <!-- for和id是关联的-->
        <input id="zhanghu" type="text" name="account" value="默认值" maxlength="20">
        <br>
<!-- 做关联第二种方法 -->
        <label>
            密码：
            <input type="password" name="pwd随便写" value="" maxlength="6">
        </label>
```

## 二十五、表单 fieldset与legend

![image-20260228160418717](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228160418717.png)

```html
    <form action="https:search.jd.com/search">
        <fieldset>
            <legend>主要信息</legend>
            <label for="zhanghu">账户：</label> 
            <input id="zhanghu" type="text" name="account" value="默认值" maxlength="20">
            <br>
            <label>
                密码：
                <input type="password" name="pwd随便写" value="" maxlength="6">
            </label>
            <br>
            性别：
            <input id="nan" type="radio" name="gender"value="male">
            <label for="nan">男</label>
            <label >
                <input type="radio" name="gender"value="female">女
            </label>
        </fieldset>
        
        <br>
        <fieldset>
            <legend>次要信息</legend>
            爱好：
            <input type="checkbox" name="hobby" value="basketball">篮球  
            <input type="checkbox" name="hobby" value="music">音乐
            <input type="checkbox" name="hobby" value="read">看书
            <br>
            <input type="hidden" name="tag" value="123">
            <br>
            专业：
            <select name="major">
                <option value="computer">计算机</option>  
                <option value="accounting">会计</option>
                <option value="e-commerce">电商</option>
            </select>
            <br>
            简介：
            <textarea name="profile" cols="25" rows="5"></textarea>
        </fieldset>
        <br>
    
        <input type="submit" value="确认">
        <button type="reset">重置</button>
        <button type="button">检测</button>
    </form>
```

样式：

![image-20260228160556302](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228160556302.png)

## 二十六、表单总结

![image-20260228160734494](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228160734494.png)

![image-20260228160840689](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260228160840689.png)

## 二十七、框架标签

标签：iframe——块元素

```html
<iframe src="https://www.toutiao.com" width="10000" height="1000" frameborder="0">
    
</iframe>
```

- **在页面上嵌入一个网页/其他内容**

> src=“网址”

> frameborder=‘’ ‘’  引号中只能填1/0，表示有边框/无边框

- **配合超链接的target属性**

```html
<a href="https://www.toutiao.com" target="tt">点我看新闻</a>
<iframe name="tt" width="900" height="300" frameborder="0"></iframe>
```

- **配合表单的target属性**

```html
<form action="https://www.toutiao.com/search" target="tt">
   	<input type="text" name="keyword">
   	<button>搜索</button>
   	<!-- 搜索按钮还可以这么写：<input type="submit" value="搜索"> -->
 </form>
<iframe name="tt" width="900" height="300" frameborder="0"></iframe>
```



## 二十八、HTML字符实体

在浏览器中，不管敲了多少个空格符，浏览器都默认只会生成一个空格。

- **空格：**

```html
&nbsp;  //代表一个空格
&#160;  //代表一个空格
```

- **大于号小于号**

```html
&lt;  //小于(less than)
&gt;  //大于(greater than)
```

- **&**

```html
&amp;
```

举例应用场景：当我们想将&nbsp；呈现在页面时：

```html
<div>
    &amp;nbsp; 代表一个空格符
</div>
```

- ￥

```html
&yen;
```

- © （版权所有）

```html
&copy;
```

- 书面乘号

```html
&times;
```

- 书面除号

```html
&divide;
```

[字符实体](https://developer.mozilla.org/zh-CN/docs/Glossary/Entity)

## 二十九、HTML全局属性

![image-20260315210725832](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260315210725832.png)

[全局属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Global_attributes)

## 三十、meta元信息

> 元信息：基本信息

- **针对字符编码**

```html
<meta charset="UTF-8">
```

- **针对IE浏览器的兼容性的设置**

```html
<meta http-equiv="X-UA_Compatible" content="IE=edge">
//Compatible:兼容性
```

- **针对移动端的设置**

```html
<meta name="viewport" content="width=device-width,initialscale=1.0">
```

- **配置网页关键字**

```html
<meta name="keywords" content="网上购物,电商购物,皮鞋">
```

搜索中出现这些关键词时会出现这个网站
content=“ ” 里的**逗号要用英文**

- **配置网页描述信息**

```html
<meta name="description" content="哈哈购物网成立于2003年,致力于...">
```

- **针对搜索引擎爬虫配置**

```html
<meta name="robots" content="index">
```

content=“可选值”

![image-20260316194552207](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260316194552207.png)

- **配置网页作者**

```html
<meta name="author" content="疏">
```

- **配置网页生成工具**

```html
<meta name="generator" content="Visual Studio Code">
```

- **配置定义网页版权信息**

```html
<meta name="copyright" content="2026~2027©版权所有">
```

- **配置网页自动刷新**

```html
<meta http-equiv="refresh" content="10;url=http://www.baidu.com">
//十秒之后自动跳到百度，不写url原地刷新
```

[meta元信息](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Reference/Elements/meta)