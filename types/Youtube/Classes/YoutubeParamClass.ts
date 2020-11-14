import { YoutubeParams } from '~/types/Youtube/Interfaces/Youtube'

export class YoutubeParamClass implements YoutubeParams {
  public channelId?: string;
  public channelType?: string;
  public eventType?: string;
  public maxResults?: number = 6;
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
  public part: string = 'id,snippet';
  public key: string = '';

  constructor (
    public q: string
  ) {
    this.key = process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : ''
  }
}
