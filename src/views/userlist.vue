<template>
	<div class="">
		<mu-table :fixedFooter="fixedFooter" :fixedHeader="fixedHeader" :height="height" :enableSelectAll="enableSelectAll" :multiSelectable="multiSelectable" :selectable="selectable" :showCheckbox="showCheckbox">
		    <mu-thead slot="header">
		      <mu-tr>
		        <mu-th tooltip="">序号</mu-th>
		        <mu-th tooltip="">名字</mu-th>
		        <mu-th tooltip="">职位</mu-th>
		        <mu-th tooltip="">绩效分</mu-th>
		      </mu-tr>
		    </mu-thead>
		    <mu-tbody>
		      <mu-tr v-for="(item,index) in tableData">
		        <mu-td>{{index + 1}}</mu-td>
		        <mu-td>{{item.name}}</mu-td>
		        <mu-td>{{item.pecial}}</mu-td>
		        <mu-td>{{item.num}}</mu-td>
		      </mu-tr>
		    </mu-tbody>
		    <mu-tfoot slot="footer">
		      <mu-tr>
		        <mu-td>ID</mu-td>
		        <mu-td>Name</mu-td>
		        <mu-td>pecial</mu-td>
		        <mu-td>num</mu-td>
		      </mu-tr>
		    </mu-tfoot>
	  	</mu-table>
	  	<div class="demo-table-settings">
		    <h3>设置</h3>
		    <mu-text-field v-model.lazy="height" label="table的高度"/><br/>
		    <mu-switch labelLeft label="固定表头" v-model="fixedHeader"/><br/>
		    <mu-switch labelLeft label="固定表尾" v-model="fixedFooter"/><br/>
		    <mu-switch labelLeft label="可以被选择" v-model="selectable"/><br/>
		    <mu-switch labelLeft label="可以多选" v-model="multiSelectable"/><br/>
		    <mu-switch labelLeft label="可以选择全部" v-model="enableSelectAll"/><br/>
		    <mu-switch labelLeft label="显示复选框" v-model="showCheckbox"/><br/>
	  	</div>
	</div>
</template>
<script>
	export default {
		data () {
		    return {
		      	tableData: [
			        {
			          name: '林喆',
			          pecial: '产品经理',
			          num: 30
			        },
			        {
			          name: '刘慧',
			          pecial: '产品经理',
			          num: 30
			        },
			        {
			          name: '王金平',
			          pecial: '项目经理',
			          num: 30
			        },
			        {
			          name: '周颖',
			          pecial: '后台主管',
			          num: 30
			        },
			        {
			          name: '郝龙攀',
			          pecial: '接口主管',
			          num: 30
			        },
			        {
			          name: '王维',
			          pecial: '测试主管',
			          num: 30
			        },
			        {
			          name: '郑艳艳',
			          pecial: '测试专员',
			          num: 30
			        },
			        {
			          name: '彭萌',
			          pecial: 'UI设计师',
			          num: 30
			        },
			        {
			          name: '邵祖杰',
			          pecial: 'web前端开发工程师',
			          num: 30
			        },
			        {
			          name: '纪志军',
			          pecial: 'web前端开发工程师',
			          num: 30
			        },
			        {
			          name: '俞磊',
			          pecial: 'web前端开发工程师',
			          num: 30
			        },
			        {
			          name: '彭伟',
			          pecial: '后台开发工程师',
			          num: 30
			        },
			        {
			          name: '陈辉',
			          pecial: '后台开发工程师',
			          num: 30
			        },
			        {
			          name: '徐军',
			          pecial: 'IOS开发工程师',
			          num: 30
			        },
			        {
			          name: '王庚',
			          pecial: 'Andorid开发工程师',
			          num: 30
			        },
			    ],
			    fixedHeader: true,
			    fixedFooter: true,
			    selectable: true,
			    multiSelectable: true,
			    enableSelectAll: false,
			    showCheckbox: true,
			    height: '500px'
		    }
		}
	}
</script>
<style lang="less">
@import '../styles/common.less';
.demo-table-settings{
  width: 100%;
  overflow: hidden;
  // margin: 20px auto 0px;
  >div, >label {
  	display: inline-block !important;
  	float: left !important;
  }
}
</style>