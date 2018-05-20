const chapter2 = {
  '2-1': [
    {
      src: '//jsfiddle.net/Hwaphon/nweqwhta/embedded/result,html,css/',
      tips: [
        '在元素宽高相同的情况下，border-radius 的某个值设置为 =50% 或者 >50% 效果是相同的。如果元素是宽高不等的矩形，那么 =50% 和 >50% 的效果将有所不同。',
        'border-radius: 10px 是 border-radius: 10px 10px 10px 10px / 10px 10px 10px 10px 的简写。/ 前指定的是水平方向的圆角半径，/ 后指定的是垂直方向上的圆角半径。'
      ]
    },
    {
      src: '//jsfiddle.net/Hwaphon/rgatvonh/1/embedded/result,html,css/',
      tips: []
    }
  ],
  '2-2': [
    {
      src: '//jsfiddle.net/Hwaphon/4Lhbwzm1/embedded/result,html,css/',
      tips: [
        '如果为元素本身设置 skew 变形，那么元素的文字也会变形。所以可以为元素的伪元素设置变形。',
        '伪元素设置背景之后将覆盖元素本身，所以需要为其设置 z-index: -1，让其处于元素下一层。',
        '如果元素高度和宽度相等，那么可以对伪元素使用 rotate，从而制造一个菱形。'
      ]
    }
  ],
  '2-3': [
    {
      src: '//jsfiddle.net/Hwaphon/9rmj89ey/2/embedded/result,html,css/',
      tips: [
        '使用 skew 让 div 标签旋转 45 度形成菱形，然后让图片标签往相反的方向旋转 45 度，从而保持图片元素的正常水平状态。',
        '为了保持图片能够充满整个元素，需要将图片宽度设置为 √2 * 元素宽度。有两种方法可以改变图片的大小，一种是改变图片的 width，另一种是使用 scale 缩放。',
        '使用 scale 有两个好处。第一个好处就是可以保持 width 为 100% 不变，当浏览器不支持 rotate 属性的时候，仍然能有一个好的布局。第二个好处是，由于 transform-origin 的默认值是 50% 50%, 所以我们不需要任何额外的操作就可以使得图片的中点与容器元素的中点保持一致。如果使用 width，那么图片将以左上角为原点进行缩放，所以需要再为图片设置负边距以保持与容器元素中心点一致。',
        '由于 √2 约等于 1.41，所以我们可以指定缩放比例 >=1.42。而且这种情况是建立在图片是正方形的情况下，如果图片不是一个正方形，那就无法生成一个菱形了，除非根据图片再放大缩放比例。这也是这种方式的一种缺陷。'
      ]
    },
    {
      src: '//jsfiddle.net/Hwaphon/k52p39gz/2/embedded/result,html,css/',
      tips: [
        '使用 clip-path 可以解决图片不是正方形的问题，除菱形外 clip-path 还可以指定其它的很多形状。clip-path 的兼容性还不是很好，建议使用前用 Caniuse 查一下。'
      ]
    }
  ],
  '2-4': [
    {
      src: '//jsfiddle.net/Hwaphon/19qgzdp1/embedded/result,html,css/',
      tips: [
        '利用 background-image 属性为元素设置四个背景，利用 background-position 让每个元素处于一个不同的角落，利用 background-size 让每一个背景占据 1/4 的空间位置， 使用 background-repeat 禁止每个背景的平铺行为。'
      ]
    },
    {
      src: '//jsfiddle.net/Hwaphon/cfcpgf1s/embedded/result,html,css/',
      tips: [
        '只需要将切角效果中使用的 linear-gradient 改成 radial-gradient 就可以实现弧角效果。'
      ]
    }
  ],
  '2-5': [
    {
      src: '//jsfiddle.net/Hwaphon/we49cw9v/embedded/result,html,css/',
      tips: [
        '在 3D 空间内旋转一个矩形，投放到 2D 屏幕上就是一个梯形。如果直接对元素本身进行操作，那么元素上的文字也会因为旋转而变形，所以可以在元素的伪元素上进行旋转操作。在 3D 空间内的元素投放到 2D 屏幕会造成尺寸的变化，所以可以先固定 transform-origin 的值为 bottom，然后再缩放以达到文字垂直居中的效果。',
        '将 transform-origin 设置为 bottom left 和 bottom right 会分别生成一个左梯形和右梯形。'
      ]
    }
  ],
  '2-6': [
    {
      src: '//jsfiddle.net/Hwaphon/cx82d7mk/1/embedded/result,html,css/',
      tips: [
        '首先将一个圆形，分成左右两块相等颜色不同的半圆，为元素背景设置渐变可实现这一点。然后用圆形的伪元素遮住右半圆，且伪元素的颜色与左半圆相同，可设置为 inherit。然后只需要旋转伪元素以透露出被遮盖住的右半圆即可实现扇形图效果。',
        '上面这种做法只能实现平分的效果，如果右半圆颜色要遮住左半圆，可以通过改变伪元素的颜色来实现。'
      ]
    },
    {
      src: '//jsfiddle.net/Hwaphon/2b49fyyy/embedded/result,html,css,js/',
      tips: [
        '这种直接指定百分比的形式更容易使用，不过这依赖于 animation-delay 的一个特性：指定一个负的动画延时来直接跳至动画中的任意时间点。所以我们只需要设置 animation-play-state 为 paused 去停止动画的播放，然后读取元素内容中指定的百分比去设置动画延迟中的负值即可。'
      ]
    }
  ]
}

export default chapter2
