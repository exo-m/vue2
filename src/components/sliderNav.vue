<template>
	<div class="slideBar">
		<!-- <mu-appbar :title="title" class="andybanner">
			<mu-icon-button icon='menu' slot="left" @click="toggle()" />
		  	<mu-flat-button color="white" label="Sign out" slot="right"/>
		  	<mu-badge content="10" class="demo-icon-badge" circle secondary>
			    <mu-icon value="notifications"/>
			</mu-badge>
			<mu-avatar slot="right" :src="myron"/>
		</mu-appbar> -->
		<div class="bannerandy">
			<!-- <i class="material-icons andy-icon" @click="toggle()">menu</i> -->
			
			<i class="fa fa-bars andy-icon" @click="toggle()"></i>
			<div class="lcsw"></div>
			<!-- <mu-icon-button class="andy-icon" icon='menu' slot="left" @click="toggle()" /> -->
			
			<div class="userinfo">
				<i class="fa fa-align-right drawerandy" @click="toggleandy()" ></i>
				<div class="notice">
					<i class="fa fa-bell andy-bell"><span class="con">26</span></i>
				</div>
				<div class="userinfoname">
					<mu-avatar :src="myron"/>
					<span class="name">andy</span>
				</div>
				
			</div>
			<div class="searchandy">
				<i class="fa fa-search andysearch" @click="showsearch"></i>
				<div class="searchwrap">
					<mu-auto-complete hintText="请随便输入点啥" @input="handleInput" :dataSource="dataSource" @change="handlechange"" hintTextClass="hintTextClass" inputClass="inputClass" />
				</div>
			</div>
		</div>
		<!-- <el-col :span="3"> -->
			<div class="bg-menu">
			    <el-menu default-active="/index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" @select="showopen" theme="light">
			    	<el-submenu index="1">
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
				        <!-- <el-submenu index="1-4">
				          <template slot="title">选项4</template>
				          <el-menu-item index="1-4-1">选项1</el-menu-item>
				        </el-submenu> -->
			      	</el-submenu>
			      	<el-menu-item index="/index"><i class="el-icon-date"></i>统计分析</el-menu-item>
			      	<el-menu-item index="/order"><i class="el-icon-menu"></i>成员展示</el-menu-item>
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
		<!-- </el-col> -->
		
		<!-- <mu-appbar title="Title">
		  	<mu-icon-button icon='menu' slot="left"/>
		  	<mu-icon-button icon='expand_more' slot="right"/>
		</mu-appbar> -->
		
		<!-- <div class="exit-btn" @click="exit">
			<el-button type="info">退出系统</el-button>
		</div> -->
		
		<!-- <mu-paper :class="open ? 'demo-menu' : ''">
		    <mu-menu>
		      	<mu-menu-item title="统计分析" leftIcon="remove_red_eye"/>
		      	<mu-menu-item title="订单管理" leftIcon="person_add"/>
		      	<mu-menu-item title="地址管理" leftIcon="link"/>
		      	<mu-menu-item title="专题管理" leftIcon="content_copy"/>
		      	<mu-menu-item title="营销中心" leftIcon="file_download"/>
		      	<mu-menu-item title="用户列表" leftIcon="delete"/>
		      	<mu-menu-item title="权限管理" rightIcon="keyboard_arrow_right" leftIcon="check">
			    <mu-menu-item title="权限管理" rightIcon="keyboard_arrow_right" leftIcon="check">
			        <mu-menu-item title="Show Level 2" />
				        <mu-menu-item title="Grid lines" leftIcon="check" />
				        <mu-menu-item title="Page breaks" inset/>
				        <mu-menu-item title="Rules" leftIcon="check" />
			      	</mu-menu-item>
			    </mu-menu-item>
		    </mu-menu>
		</mu-paper> -->
		    <!-- <mu-raised-button label="undocked drawer" @click="toggleandy(true)"/> -->
		    
		    <mu-drawer :open="openflag" :docked="docked" @close="toggleandy()" :right="right" width="300">
			    <div class="andyrightslide">
			    	<mu-tabs :value="activeTab" @change="handleTabChange">
					    <mu-tab value="tab1" title="预览列表"/>
					    <mu-tab value="tab2" title="消息通知"/>
					</mu-tabs>
					<div v-if="activeTab === 'tab2'">
					    <mu-list>
					    <mu-sub-header>最近聊天记录</mu-sub-header>
					    <mu-list-item title="Mike Li">
					      <mu-avatar :src="avatar1" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					    <mu-list-item title="Maco Mai">
					      <mu-avatar :src="avatar2" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					    <mu-list-item title="Alex Qin">
					      <mu-avatar :src="avatar3" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					    <mu-list-item title="Allen Qun">
					      <mu-avatar :src="avatar4" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					    <mu-list-item title="Myron Liu">
					      <mu-avatar :src="avatar7" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					  </mu-list>
					  <mu-divider/>
					  <mu-list>
					    <mu-sub-header>历史聊天记录</mu-sub-header>
					    <mu-list-item title="Gaia Zhou">
					      <mu-avatar :src="avatar5" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					    <mu-list-item title="Miller Wang">
					      <mu-avatar :src="avatar6" slot="leftAvatar"/>
					      <i class="fa fa-comments andynotice"></i>
					    </mu-list-item>
					  </mu-list>
					</div>
					<div v-if="activeTab === 'tab1'">
					    <mu-list>
					    <mu-sub-header>今天</mu-sub-header>
					    <mu-list-item title="这个周末一起吃饭么?">
					      <mu-avatar :src="avatar1" slot="leftAvatar"/>
					      <span slot="describe">
					        <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
					      </span>
					      <!-- <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
					        <mu-menu-item title="回复" />
					        <mu-menu-item title="标记" />
					        <mu-menu-item title="删除" />
					      </mu-icon-menu> -->
					    </mu-list-item>
					    <mu-divider inset/>
					    <mu-list-item title="Alex Qin">
					      <mu-avatar :src="avatar2" slot="leftAvatar"/>
					      <span slot="describe">
					        <span style="color: rgba(0, 0, 0, .87)">看电影啊</span> <br/>
					        我们去看电影，最近有部烂片上映，又有吐槽的了
					      </span>
					      <!-- <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
					        <mu-menu-item title="回复" />
					        <mu-menu-item title="标记" />
					        <mu-menu-item title="删除" />
					      </mu-icon-menu> -->
					    </mu-list-item>
					    <mu-divider inset/>
					    <mu-list-item title="LOL">
					      <mu-avatar :src="avatar3" slot="leftAvatar"/>
					      <span slot="describe">
					        <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
					        周末一起 LOL
					      </span>
					      <!-- <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
					        <mu-menu-item title="回复" />
					        <mu-menu-item title="标记" />
					        <mu-menu-item title="删除" />
					      </mu-icon-menu> -->
					    </mu-list-item>
					    <mu-divider inset/>
					    <mu-list-item title="Myron Liu">
					      <mu-avatar :src="avatar7" slot="leftAvatar"/>
					      <span slot="describe">
					        <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
					      </span>
					      <!-- <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
					        <mu-menu-item title="回复" />
					        <mu-menu-item title="标记" />
					        <mu-menu-item title="删除" />
					      </mu-icon-menu> -->
					    </mu-list-item>
					  </mu-list>
					</div>
			    </div>
			    
			</mu-drawer>
		<!-- <mu-drawer :open="open"  @close="toggle()" class="andydrawer">
	      <mu-list>
	        <mu-list-item title="统计分析" href="{path: '/index'}" />
	        <mu-list-item title="订单管理" href="{path: '/order'}" />
	        <mu-list-item title="地址管理" href="{path: '/address'}" />
	        <mu-list-item @click="open = false" title="Close"/>
	      </mu-list>
	    </mu-drawer> -->
	</div>
</template>

<script>

export default {
	data() {
		return {
			open: false,
			title: '利楚商务',
			openflag: false,
			docked: false,
			right: true,
			activeTab: 'tab1',
			dataSource: [],
			myron: 'src/assets/images/2.jpg',
			avatar1: 'src/assets/images/1.jpg',
	      	avatar2: 'src/assets/images/2.jpg',
	      	avatar3: 'src/assets/images/3.jpg',
	      	avatar4: 'src/assets/images/4.jpg',
	      	avatar5: 'src/assets/images/5.jpg',
	      	avatar6: 'src/assets/images/8.jpg',
	      	avatar7: 'src/assets/images/7.jpg'
		}
	},
	components: {

	},
	methods: {
      	handleOpen(key, keyPath) {
	        this.open = false;
		    this.$emit('flag', this.open);
      	},
      	handleClose(key, keyPath) {
        	this.open = false;
	    	this.$emit('flag', this.open);
      	},
      	exit: function() {
      		this.$router.replace("/");
      	},
      	toggle: function() {
	      	this.open = !this.open;
	      	this.$emit('flag', this.open);
	      	$('.el-submenu').removeClass('is-opened');
	      	$('.el-submenu .el-menu').hide();
	  	},
	  	toggleandy: function(flag) {
	      	this.openflag = !this.openflag;
	  	},
	  	showopen: function() {
	      	this.open = false;
	      	this.$emit('flag', this.open);
	  	},
	  	handleTabChange (val) {
	      	this.activeTab = val;
	    },
	    handlechange (val) {
	      console.log(`you choose ${val}`)
	    },
	    handleInput (val) {
	      this.dataSource = [
	        val,
	        val + val,
	        val + val + val
	      ]
	    },
	    showsearch: function() {
	    	$('.searchwrap').toggleClass('active');
	    },
    }
}
</script>

<style lang="less">
@import '../styles/common.less';
.slideBar {
	height: 100vh;
	overflow-y: auto;
	position: relative;
	.bannerandy {
		left: 0px;
		position: fixed;
		top: 0px;
		z-index: 1000;
		height: 64px;
		width: 100%;
		background-color: #474A4F;
		// background-color: #03A9F4;
		color: #fff;
		line-height: 64px;
		.andy-icon {
			font-size: 28px;
			float: left;
			width: 28px;
			height: 28px;
			margin: 18px 0 0 18px;
			cursor: pointer;
		}
		.lcsw {
			height: 30px;
			width: 136px;
			margin: 19px 16px 0px 28px;
			float: left;
			background-image: url('../assets/images/logo.png');
			background-size: cover;
		}
		.searchandy {
			float: right;
			height: 64px;
			margin-right: 30px;
			position: relative;
			.searchwrap{
				-webkit-transition: width 400ms;
				transition: width 400ms;
				width: 0px;
				overflow: hidden;
				opacity: 0;
				&.active {
					width: 256px;
					opacity: 1;
				}
				.hintTextClass {
					color: #fff !important;
				}
			}
			.andysearch {
				position: absolute;
				top: 50%;
				left: -26px;
				font-size: 20px;
				margin-top: -8px;
				cursor: pointer;
			}
		}
		.userinfo {
			float: right;
			height: 64px;
			width: 300px;
			overflow: hidden;
			.drawerandy {
				float: right;
				cursor: pointer;
				font-size: 28px;
				margin: 20px 40px 0 0;
			}
			.userinfoname {
				line-height: 64px;
				height: 64px;
				float: left;
				overflow: hidden;
				margin-left: 40px;
				.mu-avatar {
					margin: 12px 10px 0 0;
					float: left;
				}
			}
			.notice {
				height: 64px;
				float: left;
				line-height: 74px;
			}
			.andy-bell {
				font-size: 20px;
				position: relative;
				.con {
					position: absolute;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					color: #fff;
					line-height: 20px;
					text-align: center;
					display: block;
					background-color: #ff4081;
					right: -10px;
					top: -10px;
					font-size: 10px;
				}
			}
		}
	}
	.bg-menu {
		width: 210px;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 64px;
		background-color: #eef1f6;
		// background-color: #324157;
	}
	.exit-btn {
		position: absolute;
		top: 30px;
		right: 74px;
	}
	.el-submenu [class^=el-icon-], .el-menu-item [class^=el-icon-] {
		margin-right: 20px !important;
	}
	.andyrightslide {
		.andynotice {
			position: absolute;
			top: 16px;
			right: 20px;
			font-size: 22px;
			color: #757575;
		}
	}
}
.inputClass {
	color: #fff !important;
}
</style>