<template>
	<div class="homeWrap">
		<slider-nav @flag="openflag"></slider-nav>
		<div class="box">
			<transition>
				<router-view></router-view>
			</transition>
		</div>
		<ul id="menu" class="mfb-component--br mfb-fountain" data-mfb-toggle="hover">
	      <li class="mfb-component__wrap">
	        <a class="mfb-component__button--main">
	        	<i class="fa fa-cog"></i>
	        </a>
	        <ul class="mfb-component__list">
	          <li>
	            <a @click="changeTheme('light')" data-value="light" data-mfb-label="theme one" class="mfb-component__button--child">
	              1
	            </a>	
	          </li>
	          <li>
	            <a @click="changeTheme('dark')" data-value="dark" data-mfb-label="theme two" class="mfb-component__button--child">
	              2
	            </a>
	          </li>
	          <li>
	            <a @click="changeTheme('carbon')" data-value="carbon" data-mfb-label="theme three" class="mfb-component__button--child">
	              3
	            </a>
	          </li>
	          <li>
	            <a @click="changeTheme('teal')" data-value="teal" data-mfb-label="theme four" class="mfb-component__button--child">
	              4
	            </a>
	          </li>
	        </ul>
	      </li>
	    </ul>
	</div>
</template>

<script>
import sliderNav from '../components/sliderNav.vue'
import '../lib/mfb.js'
import light from 'raw-loader!muse-ui/dist/theme-default.css'
import dark from 'raw-loader!muse-ui/dist/theme-dark.css'
import carbon from 'raw-loader!muse-ui/dist/theme-carbon.css'
import teal from 'raw-loader!muse-ui/dist/theme-teal.css'

export default {
	data() {
		return {
			theme: 'light',
		    themes: {
		        light,
		        dark,
		        carbon,
		        teal
		    }
		}
	},
	mounted() {
		// this.$on('openflag', function (bol) {
		  	
		// });
	},
	methods: {
		changeTheme (theme) {
	      	console.log(theme)
		    this.theme = theme;
		    const styleEl = this.getThemeStyle();
		    styleEl.innerHTML = this.themes[theme] || '';
		},
		getThemeStyle () {
		    const themeId = 'muse-theme';
		    let styleEl = document.getElementById(themeId);
		    console.log(styleEl)
		    if (styleEl) return styleEl;
		    styleEl = document.createElement('style');
		    styleEl.id = themeId;
		    document.body.appendChild(styleEl);
		    return styleEl;
		},
		openflag (bol) {
			console.log(bol)
		  	if(bol) {
		  		$('.box').addClass('active');
		  	}else {
		  		if(!$('.box').hasClass('active')) {
		  			return;
		  		}
		  		$('.box').removeClass('active');
		  	}
		}
	},
	components: {
		sliderNav
	}
}
</script>

<style lang="less" scoped>
@import '../styles/common.less';
@import '../styles/mfb.css';
#menu {
	z-index: 5000;
	li {
		a {
			line-height: 56px;
			text-align: center;
			color: #fff;
			.fa-cog {
				position: absolute;
				left: 50%;
				top: 50%;
				margin: -13px 0 0 -11px;
				font-size: 26px;
			}
		}
	}
}
</style>