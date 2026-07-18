# CSS3

## 一、CSS3简介

- **css私有前缀**

	- -webkit-
	- -moz-
	- -o-
	- -ms-

	> 不用刻意去加前缀，后期可通过webpack工具

- **查询`CSS3`兼容性的网站**：[](https://caniuse.com)

## 二、新增的长度单位

> css2的长度单位：px、em（相对于元素font-size的倍数）、%（相对于父元素的font-size大小）

- ==rem==——相对于根元素`html`的`font-size`字体大小

- ==vw==——相对于视口宽度的百分之几

	> viewport-width：视口-宽度

	```css
	width:50vw;
	height:20vw;
	/** 该元素宽为视口宽的50%，高为视口的20% **/
	```

- ==vh==——相对于视口高度的百分之几

- vmax——相对于视口宽**或**高之中**大**的的百分之几

- vmin

## 三、新增的盒子模型相关属性

- ==box-size: ;==
	- 可选值
		1. content-box——默认值，width和height控制内容区宽高
		2. border-box——width和height控制整个盒子宽高

- resize: ;——无实际开发意义

	- 可选值
		1. horizontal——可以拉缩盒子的宽度
		2. vertical——高度
		3. both

	> 该属性生效前提，元素必须浮动

- ==box-shadow: ;==

	```css
	/* 水平10px 垂直20px */
	box-shadow: 10px 20px;
	
	/* 水平位置 垂直位置 阴影颜色 */
	box-shadow: 10px 20px blue;
	
	/* 水平位置 垂直位置 模糊程度 */
	box-shadow: 10px 20px 10px;
	
	/* 水平位置 垂直位置 模糊程度 阴影颜色 */
	box-shadow: 10px 20px 10px blue;
	
	/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 */
	box-shadow: 10px 20px 10px  10px blue;
	
	/* 水平位置 垂直位置 模糊程度 外延值 阴影颜色 内阴影*/
	box-shadow: 10px 20px 10px  10px blue inset;
	```

- ==opacity: ;==——不透明度
	
	- 取值范围0\~1——透明~不透明

## 四、新增的背景相关属性

- ==background-origin: ;==——背景图的原点/起点

	- 默认背景图的起点是padding左顶点
	- 可选值
		1. padding-box——默认值
		2. content-box——内容区左顶点
		3. border-box——边框左顶点

- ==background-clip: ;==——背景图剪切

	- 可选值

		1. border-box——默认值，**超出**border以外不出现

		2. padding-box——**超出**padding区不出现

		3. content-box——**超出**内容区不出现

		4. text——背景图只显示在文字上

			> text 生效前提，加前缀+将文字设置为透明色

- ==background-size: ;==——调整背景大小

	- 可写值

		1. 数字大小

			```css
			/* 直接将图片压缩成400*400px */
			background-size: 400px 400px;
			
			/* 参考背景图父元素的宽高大小百分比 */
			background-size: 100% 100%
			```

		2. contain——完整的将图片呈现出来，且保持原有宽高比例

			> 长边缩放到指定大小，填充空的

		3. cover——相对优秀

			> 短边缩放到指定大小，裁剪

- background: ;——复合属性

	```
	background: 背景颜色 背景url 是否重复 位置 / 背景图大小 原点 裁剪方式
	```

- **多背景图**——使用复合属性，多个图片使用逗号隔开

	```
	background: url(' ') no-repeat left top,
				url(' ') no-repeat right top,
				url(' ') no-repeat right bottom,
				url(' ') no-repeat left bottom;
	```

## 五、新增的边框相关属性

- ==border-radius: ;==——边框圆角

	- border-top-left-radius: ;
	- border-top-right-radius: ;
	- border-bottom-right-radius: ;
	- border-bottom-left-radius: ;

	> 都可以写一个值，或者两个值（椭圆）

- 外轮廓

	```
	outline-width: 20px;
	outline-color: blue;
	outline-style: solid;
	
	outline-offset: ;外边框的偏移量
	```

## 六、新增的文本相关属性

- ==text-shadow: ;==——文本阴影

	```css
	/* 往右下角偏移3个像素 */
	text-shadow: 3px 3px 
	
	/* 位置 位置 颜色 */
	text-shadow:3px 3px red;
	
	/* 位置 位置 模糊程度 颜色 */
	text-shadow:3px 3px 10px black;
	```

- ==white-space: ;==——文本换行

	- 可选值
		1. pre——按原文显示，容器放不下也不换行
		2. pre-wrap——按原本显示，容器放不下时换行
		3. pre-line——按原本显示，放不下会换行，每一行始末的空格消失
		4. nowrap——文本溢出也不换行
		5. normal——默认值，换行解读为一个空格

- ==text-overflow: ;==——文本溢出

	- **文字一行显示，超出部分用三个点省略**

		```css
		overflow: hidden;   /* 选值不是visible即可 */
		white-space: nowrap;
		text-overflow: ellipsis;		
		```

- ==text-decoration==——文本修饰

	- 可选值

		1. underline——下划线
		2. overline——上划线
		3. line-through——中间穿线
		4. ……

	- 子属性

		1. text-decoration-line: ;
		2. text-decoration-style: ;
		3. text-decoration-color: ;

		<u>子属性按顺序可直接用复合属性</u>     e.g.

		```css
		text-decoration: underline wavy blue;
		```

- ==text-stroke: ;==——文本描边

	- 要加前缀，只有-webkit-内核浏览器支持
	- 子属性
		1. -webkit-text-stroke-width: ;
		2. -webkit-text-stroke-color: ;

## 七、新增渐变

- ==background-image: linear-gradient( );==——**线性渐变**

	- ![image-20260711103242893](../../AppData/Roaming/Typora/typora-user-images/image-20260711103242893.png)

		```css
		/* 默认顺序颜色从上到下，颜色数量不限 */
		backgroud-image: linear-gradient(red,yellow,green);
		```

	- ![image-20260711103726336](../../AppData/Roaming/Typora/typora-user-images/image-20260711103726336.png)

		```css
		/* to righht——往右渐变；to right top——往右上角渐变 */
		backgroud-image: linear-gradient(to right,red,yellow,green);
		```

	- ![image-20260711104244161](../../AppData/Roaming/Typora/typora-user-images/image-20260711104244161.png)

		```
		background-image: linear-gradient(20deg,red,yellow,green);
		```

	- ![image-20260711105023415](../../AppData/Roaming/Typora/typora-user-images/image-20260711105023415.png)

		```css
		/* 0~50px：纯红；
		   50ox~100px：变黄；
		   100px：纯黄；
		   100px~150px：变绿；
		   150px~结束：纯绿 */
		backgroud-image: linear-gradient(red 50px,yellow 100px,green 150px);
		```

- ==background-image: radial-gradient( );==——径向渐变

	- ![image-20260711110233614](../../AppData/Roaming/Typora/typora-user-images/image-20260711110233614.png)

		```css
		background-image: radial-gradient(red,yellow,green);
		```

	- ![image-20260711111703715](../../AppData/Roaming/Typora/typora-user-images/image-20260711111703715.png)

		```css
		/* at left top——圆心在左上角 */
		background-image: radial-gradient(at left top,red,yellow,green);
		```

	- ![image-20260711113110374](../../AppData/Roaming/Typora/typora-user-images/image-20260711113110374.png)

		```css
		background-image: radial-gradient(at 100px 50px,red,yellow,green);
		```

	- ![image-20260711113325794](../../AppData/Roaming/Typora/typora-user-images/image-20260711113325794.png)

		```css
		background-image: radial-gradient(circle,red,yellow,green);
		```

	- ![image-20260711113530415](../../AppData/Roaming/Typora/typora-user-images/image-20260711113530415.png)

		```css
		background-image: radial-gradient(100px 100px,red,yellow,green)
		```

	- ![image-20260711113850199](../../AppData/Roaming/Typora/typora-user-images/image-20260711113850199.png)

		```css
		/* 从圆心往外50px：纯红；
		   50ox~100px：变黄；
		   100px：纯黄；
		   100px~150px：变绿；
		   150px~结束：纯绿 */
		background-image: radial-gradient(red 50px,yellow 100px,green 150px);
		```

- 在其他渐变基础上，属性值前加==repeating-==  ——重复渐变

	> 在**没有发生渐变**的区域重复渐变，例如前文规定渐变区域时的纯色区域重复渐变

![image-20260711114852538](../../AppData/Roaming/Typora/typora-user-images/image-20260711114852538.png)

```css
/* 对应线性渐变盒子4 */
background-image: repeating-linear-gradient(red 50px,yellow 100px,green 150px);
```

## 八、新增web字体-字体图标

- **web字体**

	==@font-face {    }==

	- >  css2——`font-family: ;`

	- 具体使用

		```css
		/* 简写 */
		<style>
			/* 先引入字体 */
		    @font-face {
		        font-family: "自定义起名";
		        src: url('文件名或者某提供字体的服务器地址')
		    }
			/* 再使用字体 */
		    h1 {
		        font-family: '自定义起名'；
		    }
		</style>
		```

		```css
		/* 考虑兼容性 */
		@font-face {
		    font-family: "自定义名字";
		    font-display: swap;
		    src: url(' .eot');/* IE9 */
		    src: url(' .eot?#iefix') format('embedded-opentype'),/* IE6~IE8 */
		    	url(' .woff2') format('woff2'),
		        url(' .woff') format('woff'),/* chrome,firefox */
		        url(' .ttf') format('truetype'),/* chrome、firefox、opera、safari、android */
		        url(' svg#webfont') format('svg');/* ios4.1~ * */
		}
		```

	- 中文字体文件很大，使用完整的字体文件不现实，通常是对某几个字进行单独定制

		> 可使用阿里Web字体定制工具：[https://www.iconfont.cn/webfont](https://www.iconfont.cn/webfont)

- **字体图标**

## 九、2D_变换

- ==transform: translate( );==——**位移**
	- 子属性：translateX( )；translateY( )
	- 复合属性只写一个值：控制X
	- 属性值像素值或%，%相对于自身
	- 不脱离文档流，对于行内元素失效

- ==transform: scale( );==——**缩放**
	- 取值：数字
	- 子属性：scaleX( )，scaleY( )
	- 复合属性只写一个值：控制X和Y

- ==transform: rotate( )==——**旋转**
	- 2D控制的是元素在二维平面绕z轴顺逆时针旋转
	- 取值：数字deg
	- 只写一个值控制Z方向，rotate(20deg)相对于rotateZ(20deg)
- transform: skew( );——**扭曲**

- ==transform: 属性( ) 属性( ) ……==——**多重变换**

	属性之间用空格隔开，属性先后顺序会影响后面的属性

- ==transform-origin: ;==——**变换原点**——对旋转和缩放有影响

## 十、3D _变换

先给父元素**开启3D空间**

```css
transform-syle: preserve-3d;
```

- ==perspective: 数值px;==——景深

- ==perspective-origin: 数值px 数值px;==——透视点的位置（观察者的位置）

	> 默认在中心点——直接写父元素的宽高

- transform: translate3d( 必须写三个值);——位移

- transform: rotateX( ); rotateY();——旋转

	> rotate3d(四个值)——x y z 旋转度数（xyz处为0或1，1旋转，0不旋）

- transform: scaleZ( );——缩放 
- ——多重变换
- ——变换原点
-  backface-visibility: hidden;——背部可见性

## 十一、过渡

过渡：`transition: ;`

### 1. 过渡的基础使用

- ==transition-property: ;==——设置哪些属性需要过渡
	- 常用值
		1. none——没有需要过渡的属性
		2. all——所有属性
		3. 具体某个属性
	- 能支持设置过渡的属性：属性值可以用数字代替的，e.g.颜色、长度、2D变换、3D变换、阴影、`z-index`、`opacity`

- ==transition-duration: ;==——设置过渡时间
	- 单位：s / ms

**具体使用步骤**

```css
/* 第一步：设置哪个属性需要过渡 */
transition-property: height,width,background-color;
/* 第二步：设置过渡时间 */
transition-durtion: 1s;
```

### 2. 过渡的高级使用

- ==transition-delay: ;==——指定开始过渡的延迟时间
	
- 单位：s / ms
	
- ==transition-timing-function: ;==——设置过渡效果类型

	- 常用值

		1. **`ease`——平滑过渡（慢 快 慢）  默认值**
		2. **`linear`——线性过渡（匀速）**

		其他了解知道即可

		1. `ease-in`——慢 快
		2. `ease-out`——快 慢
		3. `ease-in-out`——慢 快 慢（ease更加柔顺一点）
		4. `step-start`——一步到位
		5. `step-end`——等过渡时间到了，一步到位
		6. `step(数字)`——指定步数
		7. cubic-bezie(数字，数字，数字，数字)——贝塞尔曲线
			在线制作贝塞尔曲线：[https://cubic-bezier.com/](https://cubic-bezier.com/)

### 3. 过渡的复合属性

- **transition: ;**
- 四个属性值，只要注意`duration`和`delay`，第一个出现的时间作为`duration`，第二个作为`delay`，只有一个时间作为`duration`

## 十二、动画

### 1. 动画的基本使用

- **第一步：定义关键帧（定义动画）**——在style标签中单独定义

	```css
	/* 写法一： */
	@keyframes 动画名 {
	    from {
	        /* 属性名: 属性值; */
	    }
	    to {
	        
	    }
	}
	```

	```css
	/**/
	@keyframes 动画名 {
	    0% {
	        
	    }
	    20% {
	        
	    }
	    100% {
	        
	    }
	}
	```

- **第二步：应用动画**——在需要应用动画的元素中使用

	```css
	/* 指定动画 */
	animation-name: 动画名;
	/* 设置动画时间 */
	animation-duration: 3s;
	/* 设置动画延迟 */
	animation-delay: 0.5s;
	```

### 2.动画的其他属性

- **animation-timing-function**——设置动画方式
- **animation-iteration-count:** 数字 / infinite(无限)；——设置播放次数
- **animation-direction: ;**——设置播放方向
	- reverse——反方向
	- alternate——往复运动
	- alternate-reverse
- **animation-fill-mode: ;**——不发生动画的时候停在哪
	- forwards——静止在最后一帧
	- backwards——静止在第一帧
- **animation-play-state: pause;**——暂停动画

### 3. 动画的复合属性

- animation-name
- animation-duration
- animation-delay
- animation-timing-function
- animation-iteration-count
- animation-direction
- animation–fill-mode
- animation-play-state

**复合属性**——`animation: ;`

> 无顺序，只要注意时间，第一个时间是duration 

## 十三、多列布局

==语法：==

- `colum-count: ;`——指定列数
- `colum-width: ;`——指定宽度
- `colum-gap: ;`——设置列间距
- `colum-rule: width style color;`——每一列的样式
- `colum-span:none(不跨列) / all(跨所有列); `——设置标题之类跨列

要在多列布局中插入图片，给图片设置宽度`width: 100%;`，即当前列的宽



## 十四、伸缩盒模型

### 1.容器与项目

- **第一步：开启flex布局 / 将元素变为伸缩容器**

	```css
	display: flex;
	```

	- 不脱离文档流
	- 伸缩元素中所有的**子元素**成了伸缩项目

	```css
	flex: inline-flex;
	```

	- 将块元素转化为行内块
	- 不用——想要两个块元素并排，直接在父容器上加`flex`

	成为伸缩项目后，全都会“**块状化**”

### 2. 主轴方向

主轴：从左至右
侧轴：从上到下
（两者始终垂直，不关注交点）

- 调整主轴方向
	==flex-direction: ;==

	- 常用值

		此时侧轴为从上到下

		1. row——默认从左至右
		2. reverse——从右至左

		以下侧轴从左往右

			3. column——从上到下
			4. column-reverse——从下到上

		> 侧轴不能改，随主轴变

### 3. 主轴上的换行方式

- 主轴换行
	==flex-wrap: ;==

	- 常用值

		1. nowrap——不换行，默认，自动平分缩小宽度换不换行

		2. wrap——排不下自动换行
		3. wrap-reverse——从下往上换行

### ~~4.flex-flow~~

复合`direction`和`wrap`

### 5. 主轴的对齐方式

- ==justify-content: ;==
	- 常用值
		1. flex-start——主轴的起始位置
		2. flex-end——主轴的终末位置
		3. center——中间对齐
		4. space-around——项目均匀分布在一行中。项目与项目之间距离，是<u>项目与边缘的两倍</u>
		5. space-between——项目均匀分布在一行中，项目与项目之间距离相等，<u>项目与边缘无距离</u>
		6. space-evenly——项目均匀分布在一行中，<u>项目与项目、项目与边缘距离相等</u>

### 6.侧轴对齐_一行

- ==align-items: ;==
	- 常用值
		1. flex-start——侧轴起始位置对齐
		2. flex-end——侧轴结束位置
		3. center——侧轴中间位置
		4. ~~baseline——文字基线对齐~~
		5. stretch——默认值，拉伸（当伸缩项目高度没有设置时，高度拉伸充满整个父容器）

### 7.侧轴对齐_多行

- ==align-content: ;==
	- 常用值
		1. flex-start——侧轴起始位置
		2. flex-end——侧轴结束位置
		3. center——侧轴中间位置
		4. space-around——项目与项目之间距离相等，且为项目与边缘距离两倍
		5. space-between——项目与项目之间距离相等，项目与边缘无距离
		6. space-evenly——项目与项目、项目与边缘距离相等
		7. stretch——高度不给，平分高度

### 8.元素水平垂直居中==面试题（自己总结一下）==

- 方案一——在父容器上

	```css
	display: flex;
	justify-content: center;
	align-items: center;
	```

- 方案二——

	```css
	父容器 {
	    display:flex;
	}
	子元素 {
	    margin: auto;
	}
	```

### 9. 项目在主轴的基准长度

- `flex-basis: ;`——设置元素在主轴方向上的长度

### 10. 伸缩项目_伸

- ==flex-grow: ;== 

	默认值为0，主轴上有剩余空间不拉伸
	规则

	1. 若所有伸缩项目的`grow`值为1，则他们等分主轴上剩余空间（在他们原有的基础上加上平分的剩余空间）
	2. 若有三个伸缩项目，`grow`值分别为1，2，3。分别分到：1/6，2/6，3/6的剩余空间

### 11. 伸缩项目_缩

- ==flex-shrink: ;==

	默认值为1，它会保证元素在收缩的时候里面内容的完整呈现

### 12. flex复合属性

`flex: grow shrink basis;`——顺序按此要求 

- `flex: 1 1 auto;`——简写为`flex: auto;`
- `flex:1 1 0;`——简写为`flex:1;`
- `flex:0 0 auto;`——简写为`flex: none;`
- `flex: 0 1 auto;`——简写为`flex: 0 auto;`__初始值

### 13. 项目排序与单独对齐

- ==order: ;==——排序
	- 值：数字——数字小的在前（默认值为0）
- align-self: ;——垂直
	- center、flex-end……

## 十五、响应式布局

### 1.媒体查询——查询媒体类型

```
@media 媒体名 {
	CSS语言
}
```

例如——

```css
/* 只有在打印/打印预览才应用的样式 */
@media print {
    h1{
        background: transparent;
    }
}

/* 只有在屏幕才应用的样式 */
@media screen {
    h1{
        font-family: '翩翩体';
    }
}
```

### 2.媒体查询——查询媒体特性

```css
/* 检测到视口的宽度为800px时，应用如下样式 */
@media (width:800px) {
    
}

/* 检测到视口的宽度 小于等于 800px时，应用如下样式 */
@media (max-width:800px) {
    
}

/* 检测到视口的宽度 大于等于 800px时，应用如下样式 */
@media (min-width:800px) {
    
}

/* 检测到设备的宽度时，应用如下样式 */
@media (device-width:1960px) {
    
}

/* 检测到视口旋转方向—— 纵向(高大于宽) 时，应用如下样式 */
@media (orientation: portrait) {
    
}

/* 检测到视口旋转方向—— 横向(宽大于高) 时，应用如下样式 */
@media (orientation: landscape) {
    
}
```

### 3.媒体查询——运算符

```css
/* 且and */
@media screen and (max-width:800px) and (min-width:600px)  {
    
}

/* 或or */
@media screen and (max-width:800px) or (min-width:600px)  {
    
}

/* 否定not */
@media not screen  {
    
}
```

### 4.响应式布局常用阈值

- 0 ~ 768px ——超小屏幕
- 768px ~ 992px——中等屏幕
- 882px ~ 1200px——大屏幕
- 120px ~ *——超大屏幕

## 十六、BFC——==面试题==

> > ![image-20260713204315901](../../AppData/Roaming/Typora/typora-user-images/image-20260713204315901.png)

> > ![image-20260713204353381](../../AppData/Roaming/Typora/typora-user-images/image-20260713204353381.png)

![image-20260713204428008](../../AppData/Roaming/Typora/typora-user-images/image-20260713204428008.png)

**如何开启BFC**

![image-20260713204556234](../../AppData/Roaming/Typora/typora-user-images/image-20260713204556234.png)