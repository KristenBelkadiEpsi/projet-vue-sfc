<template>
  <div class="podcast">
    <h1> Liste des Podcasts </h1>
		<ul>
			<li v-for="genre in commits">
				je suis une vache.
			</li>
		</ul>
  </div>
</template>

<script>
	import axios from 'axios'
	const apiURL = "https://api.deezer.com/podcast";
	const config = {};
	
	Vue.createAoo({
		
		data() {
			return {
				branches: ["main", "dev"],
				currentBranch: "main",
				commits: null,
			};
		},
		created: function () {
			this.fetchDataAsync();
		},
		
		watch: {
			curentBranch: "fetchDataAsync",
		},
		
		methods: {
			fetchDataAsync: async function () {
				try {
					const response = await axios.get(apiURL + this.currentBranch, config)
					console.log(response.data)
					this.commits = response.data
				    console.log(self.commits[0].html_url);
				} catch(error) {
						console.log(error);
				}
			},
			formattedMessage: function (message) {
				const newline = message.indexOf("\n");
				return newline > 0 ? message.slice(0, newline) : message;
			},
			formattedDate: function (date) {
				return date.replace(/T|Z/g, " ");
			},
		},
	}).mount("#demo");
	
	export default {
		name: 'PodcastView'
		}
		
</script>
