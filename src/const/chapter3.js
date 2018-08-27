/*
* @Author: hwaphon
* @Date:   2018-08-12 13:13:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-08-27 22:52:12
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
        '2. '
      ]
    }
  ]
}

export default chapter3;