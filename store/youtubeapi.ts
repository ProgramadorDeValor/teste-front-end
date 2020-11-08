import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/axiosApi'
// import getEnvVariables from '~/utils/envReader'
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
        let result = new YoutubeResponseApi(true)
        result.YoutubeData = <Youtube> res
        return result
      })
      .catch((e) => {
        let result = new YoutubeResponseApi(false)
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
  async queryByTextApiData (searchQuery: string): Promise<YoutubeResponseApi> {
    let param = new YoutubeParamClass(searchQuery)
    return this.queryByParamApiData(param)
  }
}
