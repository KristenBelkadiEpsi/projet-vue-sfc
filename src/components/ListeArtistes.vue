<template>
  <table>
    <tr v-for="artiste in listeDesArtistes">
      <td>{{ artiste.nom }}</td>
      <td>{{ artiste.id }}</td>
    </tr>
  </table>
</template>
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
    genre: Number,
  },
  mounted() {},
  methods: {
    recupererListeArtiste: async function () {
      await axios.get(`https://api.deezer.com/genre/${genre}/artists`).then((reponse) => {
        reponse.data.data.forEach((element) => {
          this.listeDesArtistes.push({ nom: element.name, id: element.id });
        });
      });
    },
  },
};
</script>
