import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/axiosApi'
import { Youtube, YoutubeParams, YoutubeVideoData, YoutubeVideoParams } from '~/types/Youtube/Interfaces/Youtube'
import { YoutubeParamClass } from '~/types/Youtube/Classes/YoutubeParamClass'
import { YoutubeResponseApi } from '~/types/Youtube/Classes/YoutubeResponseApi'
import { YoutubeVideoResponseApi } from '~/types/Youtube/Classes/YoutubeVideoResponseApi'
import { YoutubeVideoParamClass } from '~/types/Youtube/Classes/YoutubeVideoParamClass'

@Module({
  name: 'youtubeapi',
  stateFactory: true,
  namespaced: true
})
export default class YoutubeapiModule extends VuexModule {
  @Action
  async sendSearchVideoToApi (params: YoutubeVideoParams): Promise<YoutubeVideoResponseApi> {
    return $axios.$get('/youtubeApi/videos', { params })
      .then((res) => {
        let result = new YoutubeVideoResponseApi(true, params.id)
        result.YoutubeVideoData = <YoutubeVideoData> res
        return result
      })
      .catch((e) => {
        let result = new YoutubeVideoResponseApi(false, params.id)
        result.erroObj = e
        result.errorMessage = e.data.errorMessage
        return result
      })
  }

  @Action
  async sendSearchDataToApi (params: YoutubeParams): Promise<YoutubeResponseApi> {
    return $axios.$get('/youtubeApi/search', { params })
      .then((res) => {
        let result = new YoutubeResponseApi(true, params.q)
        result.YoutubeData = <Youtube> res
        return result
      })
      .catch((e) => {
        let result = new YoutubeResponseApi(false, params.q)
        result.erroObj = e
        result.errorMessage = e.data.errorMessage
        return result
      })
  }

  @Action
  async queryByTextApiData (searchQuery: string, maxResults: number = 6): Promise<YoutubeResponseApi> {
    let param = new YoutubeParamClass(searchQuery)
    param.maxResults = maxResults
    return this.sendSearchDataToApi(param)
  }

  @Action
  async queryNextPage ([searchQuery = '', nextPageId = '', maxResults = 6]) : Promise<YoutubeResponseApi> {
    let param = new YoutubeParamClass(searchQuery)
    param.pageToken = nextPageId
    param.maxResults = maxResults
    return this.sendSearchDataToApi(param)
  }

  @Action
  async queryVideoDetails ([videoId = '', maxResults = 1]) : Promise<YoutubeVideoResponseApi> {
    let param = new YoutubeVideoParamClass(videoId)
    param.maxResults = maxResults
    return this.sendSearchVideoToApi(param)
  }
}
