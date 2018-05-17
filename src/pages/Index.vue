<template>
	<div class="Index">
		<el-row class="Index-row">
			<el-col :span="4" :offset="2" class="Index-col">
				<el-menu mode="vertical" class="Index-menu" :default-active="defaultActive" @select="selectMenu">
					<el-submenu :index="menu.index" v-for="menu in menus" :key="menu.index">
						<span slot="title">{{ menu.title}}</span>
						<el-menu-item :index="submenu.index" v-for="submenu in menu.submenu" :key="submenu.index">
							{{ submenu.title }}
						</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="16" class="Index-col">
				<div class="menu-content">
					<div v-for="(content, index) in currentContent" :key="index">
						<h2>例 {{ index + 1}}</h2>
						<iframe width="100%" height="300" :src="content.src" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0">
						</iframe>
						<div class="content-tips" v-if="content.tips.length > 0">
							<p v-for="tip in content.tips">{{ tip }}</p>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				jsfiddle: '',
				defaultActive: '1-1',
				menus: [
					{ 
						index: '1', 
						title: '第二章 背景与边框',
						submenu: [
							{ index: '1-1', title: '1. 半透明边框' },
							{ index: '1-2', title: '2. 多重边框' },
							{ index: '1-3', title: '3. 灵活的背景定位' },
							{ index: '1-4', title: '4. 边框内圆角' },
							{ index: '1-5', title: '5. 条纹背景' },
							{ index: '1-6', title: '6. 复杂的背景图案' },
						]
					}
				],
				menuContents: {
					'1-1': [ 
						{ 
							src: '//jsfiddle.net/Hwaphon/e6Lg0a3r/embedded/html,css,result/',
							tips: [
								'background-clip 属性规定背景的绘制区域。'
							]
						}
					],
					'1-2': [
						{
							src: '//jsfiddle.net/Hwaphon/68ry34t1/embedded/html,css,result/',
							tips: [
								'绘制多重边框有两种方法。第一种是使用 box-shadow ,第二种是 outline。', 
								'box-shadow 前三个参数指定为0，第四个参数指定为要模拟的边框宽度，第五个参数指定为要模拟的边框颜色，就可以实现一个边框效果。由于 box-shadow 可以以逗号分隔指定多个值，所以可以为元素添加任意多个'
							]
						}
					]
				},
				currentContent: [],
			}
		},
		methods: {
			selectMenu (index) {
				this.currentContent = this.menuContents[index] || []
			}
		},
		created () {
			this.currentContent = this.menuContents[this.defaultActive]
		}
	}
</script>

<style scoped lang="scss">
@import './Index.scss';
</style>