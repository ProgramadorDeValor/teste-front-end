<template>
  <v-card
    max-width="400"
    min-height="500"
    max-height="500"
    flat
    class="mb-2"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="itemImage"
    />
    <v-card-text class="text--primary" style="overflow-y: auto; height: 250px;">
      <h3>{{ itemTitle }}</h3>
      <v-card-subtitle class="pb-2">
        {{ itemChannel }}
      </v-card-subtitle>
      {{ itemDescription }}
    </v-card-text>
    <v-btn
      color="red"
      dark
      justify="center"
      align="center"
    >
      Detalhes do Video
    </v-btn>
  </v-card>
</template>
<style scoped>

</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YoutubeVideoCard extends Vue {
  @Prop(Object) readonly item: Object

  // Computed
  get itemTitle () {
    return this.item.snippet.title ? this.item.snippet.title : 'Sem Titulo'
  }

  get itemChannel () {
    return this.item.snippet.channelTitle ? this.item.snippet.channelTitle : 'Sem Canal'
  }

  get itemDescription () {
    return this.item.snippet.description ? this.item.snippet.description : ''
  }

  get itemImage () {
    return this.item.snippet.thumbnails.default.url ? this.item.snippet.thumbnails.high.url : ''
  }
}
</script>
