<template>
	<div class="">
		{{(pay_status_code == '5' || pay_status_code == '6') ? '退款':'付款'}}
	</div>
</template>
<script>
	export default {
		data() {
			return {
				pay_status_code: '8'
			}
		}
	}
</script>
<style lang="less">
@import '../styles/common.less';
</style>