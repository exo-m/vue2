<template>
	<div class="">
		<div class="swiper_con">
			<swiper :options="swiperOption" ref="mySwiperA">
			  <!-- 幻灯内容 -->
			  <swiper-slide style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488794803179&di=ed825a0aec3fd24103317bbc3e6393d6&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F38%2F47%2F19300001391844134804474917734_950.png)"></swiper-slide>
			  <swiper-slide style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488794831460&di=0adcbe033a245eb97e9cc6353c454eed&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1112%2F29%2Fc2%2F10087294_10087294_1325133605031_mthumb.jpg)"></swiper-slide>
			  <swiper-slide style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488794850664&di=2fd70c65457dd27da389d5a45288675d&imgtype=0&src=http%3A%2F%2Fphoto.iyaxin.com%2Fattachement%2Fjpg%2Fsite2%2F20121112%2Fd4bed9e6027f120a9c1b39.jpg)"></swiper-slide>
			  <swiper-slide style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488794864087&di=9052f4570da88530ba9c52708b6c8371&imgtype=0&src=http%3A%2F%2Fpic24.nipic.com%2F20121023%2F5692504_113455189191_2.jpg)"></swiper-slide>
			  <swiper-slide style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488794882178&di=b9974648bfe197a8e2c6011a8508058e&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D394537813%2C2056335848%26fm%3D214%26gp%3D0.jpg)"></swiper-slide>
			  <!-- ... -->
			  <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
			  <!-- <div class="swiper-pagination"  slot="pagination"></div>
			  <div class="swiper-button-prev" slot="button-prev"></div>
			  <div class="swiper-button-next" slot="button-next"></div>
			  <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
			</swiper>
		</div>
		
	</div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	data() {
		return {
			swiperOption: {
		        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
		        // notNextTick: true,
		        // autoplay: 3000,
		        // // direction : 'vertical',
		        // grabCursor : true,
		        // setWrapperSize :true,
		        // autoHeight: true,
		        // pagination : '.swiper-pagination',
		        // paginationClickable :true,
		        // prevButton:'.swiper-button-prev',
		        // nextButton:'.swiper-button-next',
		        // scrollbar:'.swiper-scrollbar',
		        // mousewheelControl : true,
		        // observeParents:true,
		        // // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
		        // debugger: true,
		        // // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
		        // onTransitionStart(swiper){
		        //   console.log(swiper)
		        // },
		        effect : 'coverflow',
				slidesPerView: 3,
				centeredSlides: true,
				coverflow: {
		            rotate: 30,
		            stretch: 10,
		            depth: 90,
		            modifier: 2,
		            slideShadows : true
		        }
		    }
		}
	},
	computed: {
		swiper() {
			return this.$refs.mySwiperA.swiper
		}
	},
	mounted() {
		console.log(this.swiper);
	},
	components: {
	   swiper,
	   swiperSlide
	}
}
</script>
<style lang="less">
@import '../styles/common.less';
.box {
	.swiper_con {
		width: 100%;
		height: 400px;
		.swiper-container {
			width: 100%;
			height: 100%;
			.swiper-wrapper {
				height: 100%;
				.swiper-slide {
					line-height: 400px;
					text-align: center;
				}
			}
		}
	}
}
</style>