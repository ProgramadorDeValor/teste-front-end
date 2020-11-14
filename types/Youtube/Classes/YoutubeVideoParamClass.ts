import { YoutubeVideoParams } from '~/types/Youtube/Interfaces/Youtube'

export class YoutubeVideoParamClass implements YoutubeVideoParams {
  public chart?: string;
  public maxResults: number = 1;
  public myRating?: string;
  public onBehalfOfContentOwner?: string;
  public pageToken?: string;
  public part: string = 'snippet,contentDetails,player,statistics';
  public regionCode?: string;
  public videoCategoryId?: string;
  public key: string = '';

  constructor (
    public id: string
  ) {
    this.key = process.env.GOOGLE_API_KEY ? process.env.GOOGLE_API_KEY : ''
  }
}
