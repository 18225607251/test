<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click='sendSchoolName'>点我显示学校名</button>
	</div>
</template>
 
<script>
	export default {
		name:'School',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods: {
			sendSchoolName(){
				this.getSchoolName(this.name);
			}
		},
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>