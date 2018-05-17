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
	]
}

export default chapter1
