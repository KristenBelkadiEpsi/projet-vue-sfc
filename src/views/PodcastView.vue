<template>
  <div class="podcast">
    <h1> Liste des Podcasts </h1>
		<ul>
			<li v-for="podcast in listPodcast">
				{{podcast.name}} <a> (id: {{podcast.id}}) </a>
				<br>
				<li v-if="podcast.picture_medium !== null" >
					<img :src="podcast.picture_medium" alt="img" />
				</li>
				<br>
			</li>
			
		</ul>	
  </div>
</template>

<script>
	import axios from 'axios'
	const apiURL = "https://api.deezer.com/podcast/";
	
	export default {
	
		name: 'PodcastView',
	
		data() {
          return {
            listPodcast: [],
            podcast: null,
          };
        },
        
        created: function() {
          this.fetchData();
        },
        watch: {
          currentPodcast: "fetchData",
        },
        methods: {
          
          fetchData: function () {
            const self = this;
            axios
              .get(apiURL)
              .then(function (response) {
                console.log(response.data, "dataAsked");
                self.listPodcast = response.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        },
      }
		
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #c3c4c5;
}
</style>
