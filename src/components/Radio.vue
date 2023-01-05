<template>
      <div v-cloak id="test">
        <h1>Les differentes radio de Deezer</h1>
        <div id="inputRadio">
          <div v-if="listRadio.length > 0" >
            <ul>
              <li v-for="radio in listRadio">
                {{radio.title}}
              <li><img :src="radio.picture" alt="img" /></li>
              </li>
          </ul>
        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  const apiURL = "https://api.deezer.com/radio/";
  export default {
    name: 'ListeRadio',
    
    data() {
            return {
              listRadio: [],
              radio: null,
            };
          },
          
          created: function() {
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
  li{
    list-style-type: none;
  }
  </style>
  