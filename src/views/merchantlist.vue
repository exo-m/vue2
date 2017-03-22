<template>
	<div class="">
		<mobile-tear-sheet>
		  <mu-list>
		    <mu-sub-header>本周TOP5</mu-sub-header>
		    <mu-list-item title="纪志军">
		      <mu-avatar :src="avatar1" slot="leftAvatar"/>
		      <mu-icon value="star" color="#FF9800" slot="right"/>
		    </mu-list-item>
		    <mu-list-item title="邵祖杰">
		      <mu-avatar :src="avatar2" slot="leftAvatar"/>
		      <mu-icon value="star" color="#FF9800" slot="right"/>
		    </mu-list-item>
		    <mu-list-item title="俞磊">
		      <mu-avatar :src="avatar3" slot="leftAvatar"/>
		      <mu-icon value="star" color="#FF9800" slot="right"/>
		    </mu-list-item>
		    <mu-list-item title="王金平">
		      <mu-avatar :src="avatar4" slot="leftAvatar"/>
		      <mu-icon value="star_half" color="#FF9800" slot="right"/>
		    </mu-list-item>
		    <mu-list-item title="彭伟">
		      <mu-avatar :src="avatar5" slot="leftAvatar"/>
		      <mu-icon value="star_half" color="#FF9800" slot="right"/>
		    </mu-list-item>
		  </mu-list>
		  <mu-divider/>
		  <mu-list>
		    <mu-sub-header>新晋成员</mu-sub-header>
		    <mu-list-item title="贺攀">
		      <mu-avatar :src="avatar6" slot="leftAvatar"/>
		      <mu-icon value="whatshot" color="#F44336" slot="right"/>
		    </mu-list-item>
		    <mu-list-item title="余中伟">
		      <mu-avatar :src="avatar7" slot="leftAvatar"/>
		      <mu-icon value="whatshot" color="#F44336" slot="right"/>
		    </mu-list-item>
		  </mu-list>
		</mobile-tear-sheet>
	</div>
</template>
<script>
import mobileTearSheet from '../components/mobileTearSheet.vue'
export default {
	data () {
	    return {
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
		'mobile-tear-sheet': mobileTearSheet
	}
}
</script>
<style lang="less">
@import '../styles/common.less';
</style>