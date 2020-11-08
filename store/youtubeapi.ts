import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/axiosApi'
// import getEnvVariables from '~/utils/envReader'
import { Youtube, YoutubeParams } from '~/types/Youtube'

class YoutubeParamClass implements YoutubeParams {
  public channelId?: string;
  public channelType?: string;
  public eventType?: string;
  public maxResults?: number;
  public onBehalfOfContentOwner?: string;
  public order?: string;
  public pageToken?: string;
  public publishedAfter?: Date;
  public publishedBefore?: Date;
  public regionCode?: string;
  public safeSearch?: string;
  public type?: string;
  public videoCaption?: string;
  public videoCategoryId?: string;
  public videoDefinition?: string;
  public videoDimension?: string;
  public videoDuration?: string;
  public videoEmbeddable?: string;
  public videoLicense?: string;
  public videoSyndicated?: string;
  public videoType?: string;
  public part: string = 'id,snippet'
  public key: string = ''

  constructor (
    public q: string
  ) {
    this.key = process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : ''
  }
}

@Module({
  name: 'youtubeapi',
  stateFactory: true,
  namespaced: true
})
export default class YoutubeapiModule extends VuexModule {
  // videos: Youtube[] = []
  //
  // @Mutation
  // setUsers (users: Youtube[]) {
  //   this.videos = users
  // }
  //
  // @Action
  // async getUsers () {
  //   // const call = await $axios.$get('/youtubeApi')
  //   // this.setUsers(users)
  // }

  @Action
  async sendDataToApi (params: YoutubeParams): Promise<Youtube> {
    // Todo: Fix Error when API not returns 200
    const response = await $axios.$get('/youtubeApi/search', { params })
    const result: Youtube = <Youtube>response
    return result
  }

  @Action
  async queryApiData (searchQuery: string): Promise<Youtube> {
    let param = new YoutubeParamClass(searchQuery)
    return this.sendDataToApi(param)
  }
}
