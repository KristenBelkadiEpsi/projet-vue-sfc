<template>
  <div v-cloak id="test">
    <h1>Les differentes radio de Deezer</h1>
    <div id="inputRadio">

      <ul class=grid>
        <li v-for="radio in listRadio">
          <label>{{ radio.title }}</label>
        <li> <img :src="radio.picture" alt="img" /></li>
        </li>
      </ul>


    </div>
  </div>
</template>

<style>
ul.grid {
  list-style: none;
  width: 800px;
  margin: 0 auto;
  text-align: top;
}

ul.grid li {
  padding: 2px;
  float: lcenter;
}
</style>

<script>
import axios from 'axios'

const apiURL = "https://api.deezer.com/radio/";
export default {
  name: 'ListeRadio',

  data() {
    return {
      layout: "grid",

      listRadio: [],
      radio: null,
    };
  },

  created: function () {
    this.fetchData();
  },

  watch: {
    currentRadio: "fetchData",
  },

  methods: {

    fetchData: function () {
      const self = this;
      axios
        .get(apiURL)
        .then(function (response) {
          console.log(response.data, "dataAsked");
          self.listRadio = response.data.data;
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
