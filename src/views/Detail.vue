<template>
	<div>
		<button @click="goBack">上一页</button>
		详情
		id-->{{id}}<br/>
		name-->{{name}}
	</div>
</template>

<script>
    export default {
        name: "Detail",
	    data() {
            return {
                id: '',
	            name: ''
            }
	    },// DOM还未生成
	    created() {
            // 获取路由参数
		    // vue-router挂载两个对象属性
		    //  $route(信息数据)  $router(功能函数)
		    console.log(this.$route.query);
		    console.log(this.$route.params);
		    this.id = this.$route.query.id;
		    this.name = this.$route.params.name;
        },// 已经将数据装载到页面上去了，DOM已经生成
	    mounted() {
     
	    },
	    methods: {
            goBack() {
                this.$router.go(-1);
            }
	    }
    }
</script>

<style scoped>

</style>