<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
		<button @click="sendStudentName">
			点我显示学生姓名
		</button>
		<button @click="unbind">解绑</button>
	</div>
</template>
 
<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods:{
                sendStudentName(){
					// 自定义事件名，返回值
					this.$emit('gsn',this.name)
				},
				unbind(){
					this.$off('gsn')
				}
		}
	}
</script>

<style lang="less" scoped>
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
