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
						<p class="content-tips" v-if="content.tips">{{ content.tips }}</p>
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
							tips: 'background-clip 属性规定背景的绘制区域。'
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

<style scoped>
	.Index {
		height: 100%;
	}

	.Index-row,
	.Index-col,
	.Index-menu {
		height: 100%;
	}

	.menu-content {
		min-height: 100%;
		padding: 32px 24px;

		background-color: #FFF;
	}

	.content-tips {
		position: relative;

		margin-top: 45px;
		padding: 45px 24px;
		
		border: 1px solid #ddd;
		background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
	}

	.content-tips::before {
		content: "Tips";
		position: absolute;
		top: -21px;
		left: 16px;

		width: 42px;
		height: 42px;

		background-color: #409EFF;
		border: 2px solid #ddd;
		border-radius: 100%;
		color: #FFF;
		text-align: center;
		line-height: 42px;
		box-shadow: 1px 1px 8px rgba(0,0,0,.3), -1px -1px 8px rgba(0,0,0,.3);
	}
</style>