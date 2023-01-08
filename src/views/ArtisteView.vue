<template>
    <div class="artiste">
        <ul>
            <li>
                {{ artiste.nom }}
            </li>
            <li>
                <img :src="artiste.url_image" alt="img"/>
            </li>
            <li>
                
                nombre de fans: {{ artiste.nombreFan }}
            </li>
            <li>
                nombre d'album: {{artiste.nombreAlbum }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "ArtisteView",
    data() {
        return {
            artiste: Object,
        };
    },
    async mounted() {
        await this.recupererArtiste();
    },
    methods: {
        recupererArtiste: async function () {
            await axios.get(`https://api.deezer.com/artist/${this.$route.params.id}`).then((reponse) => {
                this.artiste = { nom: reponse.data.name, url_image: reponse.data.picture, nombreFan: reponse.data.nb_fan, nombreAlbum: reponse.data.nb_album }
            });
        },
    },
};
</script>