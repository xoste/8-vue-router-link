<template>
	<div>
		<div class="header">头部
		
		</div>
		<router-view class="body"></router-view>
		<button @click="goList">跳转到列表</button>
		<button @click="testNav">测试导航</button>
		
		<div class="footer">底部</div>
	</div>
</template>

<script>
	export default {
	    data() {
	        return {
	        
	        }
	    },
		methods: {
	        goList() {
	            this.$router.push('/list');
	        },
			testNav() {
	            this.$router.push({
		            name: 'list',
		            query: {
		                id: 1,
			            name: 2
		            }
	            });
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 5rem;
		background-color: orangered;
	}
	.body {
		height: 5rem;
		background-color: cyan;
	}
	.footer {
		height: 5rem;
		background-color: lightskyblue;
	}
</style>