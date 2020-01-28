<template>
	<div class="blog-list">
		<div v-for="(blogItem, i) in blog" :key="i" class="single-blog">
			<router-link
				class="
			text-decoration-none"
				:to="'/blog/' + blog.id"
			>
				<h3>{{ blogItem.title }}</h3>
			</router-link>
			<p>{{ blogItem.description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ViewBlogs',

		data() {
			return {
				// blogs: [],
			};
		},
		methods: {},
		computed: {
			blog() {
				console.log(this.$store.state.blog);
				return this.$store.state.blog;
			}
		}
	};
</script>

<style scoped>
	.blog-list {
		position: relative;
		box-sizing: border-box;
		max-width: 800px;
		margin: 20px auto;
		padding: 20px 0;
	}
	.single-blog {
		background: #f5f6f7;
		margin: 30px auto 10px;
		padding: 15px;
	}
	.btns {
		position: absolute;
		right: 0;
		top: 45px;
	}
</style>
