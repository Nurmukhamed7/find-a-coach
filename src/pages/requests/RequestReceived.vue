<template>
	<section>
		<base-card>
			<header>
				<h2>Requests Received</h2>
			</header>
			<base-spinner v-if="isLoading"></base-spinner>
			<ul v-else-if="hasRequests && !isLoading">
				<request-item
					v-for="req in receivedRequests"
					:key="req.id"
					:email="req.userEmail"
					:message="req.message"
				></request-item>
			</ul>
			<h3 v-else>You haven't any requests yet!</h3>
		</base-card>
	</section>
</template>

<script>
import RequestItem from '@/components/requests/RequestItem.vue'
export default {
	components: {
		RequestItem,
	},
	data() {
		return {
			isLoading: false,
		}
	},
	computed: {
		receivedRequests() {
			// console.log(this.$store.getters['requests/requests'])
			return this.$store.getters['requests/requests']
		},
		hasRequests() {
			return this.$store.getters['requests/hasRequests']
		},
	},
	created() {
		this.loadRequests()
	},
	methods: {
		async loadRequests() {
			this.isLoading = true
			await this.$store.dispatch('requests/fetchRequests')
			this.isLoading = false
		},
	},
}
</script>

<style scoped>
header {
	text-align: center;
}

ul {
	list-style: none;
	margin: 2rem auto;
	padding: 0;
	max-width: 30rem;
}

h3 {
	text-align: center;
}
</style>
