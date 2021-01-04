<template>
	<div>
		<button @click="goDetail">跳转到详情</button>
		<button @click="goBack">上一页</button>
		<button @click="goNext">下一页</button>
		查询字符串列表：
		<ul>
			<li v-for="(hero, index) in heros" :key="index">
			    {{hero.name}}
				<router-link :to="{name: 'detail', query: {id: index}}">查看</router-link>
			</li>
		</ul>
		path列表：
		<ul>
			<li v-for="(hero, index) in heros" :key="index">
				{{hero.name}}
				<router-link :to="{name: 'detail', params: {name: index}}">查看</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                heros: [{
                    name: '李白'
                }, {
                    name: '王昭君'
                }]
            }
        },
	    methods: {
            goDetail() {
                this.$router.push('/detail');
            },
		    goBack() {
                this.$router.go(-1);
		    },
		    goNext() {
                this.$router.go(1);
		    }
	    }
    }
</script>

<style scoped>

</style>