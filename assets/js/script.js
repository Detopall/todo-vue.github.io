"use strict";

const _app = Vue.createApp({
	data() {
		return {
			data: [
				{"title": "Read book", "description": "I need to read 30 pages of a book"},
				{"title": "Watch movie", "description": "I heard that the movie 'Shot Caller' was really good."},
				{"title": "Gardening", "description": "The flowers don't look so good. I might need to work on that."},
			],
			completed: 0,
		}
	},
	methods: {
		addTodo(){
			const description = this.$refs.description;
			const title = this.$refs.title;
			this.data.push({"title": title.value, "description": description.value});

			description.value = "";
			title.value = "";
		},
		completeTodo(todo) {
			this.data = this.data.filter(t => t !== todo);
			this.completed++;
		}
	},
	computed: {
		uncompletedAmountOfTodos(){
			return this.data.length;
		}
	}
});



_app.mount("#app");