<template>
  <v-text-field
    v-model="search"
    clearable
    flat
    solo-inverted
    hide-details
    append-icon="mdi-magnify"
    label="Digite para Pesquisar um video"
    @click:clear="emitClear"
  />
</template>
<style scoped>

</style>
<script lang="ts">
// import Vue from 'vue'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import youtubeapi from '../store/youtubeapi'
import { YoutubeResponseApi } from '~/types/Youtube/Classes/YoutubeResponseApi'

@Component
export default class SearchBar extends Vue {
  // Data
  youtubeApi = getModule(youtubeapi, this.$store)
  youtubeData: YoutubeResponseApi|null = null
  isLoading: boolean = false
  search: string = ''
  timeoutVal: any = null
  timeToWaitBeforeSearch: number = 700

  // Methods
  async executeQuery (text: string) {
    if (!text || text.trim().length < 1)
      return

    this.isLoading = true
    this.youtubeApi.queryByTextApiData(text)
      .then((res) => {
        if (res.success) {
          this.$emit('success', true)
          this.$emit('result', res)
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch((e) => {
        this.$emit('error', true)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  emitClear () {
    this.$emit('cleared', true)
  }

  @Watch('search')
  onTypeSearch (val: string) {
    if (this.timeoutVal)
      clearTimeout(this.timeoutVal)

    this.timeoutVal = setTimeout(() => {
      this.executeQuery(val)
    }, this.timeToWaitBeforeSearch)
  }
}
</script>
