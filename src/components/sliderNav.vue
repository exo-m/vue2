<template>
	<div class="slideBar">
		<el-col :span="3">
			<div class="bg-menu">
				<h4 class="header-menu">菜单栏</h4>
			    <el-menu default-active="/index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true">
			    	<!-- <el-submenu index="1">
				        <template slot="title"><i class="el-icon-message"></i>权限管理</template>
				        <el-menu-item-group>
				          <template slot="title">用户权限</template>
				          <el-menu-item index="1-1">修改密码</el-menu-item>
				          <el-menu-item index="1-2">绑定手机号</el-menu-item>
				        </el-menu-item-group>
				        <el-menu-item-group title="商户权限">
				          <el-menu-item index="1-3">修改密码</el-menu-item>
				          <el-menu-item index="1-4">绑定手机号</el-menu-item>
				        </el-menu-item-group>
				        <el-submenu index="1-4">
				          <template slot="title">选项4</template>
				          <el-menu-item index="1-4-1">选项1</el-menu-item>
				        </el-submenu>
			      	</el-submenu> -->
			      	<el-menu-item index="/index"><i class="el-icon-date"></i>统计分析</el-menu-item>
			      	<el-menu-item index="/order"><i class="el-icon-menu"></i>订单管理</el-menu-item>
			      	<el-menu-item index="/address?foo=bar"><i class="el-icon-setting"></i>地址管理</el-menu-item>
			      	<el-menu-item index="/special"><i class="el-icon-document"></i>专题管理</el-menu-item>
			      	<el-menu-item index="/marketing"><i class="el-icon-edit"></i>营销中心</el-menu-item>
			      	<el-menu-item index="/userlist"><i class="el-icon-star-on"></i>用户列表</el-menu-item>
			      	<el-menu-item index="/merchantlist"><i class="el-icon-minus"></i>商户列表</el-menu-item>
			      	<el-menu-item index="/version"><i class="el-icon-upload2"></i>版本控制</el-menu-item>
			      	<el-menu-item index="/cusservice"><i class="el-icon-upload"></i>客服系统</el-menu-item>
			      	<el-menu-item index="/partner"><i class="el-icon-share"></i>合作伙伴</el-menu-item>
			    </el-menu>
		    </div>
		</el-col>
		<div class="exit-btn" @click="exit">
			<el-button type="info">退出系统</el-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	components: {

	},
	methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      exit: function() {
      	this.$router.replace("/");
      }
    }
}
</script>

<style lang="less">
@import '../styles/common.less';
.slideBar {
	height: 100vh;
	overflow-y: auto;
	position: relative;
	.header-menu {
		width: 100%;
		text-align: center;
		background-color: #000;
		color: #fff;
		height: 60px;
		line-height: 60px;
		margin: 0px;
	}
	.bg-menu {
		width: 100%;
		height: 100vh;
		background-color: #eef1f6;
	}
	.exit-btn {
		position: absolute;
		top: 30px;
		right: 74px;
	}
}
</style>