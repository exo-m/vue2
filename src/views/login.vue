<template>
	<div class="loginWrap">
		<div class="login-form">
			<form>
				<div class="logo-login">
					<p></p>
				</div>
				<div class="input-item">
					<mu-text-field label="用户名" v-model="vname" hintText="请输入手机号/邮箱" labelFloat inputClass="andylogin" />
				</div>
				<div class="input-item">
					<mu-text-field label="密码" v-model="vpass" hintText="请输入密码" type="password" labelFloat inputClass="andylogin" />
				</div>
				<div class="input-item">
					<mu-checkbox label="记住密码" class="demo-checkbox"/>
					<a class="forget">忘记密码？</a>
				</div>
				<a href="javascript:void(0);" class="submit active" @click="confirmBtn">登录</a>
			</form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

var phone = '';
localStorage.getItem('userphone') ? (phone = localStorage.getItem('userphone')) : (phone = '');
export default {
	data() {
		return {
			vname: phone,
			vpass: ''
		}
	},
	methods: {
		...mapActions([
			'userInfo'
		]),
		confirmBtn: function() {
			if($('.submit').hasClass('active')){
				return;
			}
			if(this.vname == "13627264902" && this.vpass == "123456") {
				// this.$http.post(this.$store.state.baseurl+'login', this.
				// .then(function(res) {
				// 	console.log(res);
					localStorage.setItem("userphone",this.vname);
				// 	this.$router.replace("/index");
				// })
				// .catch(function(err) {
				// 	this.$message.error(err);
				// });
				this.$router.replace("/index");
			}else {
				this.$message.error('用户名或者密码输入错误！');
			}
		},
		vwatch: function() {
			console.log("Aaaa")
			if(this.vname != "" && this.vpass != "") {
				$('.submit').removeClass('active');
			}else {
				$('.submit').addClass('active');
			}
		}
	},
	watch: {
		vname: 'vwatch',
		vpass: 'vwatch'
	},
	mounted() {

	}
}
</script>

<style lang="less">
@import '../styles/common.less';
.loginWrap {
	width: 100%;
	height: 100vh;
	background-image: url('../assets/images/login-bg.jpg');
	background-size: cover;
	background-position: center;
	overflow: hidden;
	position: relative;
	.login-form {
		width: 380px;
		position: absolute;
		top: 50%;
		left: 50%;
		height: 400px;
		margin: -200px 0 0 -190px;
		background-color: #fff; 
		form {
			width: 100%;
			height: 100%;
			display: block;
			box-sizing: border-box;
			.logo-login {
				width: 100%;
				height: 90px;
				background-color: #000;
				position: relative;
				p {
					width: 138px;
					height: 60px;
					position: absolute;
					top: 15px;
					left: 50%;
					margin: 0px;
					margin-left: -69px;
					background-image: url('../assets/images/logo-login.png');
					background-position: left top;
				}
			}
			.input-item {
				width: 296px;
				margin: 10px auto 0;
				position: relative;
				.mu-text-field {
					width: 296px;
				}
				.andylogin {
					// color: #fff !important;
				}
				.forget {
					display: block;
					position: absolute;
					right: 0px;
					top: 3px;
					color: #2196f3;
					cursor: pointer;
				}
			}
			.submit {
				display: block;
				width: 296px;
				height: 40px;
				line-height: 40px;
				color: #fff;
				background-color: #ff5252;
				text-align: center;
				margin: 20px auto 20px;
				border-radius: 4px;
				letter-spacing: 3px;
				-webkit-transition: all 500ms;
				transition: all 500ms;
				&.active {
					color: rgba(0,0,0,.38);
					background-color: rgba(0,0,0,.12);
				}
			}
			.mu-checkbox-icon {
				margin-right: 6px;
			}
		}
	}
}
</style>