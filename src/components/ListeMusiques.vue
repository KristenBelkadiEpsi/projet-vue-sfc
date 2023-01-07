<template>
  <ul>
    <div class="elementListe" v-for="musique in listeDesMusiques">
      <li>
        titre: {{ musique.titre }}, durée: {{ musique.duree }} secondes
      </li>
     
    </div>
  </ul>
</template>
<style>
.elementListe{
    margin-bottom: 10px;
}
</style>
<script>
import axios from "axios";
export default {
  name: "ListeMusiques",
  props: {
    artisteId: String,
  },
  data() {
    return {
      listeDesMusiques: [],
    };
  },
  async mounted() {
    await this.recupererListeMusique();
  },
  methods: {
    recupererListeMusique: async function () {
      await axios.get("https://api.deezer.com/artist/27/radio").then((reponse) => {
        reponse.data.data.forEach((element) => {
          this.listeDesMusiques.push({ titre: element.title, duree: element.duration });
        });
      });
    },
  },
};
</script>
