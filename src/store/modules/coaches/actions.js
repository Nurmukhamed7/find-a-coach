export default {
	async registerCoach(context, data) {
		const userId = context.rootGetters.userId
		const coachData = {
			firstName: data.first,
			lastName: data.last,
			areas: data.areas,
			description: data.desc,
			hourlyRate: data.rate,
		}

		const response = await fetch(
			`https://vue-http-demo-58928-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
			{
				method: 'PUT',
				body: JSON.stringify(coachData),
			}
		)
		// const responseData = await response.json()

		if (!response.ok) {
			// error
		}

		context.commit('registerCoach', {
			...coachData,
			id: userId,
		})
	},
	async loadCoaches(context) {
		const response = await fetch(
			'https://vue-http-demo-58928-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
		)
		const responseData = await response.json()

		if (!response.ok) {
			// error
		}

		const coaches = []

		for (const key in responseData) {
			const coach = {
				id: key,
				firstName: responseData[key].firstName,
				lastName: responseData[key].lastName,
				areas: responseData[key].areas,
				description: responseData[key].lastName,
				hourlyRate: responseData[key].hourlyRate,
			}
			console.log(responseData[key])
			coaches.push(coach)
		}

		context.commit('setCoaches', coaches)
	},
}
