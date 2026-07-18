# HTML5

## 一、HTML5简介

## 二、新增语义化标签

### 01_新增布局标签

| 标签名    | 语义                                                       | 单/双标签 |
| :-------- | :--------------------------------------------------------- | :-------- |
| `header`  | 整个页面或部分区域的头部                                   | 双        |
| `footer`  | 整个页面或部分区域的底部                                   | 双        |
| `nav`     | 导航                                                       | 双        |
| `article` | 文章、帖子、杂志、新闻、博客、评论等                       | 双        |
| `section` | 页面中的某段文字或文章中的某段文字（里面文字通常包含标题） | 双        |
| `aside`   | 侧边栏                                                     | 双        |
| `main`    | 文档的主要内容（不用）                                     | 双        |
| `hgroup`  | 包裹连续的标题，如文章标题，副标题组合                     | 双        |

### 02_新增状态标签

- `<meter max="" min="" value="" low="" high="" optimum=""></meter>`

	- 类似于手机电量
		```html
		<span>手机电量：</span>
		<meter max="100" min="0" value="20" low="10" high="20" optimum="90"></meter>
		<!-- 最大值为100，最小值为0，当前值为90，低于10时显示红色，10~20为黄色，由于optimum值落在20~100区间，所以20~100时显示绿色 -->
		<!-- 没有optimum时，min~low显示黄色，low~high为绿色，high~max为黄色 -->
		```

		![image-20260709102626082](../../AppData/Roaming/Typora/typora-user-images/image-20260709102626082.png)

	- optimum规定最优值

		

- `<progress max="" value=""></progess>"`

	- 类似于进度条
	- max规定目标值，value规定当前值
		![image-20260709103753954](../../AppData/Roaming/Typora/typora-user-images/image-20260709103753954.png)

### 03_新增列表标签

- `<datalist></datalist>`

	- 用于搜索框关键字提示

	- ```html
		<form action="#">
		    <input type="text" list="mydata">
		    <button>搜索</button>
		</form>
		<datalist id="mydata">
		    <option value="周杰伦">周杰伦</option>
		    <option value="周冬雨">周冬雨</option>
		    <option value="马冬梅">马冬梅</option>
		    <option value="温兆伦">温兆伦</option>
		</datalist>
		```

		![image-20260709110619046](../../AppData/Roaming/Typora/typora-user-images/image-20260709110619046.png)

		![image-20260709110722138](../../AppData/Roaming/Typora/typora-user-images/image-20260709110722138.png)



- `<details></details>`   `<summary><summary>`

	- details：用于展示问题和答案或者对专有名词进行解释

	- summary：写在`details`中

	- ```html
		<details>
			<summary>如何一夜暴富？</summary>
		    <p>来到尚硅谷学习前端</p>
		</details>
		```

		![image-20260709111011593](../../AppData/Roaming/Typora/typora-user-images/image-20260709111011593.png)

		![image-20260709111036655](../../AppData/Roaming/Typora/typora-user-images/image-20260709111036655.png)

### 04_新增文本标签

- 注音标签

	- ```html
		<ruby>
			<span>魑魅魍魉</span>
		    <rt>chi mei wăng liang</rt>
		</ruby>
		```

		![image-20260709112023392](../../AppData/Roaming/Typora/typora-user-images/image-20260709112023392.png)

- 标记文字

	- ```html
		<p>
		    Lorem ipsum <mark>dolor</mark>sit amet consectetur adipisicing elit,Laboriosam,nemo?
		</p>
		```

		![image-20260709112441516](../../AppData/Roaming/Typora/typora-user-images/image-20260709112441516.png)

## 三、表单相关的新增

### 01_新增的表单控件属性

- ==placeholder=“ ”==——提示文字

	```html
	<input type="text" name="account" placeholder="请输入账号">
	```

- ==required==——必选/必填项

	```html
	<input type="text" name="account" required>
	```

	```html
	    性别：
	    	<input type="radio" value="male" name="gender" required>男
	    	<input type="radio" value="female" name="gender">女
	<!-- 不是必选男，是指男女中必选一项 -->
	```

	required加在单选按钮是指该类选一即可，加在多选上，则是该项必选

- ==autofocus==——自动对焦

	```html
	<input type="text" name="account" autofocus>
	<!-- 打开后光标自动对焦在该输入框 -->
	```

	多个控件带autofocus属性时，对焦在先写的上面

- ==autocomplete=“ ”==——自动完成（自动显示之前输入过的信息）

	- 可填值
		1. on——打开
		2. off——关闭

	```html
	<input type="text" name="account" autocomplete="on">
	```

- ==pattern=“ 正则表达式 ”==——限制输入内容（限制不了文本域，空输入不限制 ）

	```html
	<input type="password" name="pwd" pattern="\w(6)">
	<!-- 必须输入六位 -->
	```

### 02_input新增的type属性值

- 原有的：text、password、radio、checkbox、hidden、submit，reset、button

- 扩展：

	1. ==email==

		```html
		邮箱：<input type="email" name="email"> 
		```

	2. ==url==——网址

		```html
		url：<input type="url" name="url"> 
		```

	3. ==number==——数值（会出现一个上下的符号，点击可以加减数值）

		```html
		数值：<input type="number" name="number" step="3" max="80" min="10">
		```

		可以通过`step`属性调整每次增加减小多少 

	4. ==search==——搜索（输入内容后会出现一个×，点击清楚输入内容）

		```html
		搜索：<input type="search" name="keyword"> 
		```

	5. ==tel==——电话（用于移动端，在手机上弹出的输入键盘仅有数字）
	
		```html
		电话：<input type="tel" name="tel"> 
		```
	
	6. ==range==——范围选择器
	
		```html
		光照强度：<input type="range" name="range" max="100" min="" value=" "> 
		```
	
	7. ==color==——颜色选择器
	
		```html
		颜色：<input type="color" name="color"> 
		```
	
	8. 日期
	
		- ==date==——年月日选择器
	
		```html
		日期：<input type="date" name="date"> 
		```
	
		- ==month==——年月选择器
		- ==week==——年+第几周
		- ==time==——时间：几点几分
		- ==datetime-local==——年月日+时+分
	
- `<form>`也有新增属性==novalidate==——所有输入框都不做校验格式

## 四、新增多媒体标签

### 01_新增视频标签

- ==controls==——显示视频播放按钮、进度条、音量等等

	```html
	<video src=" " controls></video>
	```

- ==muted==——播放时静音

- ==autoplay==——自动播放，**但是**必须得静音该属性才生效

- ==loop==——循环播放

- ==poster=“ 地址”==——选择视频封面

- ==preload=“ ”==——视频预加载

	- 可输入属性值：
		1. auto
		2. none
		3. metadata

### 02_新增的音频标签

```html
<audio src=" "></audio>
```

- ==controls==——显示音频播放按钮、进度条、音量等等
- ==muted==——播放时静音
- ==loop==——循环播放
- ==preload=“ ”==——音频预加载
	- 可输入属性值：
		1. auto
		2. none
		3. metadata

## 五、新增的全局属性（了解）

| 属性名            | 功能                                                         |
| ----------------- | ------------------------------------------------------------ |
| `contenteditable` | 表示元素是否可被用户编辑，可选值：<br />`true`：可编辑<br />`false`：不可编辑 |
| `draggable`       | 表示元素可以被拖动，可选值：<br />`true`：可拖动<br />`false`：不可拖动 |
| `hidden`          | 隐藏元素（不占位）<br />> 复习css <<br />1. display：none（不占位）<br />2. visibility:hidden（占位） |
| `spellcheck`      | 规定是否对元素进行拼写和语法检查，可选值：<br />`true`：检查<br />`false`：不检查 |
| `contextmenu`     | 规定元素的上下文菜单，在用户鼠标右键点击元素显示             |
| `data-*`          | 用于存储页面的私有定制数据                                   |

## 六、HTML5的兼容性问题

- 方法一：

```html
<!--[if lt ie 9]>                                             
<script src="相应的文件"></script>
<![endif]-->
```

如果浏览器版本小于IE9,则执行语句，判断结束

- 方法二：

	```html
	<head>
		<!-- 让IE浏览器处于一个最优的渲染模式 -->
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <!-- 针对一些国产的“双核”浏览器的设置,让浏览器优先使用webkit内核去渲染网页 -->
	    <meta name="render" content="webkit">
	</head>
	```

	