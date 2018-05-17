<template>
	<div class="Index">
		<el-row class="Index-row">
			<el-col :span="4" :offset="2" class="Index-col">
				<el-menu mode="vertical" class="Index-menu" default-active="1-1">
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
					<iframe width="100%" height="420" src="//jsfiddle.net/Hwaphon/m4usu713/embedded/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data () {
			return {
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
				]
			}
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
		background-color: #FFF;
		padding: 32px 24px;
	}
</style>