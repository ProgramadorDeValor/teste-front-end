import { YoutubeVideoData } from '~/types/Youtube/Interfaces/Youtube'

export class YoutubeVideoResponseApi {
  public YoutubeVideoData : YoutubeVideoData | undefined;
  public errorMessage: string | undefined;
  public erroObj : object | undefined;

  constructor (
    public success : boolean,
    public id:string
  ) {
  }
}
