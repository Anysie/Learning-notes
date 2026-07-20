# web APIs基本认知

## 1. 关于变量的声明
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

## 2.作用与分类

- 作用：使用JS去操作 html 和 浏览器
- 分类：DOM(文档对象模型) 和 BOM(浏览器对象模型)

## 3. DOM

- Document Object Model —— 文档对象模型：用于呈现以及与任意 HTML 或 XML 文档交互的API
- 简单来说，DOM就是浏览器提供的专门 操作网页内容 的功能
- 作用：网页特效 和 用户交互
- DOM树——将 HTML文档以树状结构直观表现出来
- DOM对象