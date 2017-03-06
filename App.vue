<template>
	<div class="container">
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="less">
@import './src/styles/common.less';
</style>