<template>
  <div class="home">
    <div v-cloak id="test">
      <h1>Les styles musicaux Deezer</h1>
      <div>
        <h2>Cherche des artistes de ton style préféré</h2>
      </div>
      <div id="inputStyle">

        <ul>
          <li v-for="genre in listGenre">
            <router-link :to="'/ListeArtistes/' + genre.id">
              {{ genre.name }}
          <li><img :src="genre.picture" alt="img" /></li>
          </router-link>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios'


export default {
  name: 'HomeView',
  data() {
    return {
      listGenre: [],
      genre: null,
      apiURL: "https://api.deezer.com/genre"
    };
  },
  created: function () {
    this.fetchData();
  },

  watch: {
    currentGenre: "fetchData",
  },

  methods: {

    fetchData: function () {
      const self = this;
      axios
        .get(this.apiURL)
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
li {
  list-style-type: none;
}
</style>

