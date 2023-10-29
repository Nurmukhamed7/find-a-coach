<template>
	<section>
		<base-card>
			<h2>Register as a coach now!</h2>
			<coach-form @save-data="savaData"></coach-form>
		</base-card>
	</section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'
export default {
	components: {
		CoachForm,
	},
	methods: {
		savaData(data) {
			console.log('родитель', data)
			this.$store.dispatch('coaches/registerCoach', data)
			this.$router.replace('/coaches')
		},
	},
}
</script>

<style lang="scss" scoped></style>
