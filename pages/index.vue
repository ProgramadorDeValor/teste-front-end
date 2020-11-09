<template>
  <v-layout column wrap align="center" justify="center">
    <v-row justify="center" :align="alignment" class="mx-2">
      <v-col
        cols="12"
        md="8"
        lg="4"
        justify="center"
        align="center"
        fill-height
      >
        <search-bar align="center" class="mx-2" @result="showResults" />
      </v-col>
    </v-row>
    <v-row v-show="hide" class="mx-2 mt-4">
      <v-col
        v-for="item in items"
        v-show="hide"
        :key="item.etag"
        cols="12"
        sm="6"
        md="4"
        justify="center"
        align="center"
      >
        <youtube-video-card :item="item" />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SearchBar from '../components/SearchBar'
import YoutubeVideoCard from '~/components/YoutubeVideoCard.vue'
import { Youtube } from '~/types/Youtube/Interfaces/Youtube'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
@Component
export default class Index extends Vue {
  components: {
    SearchBar,
    YoutubeVideoCard
  }

  // Data
  alignment: string = 'center'
  hide:boolean = false
  items:array = []

  // Methods
  showResults (data) {
    this.items = data.items
    this.hide = true
    this.alignment = 'start'
  }
}
</script>
