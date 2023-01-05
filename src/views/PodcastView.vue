<template>
  <div class="listPodcast">
    <h1> Liste des Podcasts </h1>
		<ul>
			<li v-for="podcast in listPodcast">
				{{podcast.name}} (id: {{podcast.id}})
				<li>
					<img :src="podcast.picture" alt="img" />
				</li>
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
