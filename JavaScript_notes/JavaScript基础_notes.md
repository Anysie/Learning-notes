# Javascript基础

## 1.1 JavaScript介绍（了解）

> **JavaScript是什么**

JavaScript是一门编程语言，可实现一些页面交互效果

JavaScript分为

1. ECMAScript
2. Web APIs——DOM(页面文档对象模型) 和 BOM(浏览器对象模型)



>  **JavaScript书写位置**

1. 行内JavaScript
	写在标签里

2. 内部JavaScript

	直接写在`HTML`文件里，用`<script>`标签包裹，`<script>`标签写在`</body>`上面

	> 拓展：alert(‘ 你好，JS~ ’)——网页弹出警示框

3. 外部JavaScript
	代码写在以`.js`结尾的文件里
	通过`<script src=" "></script>`引入文件——中间不要再写内容了，不会执行



> **注释和结束符**

- 单行注释
	- //
	- 快捷键：Ctrl+/
- 多行注释
	- /* */
	- Shift+Alt+a
- 结束符
	- ;
	- 分号不一定要写



> **输入输出语法**

- 输出语法

	- 语法1：向`body`输出内容

		```js
		document.write('输出内容')
		document.write('<h1>我是一个一级标题</h1>')
		```

	- 语法2：页面弹出警告对话框

		```js
		alert('输出内容')
		```

	- 语法3：控制台输出语法，程序员调试使用

		```javascript
		console.log('控制台输出')
		```

- 输入语法

	- 语法

		```js
		prompt('请输入信息：')
		```

---

## 1.2 变量

- 声明变量

	```js
	let 变量名
	```

- 变量赋值

	```js
	变量名 = 
	```

- 变量更新

	```js
	let age = 18
	age = 19
	```

- 命名规则与规范

	- 规则
		1. 不能使用关键字
		2. 只能用**下划线、数字、字母、$**组成，数字不能开头
		3. JS**严格区分大小写**

- 数组

	- 声明数组

		```js
		let 数组名 = [数据1,数据2,数据3……]
		```

	- 使用数组——arr[索引号]

## 1.3常量

- 声明常量——常量声明的时候必须赋值

	```js
	const PI = 3.14
	```

- 常量不能再次赋值

## 1.4数据类型

1. 基本数据类型

	- number——数字型

	- string——字符串型（单引号、双引号、反引号）

		- 字符串相接用`+`，`+`数字相加 字符相连

		- **模板字符串**
			外层用反引号``包裹，里面用${变量名}

			```js
			let age = 18
			document.write('我今年' + age + '岁了')//输出：我今年18岁了
			document,write(`我今年${age}岁了`)//输出等同于上
			```

	- boolean——布尔型

	- undefined——未定义型

	- null——空类型

2. 引用数据类型

	- object——对象

- NaN——计算错误

	```js
	console.log('老师' - 2)//返回值为NaN
	console.log(NaN === NaN)//false
	```

- 检测数据类型
	`typeof`关键字

	```js
	let num = 10
	console.log(typeof num)
	//或者加括号
	console.log(typeof (num))
	```

- 类型转换

	- 隐式转换

		- 规则

			1. `+`号两边只要有一个是字符串，都会把另一个转换成字符串

			2. **除**`+`号以外的运算符，都会将数据转换成数字类型

				> 比如`console.log(2 - '2')`  //输出为0
				>
				> ​	   `console,log(typeof + '123')` //输出为**数字类型**number

	- 显示转换

		- **`Number()`**

			```js
			let str = '123' //字符串
			console.log(Number(str)) //转换为数字类型，输出为123
			console.log(Number('pink')) //输出为NaN
			```

			对于数据类型，例如输入、表格、表单中的数据基本都是字符类型，所以可以用到这个进行转换

			```js
			//写法一
			let num = prompt('请输入年薪') //num即便输入为数字，数据类型也是字符串
			console.log(Number(num)) //输出为输入的数值
			
			//写法二
			let num = Number(prompt('请输入年薪'))
			console.log(num)
			
			//写法三——隐式转换
			let num = +prompt('请输入年薪')
			console.log(num)
			```

		- **`parseInt(数据)`**——只保留整数

			```js
			console.log(parseInt('12px')) //转换为数字类型输出为 12
			console.log(parseInt('abc12px')) //输出NaN，只会取开头的数字
			```

		- **`parseFloat(数据)`**——可以保留小数

## 2.1 运算符

- 算术运算符
	加( + )    减( - )    乘( * )     除( / )     取余( % )

- 赋值运算符

	( = )     ( += )     ( -= )     ( *= )     ( /= )      ( %= )

- 一元运算符

	正号( + )     负号( - )     
	自增( ++ )     自减( - - )

	> 前置自增：先自增再使用
	>
	> 后置自增：先使用再自增

- 比较运算符
	大于( > )     小于( < )     大于等于( >=)     小于等于( <= )
	值相等( == )      值和类型相等( === )     不全等( !=\= )

	> console.log(2 == ‘2’)   //true——==含隐式转换
	> console.log(2 =\== ‘2’)  //false——类型不一样
	>
	> console.log(undefined == null)   //true
	> console.log(underfined === null)   //false
	>
	> console.log(NaN === NaN )   //false

	**ASCII值**
	‘a’ ~ ‘z’ —— 97 ~ 122
	‘A’ ~ ‘Z’ —— 65 ~ 90
	‘0’ ~ ‘9’ —— 49 ~ 57

- 逻辑运算符

	&&——逻辑与（并且）
	|| ——逻辑或（或者）
	！ ——逻辑非（取反）

- 运算符优先级

	| 优先级 | 运算符                          |
	| ------ | ------------------------------- |
	| 1      | 小括号                          |
	| 2      | 一元运算符                      |
	| 3      | 算术运算符                      |
	| 4      | 关系运算符 > <  >= <=           |
	| 5      | 相等运算符 == != === !=\=       |
	| 6      | 逻辑运算符    先!  再&&  后\|\| |
	| 7      | 赋值运算符                      |
	| 8      | 逗号运算符                      |

## 2.2 语句

- 分支语句

	- **if语句**

		```js
		//单分支
		if(条件) {
			须执行代码
		}
		
		//双分支
		if(条件) {
			代码
		}else {
			代码
		}
		
		//多分枝
		if(条件){
			代码
		}else if(条件2){
			代码
		}else if(条件3){
			代码
		}else{
			代码
		}
		```

	- 三元运算符

		```js
		条件 ? 满足条件执行代码 : 不满足条件执行代码
		```

	- switch语句

		```js
		switch(数据) {
			case 值1:
				代码1
				break
			case 值2:
				代码2
				break
			
			default:
				代码n
				break
			
		}
		```

- 循环语句

	```js
	while(循环条件){
		循环体
	}
	```


## 3.1 for循环

- 语法：

	```
	for(变量起始值 ; 终止条件 ; 变量变化量) {
		循环体
	}
	```


## 3.2 数组

- 数组的声明

	```js
	//1. 字面量声明数组
	let arr = [1, 2, 'pink', true]
	
	//2. 使用new Array 构造函数声明
	let arr = new Array(1, 2, 3, 4)
	```

- 取值语法：`数组名[下标]`

- ==新增数组==

	```js
	数组.push(新增内容)
	数组.unshift(新增内容)
	```

	- **`数组.push()`**——方法将一个或多个元素添加到数组**末尾**，并返回该数组长度 
	- `数组.unshift()`——添加到数组**开头**，并返回该数组长度 

- 数组筛选

	- 先声明一个新数组
	- 遍历原数组，筛选
	- 放进新数组

- ==删除数组==

	```js
	数组.pop()
	数组.shift()
	数组.splice(操作的下标, 删除的个数)
	```

	- `数组.pop()`——从数组中**删除最后一个元素**，并返回该删除 元素的值（即括号中不需要填值）
	- `数组.shift()`—— 从数组中删除**开头一个元素**，并返回该删除 元素的值（即括号中不需要填值）
	- **`数组.splice(操作的下标, 删除的个数)`**——**删除指定元素**

- 数组排序

	```
	arr.sort()//默认升序
	```


## 4.1 函数

- 如何使用

	```js
	//声明函数
	function 函数名() {
		函数体
	}
	
	//调用函数
	函数名()
	
	// 函数传参
	function 函数名(参数名, 参数名){  //参数不需要声明类型
	    函数体
	} 
	// 调用函数
	函数名(实参, 实参)
	
	// 在函数构造，函数调用时可能出现没有实参的情况，此时参数类型为：undefined
	// 为了解决这种问题，我们常常在构造函数时给形参一个默认值
	function getSum(num1 = 0, num2 = 0){
	    document.write(num1 + num2)
	}
	getSum(1432, 123)
	```

	

- 函数返回值

	`return `

	```js
	function fn() {
	    return 20   //return 20 相当于是执行了fn() = 20
	}
	console.log(fn()) //输出：20
	// 或者：
	let val = fn() //类似于let num = prompt('输入数字')
	console.log(val)
	```

	 

- 断点调试：
	F10——下一步，但是不会进入函数内部
	F11——可以进入函数内部查看执行过程

	

- 匿名函数

	> 即没有名字的函数，无法直接使用

	- 使用方式

		1. 函数表达式

			> 将匿名函数赋值给一个变量并通过变量调用函数

			```js
			let fn = function () {
				console.log('我是函数表达式')
			}
			fn() //输出：我是函数表达式
			```

			- 函数表达式 和 具名函数 的区别——具名函数可以写在任何位置，函数表达式必须先声明

		2. 立即执行函数

			- 写法一：

			```js
			// 写法——两个括号，第一个括号将函数包起来，后面跟再跟一对括号
			(function (){
			    
			})()
			
			// 对于两个匿名函数使用立即执行这个方法时需要加分号执行
			(function (){
			    
			})();
			(function (x, y){
			    console.log(x + y)
			})(2, 1);
			```

			- 写法二：

			```js
			// 将第二个括号放在第一个括号里，即紧跟函数
			(function(){}());
			
			(function(x, y){
			    console.log(x + y)
			}(1, 2));
			```

			- 多个立即调用函数需要用分号`;`

## 4.2 逻辑中断

- 逻辑运算符里的短路

	短路：只存在于 && 和 || 中，当满足一定条件使得右边代码不执行

## 4.3 转换Boolean型

```js
Boolean('pink') //true
Boolean('') //false
Boolean(2) //true
Boolean(0) //false
```

- 对于字符串来讲：只有 空字符 为假
- 对于数字来讲：    只有 数字0 为假
- **隐式转换**
	1. 有字符串的加法：`‘’ + 1` ，结果为‘1’（拼接）
	2. 减法（像大多数数学运算一样）只能用于数字，它会使`空字符`转换为`0`
	3. `null` 经过数字转换变成：`0`
	4. `undefined`经过数字转换之后变成：`NaN`

## 5.1 对象是什么

- 对象(object)：数据类型

- 一种无序的数据组合（数组是有序的）

- 用来描述某个事物（按我的理解——c语言的结构体：`struct`）

	```js
	let obj = {
	    uname: 'pink',
	    age: 18,
	    gender: '女'
	}
	```

## 5.2 对象的使用

- 对象的声明

	```js
	// 方法一：
	let 对象名 = {}
	
	// 方法二：
	let 对象名 = new Object()
	```

- 对象的组成：属性和方法

	> 属性：名词类

	> 方法：动词类——功能动作

	```js
	let 对象名 = {
	    属性名: 属性值,
	    方法名: 函数
	}
	```

- 要用逗号`,` 隔开

- **使用**

	- **查**
		语法一：`对象名.属性名`

		```js
		obj.age
		```

		语法二：`对象名['属性名']`

		```js
		let obj = {
		    'you-name': 'pink',//属性名不能使用中划线，会报错，但是可以加上引号包裹
		    age: 18
		}
		
		//在使用这种引号包裹的变量名时，系统会解析为 you 减去 name
		obj['you-name']
		```

		两种语法使用场景不同，都要记

	- **改**
		语法：`对象名.属性名 = 属性值`

		```js
		obj.gender = '男'
		```

	- **增**
		语法：`对象名.属性名 = 属性值`

		```js
		obj.hobby = 'sing'
		```

	- 删——了解
		语法：`delete 对象名.属性名`

		```js
		delete obj.age
		```

## 5.3 对象的方法

```js
lei obj = {
    uname = '刘德华',
    song: function (){
        console.log('冰雨')
    }
}
obj.song()
```

## 5.4 遍历对象

对象无序且无`.length`长度
**利用`for( in )`语法**

```js
// 利用for( in )遍历数组
let arr = ['pink', 'red', 'blue']
for(let k in arr) {  //声明一个变量k，不要赋值
    console.log(k) //会发现k打印的是数组的下标 0 1 2 ——字符串类型
    console.log(arr[k]) // 遍历数组
}
```

```js
// 利用for( in )遍历对象
let obj = {
    uname: 'pink',
    age: 18,
    gender: '女'
}

for(let k in obj) {
    console.log(k)//拿到的是属性名，字符串 'uname' 'age'
    console.log(obj.k)//打印的是undefined
    //因为这里相对于拿到的是
    //console.log(obj.'uname').所以出错
    cOnsole.log(obj[k])
}
```

- 遍历**数组不用**`for( in )`语句，因为`k`说到底是一个字符串
- 遍历**对象使用**`for( in )`语句，但是在**查**时用的语法为**对象名[‘属性名’]**

## 5.5 内置对象

- JavaScript内部提供的对象，包括各种属性和方法
	例如：`document.write()`

- 内置对象-Math

	1. random——生成`[0,1)`的随机数

		```js
		// 生成[0,10]的整数
		Math.floor(Math.random() * (10 + 1))
		
		// 生成[5,10]的整数
		Math.floor(Math.random() * (5 + 1)) + 5
		```

		```js
		// 生成[N,M]之间的整数
		Math.floor(Math.random() * (M - N + 1)) + N
		```

	2. ceil——向上取整

	3. floor——向下取整

	4. round——四舍五入

	5. max

	6. min

	7. pow——幂运算

	8. abs——绝对值

	9. sqrt——平方根

	……