<template>
	<div class="single-blog">
		<h2>Single Blog Post</h2>
		<div class="blog-content">
			<h3>{{ blog[0].title }}</h3>
			<p>{{ blog[0].description }}</p>
		</div>
		<!-- Button trigger modal -->
		<button
			type="button"
			class="btn btn-primary"
			data-toggle="modal"
			data-target="#exampleModal"
		>
			ADD COMMENT
		</button>

		<!-- Modal -->
		<div
			class="modal fade"
			id="exampleModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">ADD COMMENT</h5>
					</div>
					<div class="modal-body">
						<textarea
							class="form-control"
							@change="removeText()"
							v-model="comment"
						>
						</textarea>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
						>
							Close
						</button>
						<button
							type="button"
							@click="addComment(comment)"
							class="btn btn-primary"
						>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="card-header mt-4" v-for="(comment, i) in comments" :key="i">
			<p class="newText m-2">{{ comment }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SingleBlog',
		data() {
			return {
				id: this.$route.params.id,
				comments: [],
				comment: ''
				// blog: {}
			};
		},
		created() {
			// this.removeText();
		},
		computed: {
			blog() {
				console.log(this.$store.state.blog);
				return this.$store.state.blog;
			}
		},
		methods: {
			addComment(com) {
				this.comments.push(com);
				this.comment = '';
				if (this.comments.length > 4) {
					alert('YOU ONLY CAN ADD 2 COMMENTS');
					this.comments.pop(com);
				}
				// console.log(this.comments.length);
			},

			removeText() {
				let com = this.comments;
				com.map((map) => {
					let originalText = ['xmen', 'tester', 'flash'];
					let original = ['xmen', 'tester', 'flash'];
					for (var i = 0; i < originalText.length; i++) {
						if (map.includes(originalText[i])) {
							let newTexet = originalText[i].replace(
								originalText[i],
								'this word is not allowed '
							);
							let newT = document.querySelectorAll('.newText');
							newT.forEach((element) => {
								element.textContent = newTexet;
							});
						}
					}
				});
			}
		}
	};
</script>

<style scoped>
	.single-blog {
		max-width: 800px;
		margin: 20px auto;
		padding: 20px;
	}
	.blog-content {
		background: #f5f6f7;
		margin: 20px auto;
		padding: 20px;
	}
</style>
