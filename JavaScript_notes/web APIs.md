# web APIs

## 一、web APIs基本认知

### 1. 关于变量的声明

在开发过程中，**`const`优先，尽量用`const`**

**提问：以下let能不能换成const**

```js
// 1.
let uname = '刘德华'
let song = '忘情水'
document.write(uname + song)

//2.
let num1 = +prompt('请输入第一个数值：')
let num2 = +prompt('请输入第二个数值：')
alert(`两者相加结果是：${num1 + num2}`)
```

```js
// 3.
let num = 1
num = num + 1

// 4.
for(let i = 0 ; i < nums.length ; i++){}
```

```js
// 5.
let arr = ['red', 'green']
arr.push('blue')

// 6.
let person = {
    uname: 'Anysie',
    age: 18
}
person.gender = '女'
```

```js
// 7.
const names = []
names = [1, 2, 3]

const obj = {}
obj = {
    uname: 'Anysie'
}

//8.
const names = []
names[0] = 1
names[1] = 2

const obj = {}
obj.uname = 'Anysie'
```

1和**2可以**，3和4不可以（值有变化），**5和6可以**

**分析：**对于复杂类型数据（数组、对象），数据是存放在**堆**里，地址存放在**栈**里，数据改变是找到地址然后再找到堆，在堆里存放增删数据，地址不变，所以可以改用`const`

**第7个是错误的**——地址改变，第8个正确

### 2.作用与分类

- 作用：使用JS去操作 html 和 浏览器
- 分类：DOM(文档对象模型) 和 BOM(浏览器对象模型)

### 3. DOM

- Document Object Model —— 文档对象模型：用于呈现以及与任意 HTML 或 XML 文档交互的API
- 简单来说，DOM就是浏览器提供的专门 操作网页内容 的功能
- 作用：网页特效 和 用户交互
- DOM树——将 HTML文档以树状结构直观表现出来
- DOM对象



## 二、DOM对象

### 1. 获取对象

#### 1.1根据CSS选择器来获取DOM元素

- 选择匹配的**第一个**元素

	- ==语法：==

		```js
		document.querySelector('css选择器')
		```

	- 选择器重名时只会选择第一个选择器

	- 返回值：返回css选择器匹配的**第一个元素**，返回值类型是对象。没有匹配到返回`null`

	- **修改**——可以直接修改

		```js
		const nav = document.querySelector('#nav')
		nav.style.color = 'red'
		```

		

- 选择匹配的**多个**元素

	- ==语法：==

		```js
		document.querySelectorAll('css选择器')
		```

	- 获取得到的是一个**伪数组**（哪怕只有一个元素）

		- 有长度又索引号 
		- 但是没有`pop()` `push()`的方法

	- 返回值：对象集合

	- **修改**——获取到的是一个数组，所以不能直接修改，需要遍历

		```js
		// 获取元素
		const lis = document.querySelectorAll('.nav li')
		//console.log()
		for(let i = 0 ; i < lis.length ; i++){
		    console.log(lis[i])
		}
		// 修改
		for(let i = 0 ; i < lis.length ; i++){
		    lis[i].style.color = 'red'
		}
		```

#### 1.2其他获取方法（了解）

```js
// 根据id获取一个元素
document.getElementById('nav')
//根据标签获取一类元素 获取页面所有div
document.getElementsByTagName('div')
//根据类名获取元素 获取页面所有.w
document.getElementsByClassName('w')
```



### 2.操作元素内容

#### 2.1 `对象.innerText` 属性

```js
<div class="box">我是文字内容</div>
<script>
	// 1.获取元素
	const box = document.querySelector('.box')
	// 2.修改
	console.log(box.innerText)//这可以获取.box内容：我是文字内容
	box.innerText = '我是一个盒子'
</script>
```

- 将文本内容添加/更新到任意标签位置
- **不会解析标签**（意思是你在里面写标签没用）

#### 2.2`元素.innerHTML`属性

```js
box.innerHTML = '<strong>小盒子</strong>'//内容修改“小盒子”，且字体加粗
```

- **会解析标签**



### 3. 操作元素属性

#### 3.1 操作元素常用属性

==语法：==

```
对象.属性 = 值
```

#### 3.2 操作元素样式属性

1. 通过`style`属性修改

	```
	对象.style.属性 = '值'
	```

	**提醒**：对于css属性名中含-的属性名，采用小驼峰命名法

	

2. 操作类名操作css

	```
	元素.className = 'css类名'
	```

	- 新值盖旧值，即样式会覆盖原先的样式

	例如：

	```html
	<style>
	    .nav{}
	    .box {
			width: 300px;
	        height: 300px;
	        background-color: skyblue;
	        margin: 100px auto;
	        padding: 10px;
	        border: 1px solid #000;
		}
	</style>
	
	<body>
	    <div></div>
	    <script>
	    	// 1. 获取元素
	        const div = document.querySelector('div')
	        // 2. 添加类名
	        div.className = 'box'//这样div就有了.box的样式。会覆盖掉原先的值
	        div.className = 'nav box'//即可同时拥有两个类名的样式
	    </script>
	</body>
	```

	 

3. **通过classList操作css**

	为了防止覆盖原先的样式

	```js
	//追加一个类
	元素.classList.add('类名')
	//删除一个类
	元素.classList.remove('类名')
	//切换一个类 即有就加上，没有就删除
	元素.classList.toggle('类名')
	```

	

### 4. 操作表单元素属性

```
表单.value = '值'
表单.type = '值'
```

例如：

```html
<input type="text" value="电脑">
<script>
	// 1.获取元素
    const uname = document.querySelector('input')
    // 2.获取值
    console.log(uname.value)//可以拿到内容——电脑
    console.log(uname.innerHTML)//不可以拿到表单内容
    // 3.修改
    uname.value = '买电脑'
    uname.type = 'password'
</script>
```

 

- 表单中有些属性添加或没添加均有对应的布尔值，例如：disabled、checked、selected		

	```html
	<input type="checkbox">
	<script>
		// 1.获取元素
	    const ipt = document.querySelector('input')
	    // 2.获取值
	    console.log(ipt.checked)//打印输出为false
	    // 3.修改
	    ipt.checked = true //即可使得复选框勾上,布尔值，不需要加引号
	</script>
	```

	

### 5. 自定义属性

- 在标签上一律以**data-**开头
- 在DOM对象上一律以**dataset**对象方式获取

### 6. 定时器-间歇函数

1. 开启定时器

	```
	setInterval(函数, 间隔时间)// 每隔多长时间调用一次函数，时间单位：ms
	```

	**注意：**括号里写的函数，要么在里面定义，要么先定义好，写在里面时**不加括号只留函数名**，带括号意为调用了

2. 关闭定时器

	```js
	// 1.拿到定时器，用let
	let 变量名 = setInterval(函数, 间隔时间)
	//2.关闭
	clearInterval(变量名)
	```

	