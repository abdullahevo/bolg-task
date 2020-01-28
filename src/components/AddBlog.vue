<template>
	<div class="add-blog">
		<h2>Add a New Blog Post</h2>
		<form>
			<label>Title:</label>
			<input class="form-control" type="text" v-model="title" required />

			<label>Description:</label>
			<textarea class="form-control" v-model="description"></textarea>

			<button class="btn btn-dark" @click.prevent="addPost()">Add</button>
		</form>

		<div class="card-header my-4">
			<h3>Blog Preview</h3>
			<p>Title: {{ title }}</p>
			<p>Description :</p>
			<p>{{ description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AddBlog',
		data() {
			return {
				title: '',
				description: ''
			};
		},
		computed: {
			blog() {
				console.log(this.$store.state.blog);
				return this.$store.state.blog;
			}
		},
		methods: {
			addPost() {
				this.$store.dispatch('addpost', [this.title, this.description]);
				this.title = '';
				this.description = '';
			}
		}
	};
</script>

<style scoped>
	.add-blog {
		box-sizing: border-box;
		max-width: 600px;
		margin: 20px auto;
		padding: 20px 0;
	}
	.add-blog label {
		display: block;
		margin: 20px 0 10px;
	}
	.add-blog input[type='text'],
	.add-blog textarea {
		display: inline-block;
		width: 90%;
		padding: 8px;
	}
	.add-blog button {
		display: inline-block;
		padding: 10px 15px;
		margin-top: 20px;
	}
	.blog-preview {
		background: #f5f6f7;
		margin: 30px auto 10px;
		padding: 15px;
	}
	.blog-preview h3,
	.blog-preview p {
		text-align: left;
		color: #444;
	}
	.check-boxes input {
		display: inline-block;
		margin-right: 10px;
	}
	.check-boxes label {
		display: inline-block;
	}
</style>
