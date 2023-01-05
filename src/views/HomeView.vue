<template>
  <div class="home">
    <div v-cloak id="test">
      <h1>Les styles musicaux Deezer</h1>
      <div>
        <h2>Trouve ton style préférer</h2>
      </div>
      <div id="inputStyle">
        <div v-if="listGenre.length > 0" >
          <ul>
            <li v-for="genre in listGenre">
              {{genre.name}}
            <li><img :src="genre.picture" alt="img" /></li>
            </li>
        </ul>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

const apiURL = "https://api.deezer.com/genre/";
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  
  data() {
          return {
            listGenre: [],
            genre: null,
          };
        },
        
        created: function() {
          this.fetchData();
        },

        watch: {
          currentGenre: "fetchData",
        },

        methods: {
          
          fetchData: function () {
            const self = this;
            axios
              .get(apiURL)
              .then(function (response) {
                console.log(response.data, "dataAsked");
                self.listGenre = response.data.data;
              })
              .catch(function (error) {
                console.log(error);
              });
          },
        },
      }

</script>
<style>
li{
  list-style-type: none;
}
</style>
