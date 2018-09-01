/*
* @Author: hwaphon
* @Date:   2018-08-12 13:13:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-01 12:43:01
*/
const chapter3 = {
  '3-1': [
    {
      src: '//jsfiddle.net/Hwaphon/41ae20yk/3/embedded/result,html,css/',
      tips: [
        'box-shadow 的第三个参数为模糊半径，该值并不会影响到投影的大小，它是从投影的边缘开始计算，像内开始模糊。',
        'box-shaodw 的第四个参数为拓展半径，该值设置为正值时，投影会在四个方向上加上该正值。如果该值为负值，则投影会在四个方向上减去该负值的绝对值。',
        'box-shadow 可以指定 inset 关键字，将投影设置为内投影。'
      ]
    }
  ],
  '3-2': [
    {
      src: '//jsfiddle.net/Hwaphon/0ec1x3b4/32/embedded/result,html,css/',
      tips: [
        '当我们为一些伪元素或者半透明的元素添加了 box-shadow 就会遇到以上问题，这类情况包括:',
        '1. 半透明图像、背景图像、或者 border-image。',
        '2. 元素设置了点状、虚线或者半透明的边框，但没有背景。',
        '3. 对话气泡的小尾巴。切角效果。折角效果。利用 clip-path 生成的菱形图片。',
        '解决以上问题的办法是使用 filter 的 drop-shadow 属性。'
      ]
    },
    {
      src: '//jsfiddle.net/Hwaphon/3yx4bn1e/3/embedded/result,html,css',
      tips: [
        'drop-shadow 和 box-shadow 相比，它没有第四个参数拓展半径，也不支持以逗号分隔的多层设置语法。',
        'drop-shadow 会给任何非透明的部分打上投影，包括文本（如果背景是透明的）。'
      ]
    }
  ],
  '3-3': [
    {
      src: '//jsfiddle.net/Hwaphon/v4hwydsr/5/embedded/result,html,css/',
      tips: [
        '使用 filter 中的属性可以对图片的色彩进行控制。'
      ]
    }
  ],
  '3-4': [
    {
      src: '//jsfiddle.net/Hwaphon/d4Lx1yc2/19/embedded/result,html,css/',
      tips: [
        '首先这个效果利用了 background-attachment: fixed 的原理。',
        '为元素添加伪元素，设置与 body 一样背景，然后利用 filter 设置 blur 半径。这个时候已经有了模糊的效果，但是文字被伪元素遮挡住了，所以需要为伪元素设置 z-index: -1。',
        '实现结束后会发现模糊效果到达边缘的时候会越来越差，即背景图越来越清晰。这个时候可以为伪元素设置负 margin，增大元素的面积，以确保在元素框内模糊程度一样。最后为伪元素的包含块设置 overflow: hidden 即可。'
      ]
    }
  ]
}

export default chapter3;