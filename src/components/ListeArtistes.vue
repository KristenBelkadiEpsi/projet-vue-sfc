<template>
  <ul>
    <li v-for="artiste in listeDesArtistes">
      <a href="">{{ artiste.nom }}</a>
    </li>
  </ul>
</template>
<style>
li {
  margin: 5px;
}
</style>
<script>
import axios from "axios";
export default {
  name: "ListeArtistes",
  data() {
    return {
      listeDesArtistes: [],
    };
  },
  props: {
    genreId: String,
  },
  async mounted() {
    await this.recupererListeArtiste();
  },
  methods: {
    recupererListeArtiste: async function () {
      await axios.get(`https://api.deezer.com/genre/${this.genreId}/artists`).then((reponse) => {
        reponse.data.data.forEach((element) => {
          this.listeDesArtistes.push({ nom: element.name, id: element.id });
        });
      });
    },
  },
};
</script>
