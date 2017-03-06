<template>
	<div class="homeWrap">
		<slider-nav></slider-nav>
		<transition name="fade">
			<router-view></router-view>
		</transition>	
	</div>
</template>

<script>
import sliderNav from '../components/sliderNav.vue'

export default {
	data() {
		return {
			vname: '',
			vpass: ''
		}
	},
	methods: {
		
	},
	components: {
		sliderNav
	}
}
</script>

<style lang="less" scoped>

</style>