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
        <search-bar
          align="center"
          class="mx-2"
          @result="fromSearchBar"
          @cleared="clearData"
        />
      </v-col>
    </v-row>
    <v-row v-show="show" class="mx-2 mt-4">
      <v-col
        v-for="item in items"
        v-show="show"
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
    <v-row v-show="showSkeleton">
      <v-col
        v-for="index in 3"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-skeleton-loader type="card-avatar, article, actions" loading max-height="500" />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import SearchBar from '~/components/SearchBar.vue'
import YoutubeVideoCard from '~/components/YoutubeVideoCard.vue'
import { Item } from '~/types/Youtube/Interfaces/Youtube'
import { YoutubeResponseApi } from '~/types/Youtube/Classes/YoutubeResponseApi'
import youtubeapi from '~/store/youtubeapi'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'
@Component({
  components: {
    SearchBar,
    YoutubeVideoCard
  }
})
export default class Index extends Vue {
  // Data
  alignment: string = 'center'
  show: boolean = false
  items: Item[] = []
  apiData: YoutubeResponseApi | undefined
  youtubeApi = getModule(youtubeapi, this.$store)
  bottom: boolean = false
  showSkeleton: boolean = false
  nextPageToken: string = ''

  // Methods
  clearData (clear: boolean) {
    if (clear) {
      this.items = []
      this.show = false
      this.alignment = 'center'
    }
  }

  fromSearchBar (data: YoutubeResponseApi) {
    // ToDo: Log Erro
    if (!data.success || !data.YoutubeData)
      return
    this.feedItems(data.YoutubeData.items, true)
    this.showResults(data)
  }

  feedItems (items: Item[], clearFirst: boolean = false) {
    if (clearFirst)
      this.items = []

    // this.items = this.items.concat(items)
    this.items = [...new Set([...this.items, ...items])]
  }

  showResults (data: YoutubeResponseApi) {
    this.apiData = data
    this.show = true
    this.alignment = 'start'
    this.nextPageToken = data.YoutubeData ? data.YoutubeData.nextPageToken : ''
  }

  bottomVisible () {
    const scrollY = window.scrollY
    const visible = document.documentElement.clientHeight
    const pageHeight = document.documentElement.scrollHeight
    const bottomOfPage = visible + scrollY >= pageHeight
    return bottomOfPage || pageHeight < visible
  }

  @Watch('bottom')
  onBottom (bottom: boolean) {
    if (bottom && this.show)
      this.getNextPage()
  }

  created () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  }

  getNextPage () {
    if (!this.apiData?.success || !this.apiData.YoutubeData || this.showSkeleton)
      return

    if (this.nextPageToken === '')
      return this.reachedYoutubeEnd()

    this.showSkeleton = true
    this.youtubeApi.queryNextPage([this.apiData.queryText, this.nextPageToken])
      .then((res) => {
        if (!res.success || !res.YoutubeData)
          return
        this.feedItems(res.YoutubeData.items)
        this.showResults(res)
      })
      .catch((err) => {
        this.youtubeError(err)
      })
      .finally(() => {
        this.showSkeleton = false
      })
  }

  reachedYoutubeEnd () {
    // Todo: Implement
  }

  youtubeError (error: any) {
    // Todo: Implement
    console.log(error)
  }
}
</script>
