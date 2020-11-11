import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/axiosApi'
import { Youtube, YoutubeParams } from '~/types/Youtube/Interfaces/Youtube'
import { YoutubeParamClass } from '~/types/Youtube/Classes/YoutubeParamClass'
import { YoutubeResponseApi } from '~/types/Youtube/Classes/YoutubeResponseApi'

@Module({
  name: 'youtubeapi',
  stateFactory: true,
  namespaced: true
})
export default class YoutubeapiModule extends VuexModule {
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
  async queryByParamApiData (parameters: YoutubeParams): Promise<YoutubeResponseApi> {
    return this.sendSearchDataToApi(parameters)
  }

  @Action
  async queryByTextApiData (searchQuery: string, maxResults: number = 6): Promise<YoutubeResponseApi> {
    let param = new YoutubeParamClass(searchQuery)
    param.maxResults = maxResults
    return this.queryByParamApiData(param)
  }

  @Action
  async queryNextPage ([searchQuery = '', nextPageId = '', maxResults = 6]) : Promise<YoutubeResponseApi> {
    let param = new YoutubeParamClass(searchQuery)
    param.pageToken = nextPageId
    param.maxResults = maxResults
    return this.queryByParamApiData(param)
  }
}
