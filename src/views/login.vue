<template>
	<div class="loginWrap">
		<div class="login-form">
			<form>
				<div class="input-item">
					<span>用户名</span><input type="text" v-model="params.vname" placeholder="手机号/邮箱">
				</div>
				<div class="input-item">
					<span>密&nbsp;&nbsp;&nbsp;码</span><input v-model="params.vpass" type="password" placeholder="输入6-20位数字或字母">
				</div>
				<a href="javascript:void(0);" class="submit" @click="confirmBtn">登录</a>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			params: {
				vname: '',
				vpass: ''
			}
		}
	},
	methods: {
		confirmBtn: function() {
			// console.log(this.vname + " " + this.vpass);
			if(this.params.vname == "andy" && this.params.vpass == "123456") {
				this.$router.replace("/index");
				localStorage.setItem("userinfo",this.params)
			}else {
				this.$message.error('用户名或者密码输入错误！');
			}
		}
	}
}
</script>

<style lang="less" scoped>
.loginWrap {
	width: 100%;
	height: 100%;
	background-image: url('../assets/images/login-bg.jpg');
	background-size: cover;
	overflow: hidden;
	.login-form {
		width: 400px;
		height: 300px;
		margin: 250px auto 0px;
		form {
			width: 100%;
			height: 100%;
			display: block;
			padding: 50px 40px;
			box-sizing: border-box;
			.input-item {
				width: 100%;
				height: 40px;
				line-height: 40px;
				margin-bottom: 20px;
				position: relative;
				border-radius: 3px;
				overflow: hidden;
				span {
					color: #333;
					background-color: #fff;
					display: block;
					line-height: 40px;
					height: 40px;
					width: 70px;
					text-align: center;
				}
				input {
					display: block;
					position: absolute;
					top: 0;
					right: 0;
					height: 38px;
					border: none;
					outline: none;
					line-height: 38px;
					width: 250px;
					text-indent: 8px;
					background-color: rgba(255, 255, 255, .4);
					box-shadow: 0 0 1px #fff;
					color: #00D5CB;
				}
			}
			.submit {
				display: block;
				width: 320px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background-color: #00D5CB;
				text-align: center;
				margin: 40px auto 20px;
				border-radius: 4px;
				letter-spacing: 3px;
			}
		}
	}
}
</style>