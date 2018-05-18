/*
* @Author: hwaphon
* @Date:   2018-05-17 17:52:24
* @Last Modified by:   hwaphon
* @Last Modified time: 2018-05-17 17:54:37
*/

const chapter1 = {
	'1-1': [
		{
			src: '//jsfiddle.net/Hwaphon/e6Lg0a3r/embedded/result,html,css/',
			tips: [
				'background-clip 属性规定背景的绘制区域。'
			]
		}
	],
	'1-2': [
		{
			src: '//jsfiddle.net/Hwaphon/68ry34t1/embedded/result,html,css/',
			tips: [
				'绘制多重边框有两种方法。第一种是使用 box-shadow ,第二种是 outline。',
				'box-shadow 前三个参数指定为 0，第四个参数指定为要模拟的边框宽度，第五个参数指定为要模拟的边框颜色，就可以实现一个边框效果。由于 box-shadow 可以以逗号分隔指定多个值，所以可以为元素添加任意多个边框。这种方法的优点是可以设置多个边框而且可以保持元素的圆角。缺点是不能响应元素的点击或其它事件。如果响应事件对你非常重要，那么可以启用 box-shadow 的 inset 关键字，然后再为元素设置一个 padding 即可。',
				'outline 的行为和 border 几乎是相同的，不过不支持圆角（Firefox 支持 outline-radius）。借助 outline-offset 属性可以设置相对元素的距离，设置为负值时边框将显示在元素内部。相比于 box-shadow，这种方法的优点是支持边框非实线（可以设置为虚线）,缺点是只能设置一个外边框。'
			]
		}
	],
	'1-3': [
		{
			src: '//jsfiddle.net/Hwaphon/3700Lm2d/1/embedded/result,html,css/',
			tips: [
				'在 CSS3 中，background-position 可以用 right 10px 这种形式为背景设置距离容器的右边距。在 background 中仍然书写了 right bottom 关键字，主要是为不支持上述写法的浏览器提供一个回退方案。'
			]
		},
		{
			src: '//jsfiddle.net/Hwaphon/dyLwrnd0/1/embedded/result,html,css/',
			tips: [
				'一个元素包含三个矩形，一个是 content 矩形，一个是 content + padding 矩形，还有一个是 content + padding + border 矩形。background-origin 用于设置背景图相对于哪个矩形进行定位，默认是 padding-box，为了实现背景图与内边距一致的效果，可将默认值更改为 content-box。'
			]
		}
	],
	'1-4': [
		{
			src: '//jsfiddle.net/Hwaphon/so6ozq8u/embedded/result,html,css/',
			tips: [
				'利用 box-shadow 和 outline 可以实现这个效果，box-shadow 第四个参数用于设置扩张半径，可保持元素的圆角，outline可以设置边框，但是无法保持圆角。但是这二者一重叠，就可以将元素和 outline 之间的空白填补上。',
				'box-shadow 第四个参数扩张半径的设置是有讲究的，在元素圆角处将圆形描述出来，就不难发现，圆心到外边框的距离为 √ (radius ^ 2 + radius ^2)，所以 box-shadow 扩展半径要大于 (√ 2 - 1) * radius, 小于 (√ 2 - 1) * radius + outline 边框宽度。'
			]
		}
	],
	'1-5': [
		{
			src: '//jsfiddle.net/Hwaphon/1zobd5xe/embedded/result,html,css/',
			tips: [
				'可以使用 repeating-linear-grandient 生成斜向条纹。',
				'如果某个色标的位置值比整个列表中在它之前的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。',
				'为了设置同色系的条纹，可以先为元素设置好背景色，然后设置透明渐变以获取淡色条纹。'
			]
		}
	],
	'1-6': [
		{
			src: '//jsfiddle.net/Hwaphon/m1wwcaqu/1/embedded/result,html,css/',
			tips: [
				'background-image 可以用逗号分隔指定多个值，借用这个特性可以实现许多有趣的图形。'
			]
		},
		{
			src: '//jsfiddle.net/Hwaphon/qr99Lbx6/embedded/result,html,css/',
			tips: [ '在未利用预处理器的情况下，如果需要修改圆点的尺寸及间隔，将改动四处代码。建议使用预处理器的 mixins。']
		},
		{
			src: '//jsfiddle.net/Hwaphon/bjxghn4v/embedded/result,html,css/',
			tips: [ '此例的实现依赖于 background-position 的使用。' ]
		}
	],
	'1-7': [
		{
			src: '//jsfiddle.net/Hwaphon/fnvek1w3/embedded/result,html,css/',
			tips: [
				'将三个背景的宽度设置为质数，这样背景重复的最小尺寸将为三个质数的乘积。所以选择大小合适的质数将使的在已知分辨率下无规律可循，即实现伪随机。'
			]
		}
	],
	'1-8': [
		{
			src: '//jsfiddle.net/Hwaphon/8nba02wb/embedded/result,html,css/',
			tips: [
				'结合 background-clip 和 background-origin。 background-origin 的值默认是 padding-box，所以背景图像在 padding-box 的基础上显示是正常的，由于 background-clip 又指明将背景延伸到 border-box，所以这个时候的背景实际上是被拉伸的。为了正常的显示，我们需要先将 background-origin 设置为 border-box。'
			]
		}
	]
}

export default chapter1
