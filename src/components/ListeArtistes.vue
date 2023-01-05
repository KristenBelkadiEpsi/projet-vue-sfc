<template>
  <table>
    <tr v-for="artiste in listeDesArtistes">
      <td>{{ artiste.name }}</td>
      <td>{{ artiste.id }}</td>
    </tr>
  </table>
</template>
<script>
export default {
  name: "ListeArtistes",
  props: {
    listeDesArtistes: Array,
  },
};
</script>
