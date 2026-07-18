#  CSS

CSS：层叠样式表（Cascading Style Sheets)

HTML搭建结构，CSS搭建样式

## 一、CSS的编写位置

### 1.行内样式

- 写在标签的**style属性**里

```html
<h1 style="color: red;font-size: 60px;">欢迎来到尚硅谷学习</h1>
```

注意：
**style**的值不能乱写，
CSS语法规范：==名:值 ;==   
HTML语法规范：==名=“值”==

### 2.内部样式

- 使用**style标签**
	将所有CSS代码提取出来，单独放在**style标签**里，style标签一般放在`<head>`标签里

```html
    <style>
        h1{
            color: green;
            font-size: 40px;
        }
        h2{
            color: red;
            font-size: 60px;
        }
        p{
            color: aqua;
            font-size: 100px;
        }
        img{
            width: 500px;
        }
    </style>
```

### 3.外部样式

- 写在单独的**.css**文件中，在HTML文件里利用==`link`标签==连接文件使用

1. 新建一个**.css**文件，把所有CSS代码放在该文件里

```css
h1{
    color: green;
    font-size: 40px;
}
h2{
    color: red;
    font-size: 60px;
}
p{
    color: aqua;
    font-size: 100px;
}
img{
     width: 500px;
}
```

2. 在HTML文件中引入.css文件

```html
<link rel="stylesheet" href="./文件名.css">  
//rel——relation
```

==注意==：`link`标签要写在`<head>`标签里

> **`href`**:引入的文档来自哪里
>
> **`rel`**: relation——关系，说明引入的文档与当前文档之间的关系

## 二、样式表的优先级

- **行内样式**优先级最高
- **内部样式**和**外部样式**优先级相等，同时出现时“**后来者居上**“（后面的覆盖前面的）

- 同一个样式表也遵循“后来者居上”

##  三、CSS语法规范

![image-20260317193045153](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260317193045153.png)

> 选择器：找要添加样式的元素

> 声明块：一个一个声明组成，声明样式

> `属性名:属性值;`

**CSS中注释的语法**：`/* xxxx & */`

## 四、代码风格

![image-20260317194209595](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260317194209595.png)



## 五、CSS基本选择器

CSS基本选择器：

1. 通配选择器
2. 元素选择器
3. 类选择器
4. id选择器

### 1.通配选择器

- 作用：可以选中HTML文件中所有元素。
- ==语法==：

```css
*{
	属性名：属性值;
}
```

### 2.元素选择器

- 作用：为页面中某种元素统一设置
- ==语法==：

````
标签名 {
	属性名: 属性值:
}
````

### 3.类选择器

- 作用：根据元素`class`的值来选中某些元素

	> class: 类名

- ==语法：==

```
.类名{
	属性名: 属性值:
}
```

- **注意**

1. class=“类名”写在要添加样式的元素标签里
2. 一个标签中**不能出现多个class**
3. 但是class中的**类名可以有多个，多个类名之间用空格隔开**
4. class的值即类名**不能**使用纯数字，**不要**使用中文，使用数字可以和英文相配着使用

### 4.id选择器

- 作用：
- ==语法==

```
# id名{
	属性名: 属性值:
}
```

- **注意**

1. id=“id名”写在要添加样式的元素标签里
2. 多个元素的id名不能相同，**id是唯一的**
3. 一个标签中**不能出现多个id**，**可以同时出现id和class**
4. id的值尽可能由**字母、数字、下划线、短杠**组成，**不要**包含空格，区分大小写

## 六、CSS复合选择器

### 1.交集选择器

- ==作用==：选中同时符合多个条件的元素
- 语法：选择器1选择器2……
- 举例：

```css
/*  选中p元素且beauty类名的元素 */
p.beauty{
	color: blue:
}
/* 选中类名中含rich和beauty的元素 */
.beauty.rich{
	color: green:
}
```

- **注意：**

1. 有标签名，标签名**必须**在前面
2. id选择器由于id具有唯一性，实际应用中几乎不用交集
3. 交集选择器**不可能**同时出现两个**元素选择器**，因为一个元素不可能既是某个标签又是另一个标签
4. 最常用的交集：元素选择器配合类选择器

### 2.并集选择器

- 选中多个选择器对应的元素（当某些元素有某些样式重复时使用），分组选择器
- ==语法==：选择器1,选择器2,选择器3…选择器n{}

```css
.rich,
.beauty,
.dog,
.pig,
#suxi {
		font-size: 40px;
        background-color: gray;
        width: 180px;
 	}
```

- **注意**

1. 并集选择器一般竖着写
2. 任何形式的选择器都可以成为并集选择器的一部分，且无先后

### 元素之间的关系

1. **父元素**：**直接**包裹某个元素的元素
2. **子元素**：被父元素直接包裹某个元素的元素
3. **祖先元素**：父亲的父亲……（父元素也算祖先元素的一种）
4. **后代元素**：儿子的儿子……
5. **兄弟元素**：拥有相同父元素的

例如：
`<li>`的父元素是`<ul>`，`<ul>`和`<h1>`的父元素是`<div>`
`<li>`的祖先元素是 `<div>` 

```html
<div>
    <h1>欢迎来到尚硅谷</h1>
    <ul>
        <li>前端</li>
        <li>Java</li>
        <li>大数据</li>
        <li>UI</li>
    </ul>
</div>
```

### 3.后代选择器

- 作用：选中指定元素中符合要求的后代
- ==语法==：选择器1 选择器2 选择器3 …… 选择器n（先写祖先，再写后代）

```css
/* 选中ul中所有li */   
ul li{
        color: red;
    }
/* 选中ul中所有li中所有a*/
ul li a{
        color: cornflowerblue;
    }
/* 选中类名为subject中li元素中类名为front-end元素 */
.subject li .front-end{
        color: darkgrey;
    }
```

- **注意：**

1. 后代选择器最终选择的是后代，不是祖先
2. 儿子、孙子、重孙……都算后代
3. 结构要符合HTML的嵌套要求，**例如**，`<p>`中不能写`<h1>~<h6>`

### 4.子代选择器

- 作用：选中指定元素的**儿子**
- ==语法==：选择器1>选择器2>选择器3>……>选择器n

```css
        div>a {
            color: red;
        }
        div>p>a {
            color: skyblue;
        }
        .foot>a {
            color: chocolate;
        }
```

### 5.兄弟选择器

1. 相邻兄弟选择器：

- 作用：选中指定元素紧紧相邻的兄弟元素
- ==语法==：选择器1+选择器2+…..+选择器n

```css
/* 
        div紧紧相邻的兄弟元素p标签,div+p
        **紧紧相邻只往下看，
        **一定是紧紧相邻，不能跳行 
        */
        
div+p {
    color: skyblue;
}

```



2. 相邻兄弟选择器：

- 作用：选中指定元素下所有的兄弟元素
- ==语法==：选择器1\~选择器2\~…..~选择器n

```css
       /*
        div所有兄弟
        只往下看 
        */
       
div~p {
 color: chartreuse;
}
```

- **注意：**

所有兄弟选择器选中的都是下方的兄弟

### 6.属性选择器

- 作用：选中属性值符合要求的元素
- ==语法==：
	1. [属性名]——选中**具有某属性**的元素
	2. [属性名 = “值”]——选中具有某属性且**指定属性值**的元素
	3. [属性名 ^= “值”]——选中具有某属性且**以某开头**的元素
	4. [属性名 $= “值”]——选中具有某属性且**以某结尾**的元素
	5. [属性名 *= “值”]——选中具有某属性且**包含某**的元素

```css
/* 第一种写法：选中具有title属性的元素 */
[title] {
    color: red;
}
/* 第二种：选中具有title属性且指定属性值的元素 */
[title=“atguigu1”] {
    color: red;
}
/* 第三种：选中具有title属性且指定属性值以a开头的元素 */
[title^=“a”] {
    color: red;
}
/* 第四种：选中具有title属性且指定属性值以u结尾的元素 */
[title$=“u”] {
    color: red;
}
/* 第五种：选中具有title属性且属性值中含有u的元素 */
[title*=“u”] {
    color: red;
}
```

### 7.伪类选择器

- 什么是伪类？——很像类，但又不是类，是指元素特殊状态的一种描述

#### 一、动态伪类

1. `:link`——**未被访问**的状态（用于超链接）
2. `:visited`——**访问过**的状态（用于超链接）
3. `:hover`——鼠标**悬停**在元素上的状态
4. `:active`——元素**激活**状态（按住鼠标不放）

>  注意：以上要遵循**LVHA**的顺序，也就是link、visited、hover、active。

5. `:focus`——获取焦点的元素
	只能用于输入类元素，如input、select、表单等

```css
/* 选中未访问过的a */
a:link {
    color: orange;
}
/* 选中访问过的a */
a:visited {
    color: gray;
}
/* 选中鼠标悬浮状态下的a */
a:hover {
    color: skyblue;
}
/* 选中激活状态下的a */
a:active {
    color: greenyellow;
}

span:hover {
    color: aqua;
}
span:active {
    color: violet;
}

/* 获取焦点，也就是在那个框输入，哪个框处于以下样式 */
/* 获取焦点，用于需要输入的标签 */
input:focus {
    color: blueviolet;
    background-color: cadetblue;
}
```

#### 二、结构伪类

1. `:first-child`——**所有兄弟元素**中第一个
2. `:last-child`——**所有兄弟元素**中最后一个
3. `:nth-child(n)`——**所有兄弟元素**中第n个
4. `:first-of-type`——所有**同类型元素**中第一个
5. `:last-of-type`——所有**同类型元素**中最后一个
6. `:nth-of-type(n)`——所有**同类型元素**中第n个

关于n的值：

1. 形式必须为：a**n**+b
2. 2n或even——选中偶数
3. 2n-1或odd——选中奇数
4. -n+3——选中前三

![image-20260323194047129](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260323194047129.png)

#### 三、否定伪类

==语法==：not(选择器)——排除满足括号里条件的

~~~css
/* 选中的是div的儿子p元素，但排除类名为fail的元素 */
div>p:not(.fail) {
	color: red;
}
~~~

#### 四、UI伪类

```css
<head>
    <style>
        /* 点击之后变大，取消勾选后不会变回去 */
        /* input:focus {
            width: 100px;
            height: 100px;
        } */
        /* 点击之后变大，取消勾选后会变回去 */
        input:checked {
            width: 100px;
            height: 100px;
        }
        /* 选中不可用的 */
        input:disabled {
            background-color: gray;
        }
        /* 选中可用的 */
        input:enabled {
            background-color: green;
        }
    </style>
</head>
<body>
    <input type="checkbox">
    <input type="radio">
    <input type="text">
    <input type="text" disabled>
</body>
```

#### 五、目标伪类

`:target`——选中锚点所指向的元素

#### 六、语言伪类

`:lang()`——选中指定语言的元素

### 8.伪元素选择器

- 伪元素？——像元素，选中的是元素中的一些特殊位置
- 常用：
	- `::first-letter`  ：选中元素中**第一个**字
	- `::first-line`  ：选中元素中**第一行**字
	- `::selection`  ：选中**被鼠标选中**的内容
	- `::placeholder`  ：选中输入框的**提示文字**
	- `::before`  ：在**元素最开始**的位置，创建一个子元素（用`content`指定内容）
	- `::after`  ：在**元素最后**的位置，创建一个子元素（用`content`指定内容）

```css
/* 选中div中第一个字 */
div::first-letter {
    color: red ;
    font-size: 50px;
}
/* 选中div中第一行字 */
div::first-line {
    background-color: yellow;
}
/* 选中div中被鼠标选择的字 */
div::selection {
    background-color: green;
    color: orange;
}
/* 选中input中的提示文字 */
input::placeholder {
    color: skyblue;
}
/* 选中p标签内容前的 */
p::before{
    content: "￥";
}
```

## 七、选择器优先级

- 相同选择器：“**后来者居上**”

- 不同选择器：**ID选择器 > 类选择器 > 元素选择器 > 通配选择器**

- 复合选择器：看权重

	格式——(a,b,c)——当前一位已经比出胜负时，后面的位数就不用比了

	> a:ID选择器的个数

	> b:类、伪类、属性选择器的个数

	> c:元素、伪元素选择器的个数

	并集选择器的权重是分开的
	e.g `div>p>span`的权重是（0，0，3）；
	    `div,p,span`的权重是（0，0，1）相当于写了三个元素选择器
	
	![image-20260325202114143](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260325202114143.png)



- 在**属性值后面**加上==`!important`==，优先级最高，不是改变了选择器的权重

	```css
	.slogan {
		color:purple !important;
	}
	```



## 八、CSS三大特性

### 1. 层叠性

- 概念：样式冲突时，会根据一定规则（选择器优先级），进行样式层叠（覆盖）

### 2. 继承性

- 概念：元素会自动拥有其父元素、或其祖先元素上所设置的某些样式

- 规则：优先继承离得近的

- 常见的可继承元素

	```
	text-??    ; font-??   ; line-??   ; color......
	```


### 3.优先级

- 简单来讲：`!important` > 行内样式 > ID选择器 > 类选择器 > 元素选择器 > 通配选择器 > 继承的样式
- 详细聊：看权重 [权重如何计算](# 七、选择器优先级)

## 九、CSS像素_颜色

- 像素——单位：px

- 颜色——

	- 表达方式一：颜色名（颜色有限）
		e.g red；green；blue；purple……

	- 表示方式二：==**rgb或rgba**==

		> r——red

		> g——green

		> b——blue

		> a——控制透明度,越靠近1颜色越不透明

		红绿蓝：光的三原色
		**`rgb(0~255,0~255,0~255)`**或**`rgb(%,%,%)`**
		**`rgba(0~255,0~255,0~255,0~1)`**或**`rgba(%,%,%,%)`**

	- 表示方式三：HEX或HEXA——十六进制

		形式：==**#？？？？？？？？**==

		两位两位来，范围——00，01，02……09，0a，0b，0c……0f，10，11，……19，1a……1f，20…………（十六进制）
		最大值：ff

		> 前两位H：red

		> 中间两位E：green

		> 后两位X：blue

		> 再在后面补两位A：透明度

		两两重复时，可以简写。e.g #ffccdd==>#fcd，前三位如果简写了，要补充透明度时也只能写一位

	- 表示方式四：==hsl或hsla==

		形式：**hsl( 0\~360deg，0\~100%，0~100%）**或**hsla(0\~360deg，0\~100%，0\~100%，0\~1)**

		> H：hue——色相（deg：度数，可省）

		> S：saturation——饱和度，饱和度越高越黑，0%:灰色

		> L：lightness——亮度/明度，也可以写成百分数的形式

		> A：

![image-20260326205323550](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260326205323550.png)

## 十、CSS字体属性

### 1. 字体大小

- ==属性名：` font-size:`==

	```css
	<style>
		.script{
	    	font-size:20px ;
		}
	</style>
	```

### 2.字体族

- 作用：设置字体

- ==语法：` font-family`==

	```css
	<style>
		.script{
	    	font-size:20px ;
	    	font-family:"微软雅黑" ;
		}
	</style>
	```

font-family:"微软雅黑"——引号中的字体必须是电脑中已安装的，最好写英文“Microsoft YaHei”

- 注意：

  - `font-family:"翩翩体-简”,"华文彩云”,“楷体”,“微软雅黑”;`
  	呈现的样式一个一个找，如果有第一个字体就呈现第一个字体，没有就找下一个直到有。
  - `font-family:"翩翩体-简”,"华文彩云”,“楷体”,“微软雅黑”，sans-serif;`
  	可以这么写，最后最好以sans-serif或serif结尾，如果前面的字体都没有，浏览器会自己选择一个sans-serif或serif的字体

- 分类：
	- 衬线字体serif——有笔峰
	- 非衬线字体sans-serif——无笔峰（用的多）

### 3.字体风格

- 作用：倾斜
- ==语法：==`f==ont-size:normal ;`——正常==
	          `font-size:italic ;`——斜体——浏览器会去寻找字体原本设计的斜体，没找到就强制斜体==
	           ~~`font-size:oblique ;`——斜体——强制斜体~~

### 4.字体粗细

- ==语法：==
	`font-weight:lighter ;`
	`font-weight:normal ;`
	`font-weight:bolder ;`
	`font-weight:数字 ;`

### 5.字体复合属性

- ==语法：==
	`font:  字体大小  "字体族" ;`
	font属性**必须是字体大小和字体族结尾**，都得写上且顺序不能变，需要改其他属性往前加3

## 十一、CSS文本属性

### 1.文本颜色

[对应上文](# 九、CSS像素_颜色)

### 2.文本间距

- ==语法：==
	`letter-spacing: 数字px ;`——字符间距
	`word-spacing: 数字px ;`——单词间距（有空格算一个单词）
- 数字可以为负数——减小间距

### 3.文本修饰

- ==语法：==
	`text-decoration:overline ;`——上划线
	`text-decoration:underline ;`——下划线
	`text-decoration:line-through ;`——删除线
	`text-decoration:none ;`——没有线
	还可以控制线的样式
	`text-decoration:underline wavy red;`——wavy波浪线（还可以写成dotted虚线）==

### 4. 文本缩进

- ==语法==
	`text-indent:数字px;` 

### 5.文本对齐

- 水平对齐

  - ==语法==：`text-align: ;`

  - 常用值：

    1. left——左对齐
    2. right——右对齐
    3. center——居中对齐

    

- vertical-align：；

	- 作用：用于指定**同一行元素**之间，或表格单元格内文字的垂直对齐方式

		```css
		<head>
		    <style>
		        div {
		            font-size: 100px;
		            height: 300px;
		            background-color: skyblue;
		        }
		
		        span {
		            font-size: 40px;
		            background-color: orange;
		            vertical-align: bottom;
		        }
		    </style>
		</head>
		<body>
		    <div>
		        atguigu尚硅谷x<span>x前端</span>
		    </div>
		```

		

	- ==语法==：`vertical-align: ;`

	- 常用值：

		1. top——顶部
		2. middle——使元素的中部与父元素的基线加上父元素x-height（字母x的高度）的一半对齐
		3. baseline——基线（默认值）
		4. bottom——底部

	- 
		1. 不能控制块级元素，只能控制行内元素
		2. 可以控制单元表格中的元素

### 6.行高

- ==语法：==`line-height:值;`

- 注意：line-height最好不要和font-size相等

- 值的写法：
	- 像素——数字px
	- normal——默认值
	- 数字——font-size的多少倍（常用，最佳再1.5~2之间）
	- 百分比——font-size乘以百分比

- 对比`height: ;`
	设置了height，高度为height的值
	没有设置height，高度为line-height乘以行数

- 应用场景：
	1. 对于多行文字：控制行与行之间的距离使得界面更加美观
	2. 对于单行文字：使其垂直居中——让`height`值等于`line-height`值

## 十二、CSS列表相关属性

- **调整列表符号**——`list-style-type: ;`
	（像我们前面这个黑点，就是无序列表的默认符号样式）
	- 常用值：
		1. none
		2. square
		3. lower-roman
		4. upper-roman
		5. dicimal
		6. ……

- **调整符号位置**——`list-style-position: ;`
	- 常用值：
		1. inside
		2. outside

- **自定义列表符号**——`list-style-image: url(" 文件名 ");`

- **前三个复合**——`list-style: 可以写前面的属性 用空格隔开 无顺序要求 ;`

## 十三、CSS表格相关属性

### 1. 边框相关属性

- **边框宽的**——`border-width: ;`
- **边框颜色**——`border-color: ;`
- **边框样式**——`border-style: ;`
	- none：默认
	- solid：实线
	- dashed：虚线
	- dotted：点线
	- double：双实线
- **复合前三种**——`border: ;`

> 以上边框属性其他元素也可以使用

### 2.表格独有属性

- **控制列宽**——`table-layout: ;`

	- auto：默认，字多列宽
	- fixed：固定的，相同宽

- **控制单元格之间距离**——`border-spacing: 数字px;`

	> HTML：cellspacing=“数字”

- **合并相邻单元格之间的边框**——`border-collapse: ;`

	- separate——默认分离
	- collapse——合并

	> 合并之后单元格之间的距离失效，不管`border-spacing: ;`是否在后

- **隐藏没有内容的单元格**——`empty-cells: hide;`

- **设置表格标题位置**——`caption-side: ;`
	- top
	- bottom

## 十四、CSS背景相关属性

- **背景颜色**——`background-color: ;`

- **背景图片**——`background-image: url(文件地址);`

- **背景重复方式**——`background-repeat: ;`

	- repeat(默认)
	- no-repeat
	- repeat-x
	- repeat-y

- **背景图片位置**——`background-position: 水平 垂直;`（某位置不写默认中间）

	- 第一种写法：left right top bottom center

		``` css
		/** 左上 **/
		background-position:left top;
		
		/** 右中 **/
		background-position:right center;
		```

- **复合**——`background: ;`

## 十五、CSS鼠标相关属性

- ==语法==：`cursor: ;`
	- **pointer**——小手
	- move——移动
	- text——文字选择器
	- crosshair——十字架
	- wait——等待
	- help——帮助
	- **自定义**——cursor: url( “文件地址 “),pointer ;

## 十六、CSS盒子模型

### 01_CSS常用长度单位

- **px**：像素
- **em**：相对于元素font-size的倍数
	（没有font-size时，找父元素、父元素的父元素，都没有，按本身大小）
- **rem**：相对于根元素的font-size大小
	（html——根元素）
- **%**：相对于父元素的font-size大小

### 02_CSS元素的显示模式

- **块元素（block）：**又称块级元素

	- 特点：
		- **独占一行**，不会与任何元素共用一行，是从上往下排列
		- 默认宽度：撑满父元素
		- 默认高度：由内容撑开
		- **可以**通过CSS设置宽高
	- e.g `<div>`

- **行内元素（inline）：**又称内联元素

	- 特点：
		- **不独占一行**，从左至右排列
		- 默认宽度：由内容撑开
		- 默认高度：由内容撑开
		- **无法**通过CSS设置宽高
	- e.g `<span>`

- **行内块元素（inline-block）：**又称内联块元素

	- 特点：

		- **不独占一行**，从左至右排列
		- 默认宽度：由内容撑开
		- 默认高度：由内容撑开  
		- **可以**通过CSS设置宽高

	- e.g 图片——`<img src=" 位置 " alt=" 名字 ">`

		

### 03_总结各元素的显示模式

- 块元素（block）
	1. 主体结构标签：`<html>`、`<body>`
	2. 排版标签：`<h1>`、`<h6>`、`<hr>`、`<p>`、`<div>`
	3. 列表标签：`<ul>`、`<ol>`、`<li>`、`<dl>`、`<dt>`、`<dd>`
	4. 表格相关标签：`<table>`、`<tbody>`、`<thead>`、`<tfoot>`、`<tr>`、`<caption>`
	5. 、`<form>`和`<option>`
- 行内元素（inline）
	1. 文本元素：`<br>`、`<em>`、`<strong>`、`<sup>`、`<del>`、`<ins>`
	2. 、`<a>`和`<label>`
- 行内块元素（inline-block）
	1. 图片：`<img>`
	2. 单元格：`<td>`、`<th>`
	3. 表单控件：`<input>`、`<textarea>`、`<select>`、`<button>`
	4. 框架标签：`<iframe>`

### 04_修改各元素的显示模式

==语法：==`display: ;`

属性值：

- block——块级元素
- inline——行内元素
- inline-block——行内块元素
- none——不显示，元素不显示

### 05_盒子模型组成部分

![image-20260604214814697](C:/Users/LENOVO/AppData/Roaming/Typora/typora-user-images/image-20260604214814697.png)

```css
div {
    /* 内容区的宽 */
    width: 500px;
    /* 内容区的高 */
    height: 500px;
    /* 内边距 设置的背景颜色会填充内边距区域 */
    padding: 20px;
    /* 边框 设置的背景颜色会填充border区域 */
    border: 10px dashed lightgray;
    /* 外边距 */
    margin: 10px;

    font-size: 20px;
    background-color: lightpink;
}
```

### 06_盒子的内容区（content）

`min-width: ;`

`max-width: ;`

`min-height: ;`

`max-height: ;`

### 07_关于默认宽度

默认宽度即不设置width的宽度

总宽度：父元素的content-自身的margin

内容区的宽度：父元素的content-自身的左右margin-自身的左右border-自身的左右padding

### 08_盒子的内边距（padding）

- `padding-left: ;`

- `padding-right: ;`

- `padding-top: ;`

- `padding-bottom: ;`

- `padding: ;`

	```css
	/* 四个方向10px */
	padding: 10px;
	
	/*上下为10px 左右为20px */
	padding: 10px 20px;
	
	/*上为10px 左右为20px 下为30px */
	padding: 10px 20px 30px;
	
	/*顺时针：上10px 右20px 下30px 左40px */
	padding: 10px 20px 30px 40px;
	```

**关于行内元素：**左右内边距可以设置。上下内边距可以设置但不占位，即会把上下元素覆盖

### 09_盒子的边框（border）

- ==语法：==
	- `border: 像素 样式 颜色;`
		- `border-left: ;`
		- `border-right: ;`
		- `border-top: ;`
		- `border-botton: ;`
	- `border-width: 10px;`
		- `border-left-width: 10px;`
		- `border-right-width: 10px;`
		- `border-top-width: 10px;`
		- `border-botton-width: 10px;`
	- `border-color: skyblue;`
		- `border-left-color: ;`
		- `border-right-color: ;`
		- `border-top-color: ;`
		- `border-bottom-color: ;`
	- `border-style: solid;`
		- `border-left-style: solid;`
		- `border-right-style: solid;`
		- `border-top-style: solid;`
		- `border-bottom-style: solid;`

### 10_盒子的外边距（margin）

- ==语法==
	- `margin-left: ;`
	- ``margin-right: ;`
	- `margin-top: ;`
	- ``margin-botton: ;`
	- 复合属性同`padding: ;`

- **注意事项：**

	- 行内元素上下外边距设置不出效果

	- 对于块级元素

		- `margin-left: auto;`——离左边能有多远有多远
		- `margin-right: auto;`——离右边能有多远有多远
		- 水平居中 

		```css
		margin-left: auto;
		margin-right: auto;
		```

		- **垂直居中不可以**

	- margin可以设置负数

### 11_margin塌陷问题

- 什么是margin塌陷问题
	第一个子元素的**==上==margin**会作用在父元素上，最后一个子元素的**==下==margin**会作用在父元素上
	- 如何解决
		- 方案一：给父元素设置不为0的padding
		- 方案二：给父元素设置不为0的border
		- **方案三：**给父元素设置CSS样式**``overflow: hidden;`**

### 12_margin合并问题

- 什么是margin合并问题
	上面兄弟元素的**下外边距**和下面兄弟元素的**上外边距**会合并——取一个最大值而不是相加

	```css
	div1 {
	    margin-bottom: 50px;
	}
	div2 {
	    margin-top: 50px;
	}
	/* div1 和 div2 之间的距离是50px，不是100px
	```

	```css
	div1 {
	    margin-bottom: 50px;
	}
	div2 {
	    margin-top: 60px;
	}
	/* div1 和 div2 之间的距离是60px，不是110px
	```

- 解决方案：
	只给一个兄弟元素设置就可以了
	（左右外边距无这种bug）

### 13_处理内容的溢出

- ==语法：==
	- `overflow: ;`
	- `overflow-x: ;`
	- `overflow-y: ;`
- 属性值：
	- hidden——将溢出的内容直接截断隐藏
	- visible——默认效果
	- scoll——添加滚动条
	- auto——自动添加滚动条，超出就显示滚动条，不超出就不显示

- 关于x和y：不建议使用，两个设置属性不同时，不出效果

### 14_隐藏元素的方式

- 方式一：`display: none;`——占位
- 方式二：`visibility: hidden;`——不占位

### 15_样式的继承

有些样式会继承
元素如果本身设置了某个样式，就使用本身设置的样式
元素如果本身没有设置的样式，会从父元素开始一级一级继承（优先继承离得近的祖先元素）

- 会继承的CSS属性：
	字体属性、文本属性（除了vertical-align）、文字颜色 等
- 不会继承的CSS属性：
	边框、背景、内边距、宽高、溢出方式 等
- **规律：能继承的属性都是不影响布局的，即和盒子模型没关系的**

### 16_元素的默认样式

元素一般都有一些默认样式

> e.g 
>
> 1. `<a>`：下划线、字体颜色、鼠标小手
> 2. `<h1>~<h6>`：文字加粗、文字大小、上下外边框
> 3. `<p>`：上下外边框
> 4. `<ul>` `<ol>`：左内边距
> 5. `<body>`：8px外边距
>
> …………

优先级：元素默认样式 > 继承样式

### 17_布局小技巧

1. 行内元素和行内块元素，都可以被父元素当作文本处理
	例如：可以像处理文本对齐一样处理行内和行内块元素中的对齐

	- `text-align: center;`
	- `line-height: px;`
	- `text-indent: px;`

2. 如何让子元素在父元素中**水平对齐**

	- 子元素为**块元素**，给父元素加：`margin: 0 auto;`
	- 子元素为**行内、行内块元素**，给父元素加：`text-align: center;`

3. 如何让子元素在父亲中 **垂直居中：**

	- 子元素为**块元素**，给子元素加：`margin-top: px;`    （值自己算）

		> 注意margin塌陷问题：给父元素加overflow：hidden；

	- 子元素为**行内、行内块元素**：
		让父元素的`height: ;` = `line-height: ;` 每个子元素都加上：`vertical-align: middle;`

		> 补充：绝对垂直居中还需将父元素的`font-size: ;`设置为0

### 18_元素之间的空白问题

行内元素、行内块元素 彼此之间换行会被浏览器解析为一个空白字符

- 解决方案
	1. 方案一：去掉换行，写代码的时候就写在一行
	2. 方案二：给父元素设置 `font-size: 0;` ，再单独给子元素的文本设置字体大小

### 19_行内块的幽灵空白问题

行内块元素与文本的基线对齐，而文本的基线与文本最低端是有一定距离的

- 解决方案
	1. 方案一：给行内块设置`vertical`,值可为*middel*、*bottom*、*top*，但不能是*baseline*
	2. 方案二：前提——父元素中只有一张图片；设置图片为：`display:block;`
	3. 方案三：给父元素设置`font-size: 0;`。文本单独设置字体大小

## 十七、浮动、

### 01_浮动简介

最初，浮动是用来实现文字环绕图片的效果的；现在浮动是主流的页面布局方式之一

- ==语法：==`float: ;`

### 02_元素浮动后的特点

1. 脱离文档流

	> 文档流：浏览器默认从上到下、从左到右排列网页元素的默认布局规则，是页面最基础的排版方式

2. 不管浮动前是什么元素，浮动后：默认宽高都有内容撑开，可以设置宽高

3. 不会独占一行，可以与其他元素共用一行

4. 不会出现margin合并和margin塌陷问题，能够完美设置四个方向的margin和padding

5. 不会像行内块一样当作文本处理（没有行内块空白问题）

### 03_浮动后的影响

- 对兄弟元素：后面的兄弟元素会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟元素无影响
- 对父元素：不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动元素

### 04_解决浮动后的影响

> - 方案一：给父元素指定高度 消除父元素塌陷问题（但是没有解决对兄弟的影响）
> -  方案二：给父元素也设置浮动（但是没有解决兄弟元素的问题）
> - 方案三：在父元素上加`overflow: hidden;` （但是溢出的文本会被隐藏）
>
> 以上都能解决父元素塌陷问题，但都没有解决兄弟元素的问题

- 方案四：在受影响的、没有设置浮动效果的兄弟元素上加`clear: both;` 清除前面所有浮动元素产生的影响

	- 如何设置clear

		- 方法一：在最后一个元素上设置`clear: both;` 或者另外加一个空的`div`，给空的`div`加`clear: both;`

		- 方法二：

			```css
			.outer::after{
			    content:'';  /* 给outer最后加给内容，内容为引号里的，此处为空 */
			    display: block;
			    clear: both;
			}
			```

在布局中的一个原则：设置浮动时，兄弟元素要么全浮动，要么全不浮动

## 十八、定位

### 01_相对定位

- ==语法：==`position: relative ;`
	写完以后接着说明位置：`属性名：属性值；`

	- 属性名可选值：left、right、top、bottom

		```css
		position:relative;
		left:100px
		/* 相对于该元素原本的位置距离左边100px */
		```

- 特点：
	- 左和右不能同时使用，同时使用左生效；上和下则上奏效
	- 开启了定位的元素的层级高，即开启了的压在没开启的元素上，同时开启则按先后
	- **不脱离文档流**

- **参考位置**——相对于自己原来的位置

- **应用场景：**
	1. 微调元素位置
	2. 与绝对定位配合使用

### 02_绝对定位

- ==语法：==`position: absolute;`
- 会**脱离文档流**，对比浮动，浮动的文字会环绕，但是绝对定位不i会

- 参考位置——参考包含块
	- 何为包含快——
		1. 没有脱离文档流的元素，父元素就是包含快
		2. 脱离文档流的元素，第一个开启定位的祖先元素就是他的包含快，一层一层往上找，没有就参考根元素html

- 绝对定位和浮动同时出现，听绝对的
- 加上绝对定位和相对定位的元素变为**定位元素**
	绝对定位元素——宽高默认被内容撑开，宽高可重新设置（行内元素加上则可以设置宽高）

### 03_固定定位

- ===语法：==`position: fixed;`
- 参考位置——参考视口（随屏幕而动）
- 特点：**脱离文档流**

### 04_粘性定位

- ==语法：==

	```css
	position: sticky
	再设置上下左右等
	
	例如
	position: sticky;
	top: 10px
	/* 距离10px处粘住不动 */
	```

- **参考点——**离他最近的一个拥有**滚动机制**的祖先元素

- 特点：**不脱离文档流**

### 05_定位层级

- 定位了的元素层级比不定位的元素层级高

- 同为定位元素。层级按先后顺序排

- `z-index: ;`——调层级的，值越大层级越高——只对定位元素起作用

	> 默认值为auto，值为0.

	> 当发现`z-index`值大的元素依然没有覆盖掉`z-index`值小的元素时，检查其包含块的层级

### 06_定位的特殊应用

> 注意:
>
> 1. 发生固定定位和绝对定位后,元素变成定位元素,默认宽高由内容撑开,且可以设置宽高
> 2. 以下所说特殊应用只针对绝对定位和固定定位的元素,不包含相对低位

- **让定位元素充满包含块**

	1. 宽度充满——给定位元素同时设置`left`和`right`，两者均为零
	2. 高度充满——给定位元素同时设置`top`和`bottom`，两者均为零

	> 使用前提是该定位元素没有设置宽高

- **块元素中块元素的居中设置**

	```css
	position:
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	```

	> 该定位元素必须设置宽高!!

## 十九、布局

### 1.版心

- 在PC端网页中，一般会有一个宽度固定且水平居中的盒子用来呈现网页主要内容——版心
- 版心宽度一般：960~1200px
- 版心可以是一个也可以是多个

### 2.常用布局名词类名

| 位置               |                        |
| :----------------- | ---------------------- |
| 顶部导航条         | topbar                 |
| 页头               | header、page-header    |
| 导航               | nav、navigator、navbar |
| 搜索框             | search、search-box     |
| 横幅、广告、宣传图 | banner                 |
| 主要内容           | content、main          |
| 侧边栏             | aside、sidebar         |
| 页脚               | footer、page-footer    |

### 3.重置默认样式

- ~~方案一：使用全局选择器~~

	```css
	* {
		margin: 0;
		padding: 0;
		……
	}
	```

	> 此种方法**不应用**于实际开发

- **方案二：reset.css**

	引用外部css文件——reset.css——选择到具体某个元素清除它的样式——**偏爱用**

	> 经过reset后的网页好似“一张白纸”，什么样式都没有

- **方案三：Normalize.css**

	Normalize.css是一种**最新方案**，在清除默认样式的基础上保留一些有价值的默认样式

	– 官网地址：[https://github.com/necolas/normalize.css](https://github.com/necolas/normalize.css)

